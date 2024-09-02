import fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import jwt, { type FastifyJWT } from '@fastify/jwt';
import { Server as SocketIOServer } from 'socket.io';
import { userRoutes } from './modules/users/users.route';
import { userSchemas } from './modules/users/users.schema';
import * as dotenv from 'dotenv';

dotenv.config();
const app = fastify({ logger: true });

// CORS CONFIG
app.register(cors, {
  origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  })

// COOKIES CONFIG
app.register(cookie, {
  secret: process.env.COOKIE_SECRET,
  hook: 'preHandler',
  parseOptions: {}
})

// JWT CONFIG
app.register(jwt, {
  secret: process.env.JWT_SECRET || '',
  cookie: {
    cookieName: 'access_token',
    signed: true,
  },
  sign: {
    expiresIn: '3d'
  }
})

app.addHook('preHandler', (req, res, next) => {
  req.jwt = app.jwt;
  next();
});

app.decorate(
  'authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
      const token = req.cookies.access_token
      if (!token) {
          return reply.status(401).send({message: 'Authentication required'})
      }

      const decoded = req.jwt.verify<FastifyJWT['User']>(token)
      req.user = decoded
  }

)

app.register(userRoutes, {prefix: 'v1/users'})

for (let schema of [...userSchemas]) {
  app.addSchema(schema)
}

const port: number = 5232 || Number(process.env.PORT)

app.listen({
  port: port,
  host: '0.0.0.0'
}).then(() => {
  console.log(`running server on http://localhost:${port}`)
}).catch(err => {
  console.error(err)
  process.exit(1);
})


