import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserInput, LoginUserInput } from './users.schema';
import bcrypt from 'bcrypt';
import { prisma } from '../../database/prisma';
import { UserPayload } from '../../utils/types';

const rounds = Number(process.env.ROUNDS)
export async function createUser(
  req: FastifyRequest<{
    Body: CreateUserInput
  }>,
  reply: FastifyReply
  
) {

  const {name, username, email, password} = req.body
  const user = await prisma.users.findUnique({
    where: {email}
  })

  if (user) {
    return reply.code(409).send({
      message: 'User with this email already exists'
    })
  }

  if (!name || !username || !email || !password) {
    return reply.code(400).send({
      message: 'fields required'
    })
  }

  try {
    const hash = await bcrypt.hash(password, rounds)
    const user = await prisma.users.create({
      data: {
        name,
        username,
        email,
        password: hash
      }
    })
    return reply.code(201).send(user)
  } catch (err) {
    console.log(err)
    return reply.code(500).send(err)
  }
}

export async function login(
  req: FastifyRequest<{ Body: LoginUserInput }>,
  reply: FastifyReply
) {
  const {username, password } = req.body;

  const user = await prisma.users.findUnique({
    where: {username}
  })

  if (!user) {
    return reply.code(401).send({ message: 'invalid username' })
  }

  const isMatch = user && await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    return reply.code(401).send({ message: 'invalid password' })
  }

  const payload: UserPayload = user

  const token = req.jwt.sign(payload);

  reply.setCookie('access_token', token, {
    path: '/',
    httpOnly: true,
    secure: true
  })

  return { accessToken: token }

}