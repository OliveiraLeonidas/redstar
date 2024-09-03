import { FastifyInstance } from 'fastify';
import { $ref } from './users.schema';
import { createUser, findMany, findUser, login } from "./users.controller";

export async function userRoutes(app: FastifyInstance) {
  app.get('/:id',
    {
      preHandler: [app.authenticate]

    },
    findUser
  )
  app.get('/all', findMany)
  app.post('/register', {
      schema: {
        body: $ref('createUserSchema'),
        response: {
          201: $ref('createUserResponseSchema'),
        },
      },
    },
    createUser
  )

  app.post('/login', {
    schema: {
      body: $ref('loginSchema'),
      response: {
        201: $ref('loginResponseSchema')
      }
    }
  },
  login
)
}