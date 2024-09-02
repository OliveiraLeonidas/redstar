import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';
const passValidator = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)

const createUserSchema = z.object({
  name: z.string().min(6, {message: 'must have at least 6 characters'}),
  username: z.string().min(6).max(50).toLowerCase(),
  email: z.string().email({message: 'must be a valid email'}),
  password: z.string().min(8).regex(passValidator, {
    message: 'Password is not valid'
  })
})

export type CreateUserInput = z.infer<typeof createUserSchema>

const createUserResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
})

const loginSchema = z.object({
  // name: z.string({
  //   required_error: 'Name is required',
  //   invalid_type_error: 'Name must be a string'
  // }),
  username: z.string({
    required_error: 'Username is required', 
    invalid_type_error: 'Username must be a string'
  }),
  // email: z
  //   .string({
  //     required_error: 'Email is required',
  //     invalid_type_error: 'Email must be a string',
  //   })
  //   .email(),
  password: z.string(),
})
export type LoginUserInput = z.infer<typeof loginSchema>
const loginResponseSchema = z.object({
  accessToken: z.string(),
})

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
  loginSchema,
  loginResponseSchema,
}, { $id: 'UserSchema' })