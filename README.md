# Redstar unrealchat

## Badges

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-%5E13.0.0-lightgrey" alt="Next.js">
  <img src="https://img.shields.io/badge/Node.js-22.6.0-brightgreen" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-10.8.2-blue" alt="npm">
  <img src="https://img.shields.io/badge/Docker-3.1.0-blue" alt="Docker">
  <img src="https://img.shields.io/badge/@types/node-%5E22.5.1-yellow" alt="@types/node">
  <img src="https://img.shields.io/badge/Prisma-%5E5.19.0-brightgreen" alt="Prisma">
  <img src="https://img.shields.io/badge/tsx-%5E4.19.0-yellowgreen" alt="tsx">
  <img src="https://img.shields.io/badge/TypeScript-%5E5.5.4-blueviolet" alt="TypeScript">
  <img src="https://img.shields.io/badge/@fastify/cors-%5E9.0.1-orange" alt="@fastify/cors">
  <img src="https://img.shields.io/badge/@prisma/client-%5E5.19.0-brightgreen" alt="@prisma/client">
  <img src="https://img.shields.io/badge/@types/bcrypt-%5E5.0.2-blue" alt="@types/bcrypt">
  <img src="https://img.shields.io/badge/bcrypt-%5E5.1.1-yellowgreen" alt="bcrypt">
  <img src="https://img.shields.io/badge/dotenv-%5E16.4.5-yellow" alt="dotenv">
  <img src="https://img.shields.io/badge/fastify-%5E4.28.1-blue" alt="fastify">
  <img src="https://img.shields.io/badge/fastify--zod-%5E1.4.0-blueviolet" alt="fastify-zod">
  <img src="https://img.shields.io/badge/socket.io-%5E4.7.5-brightgreen" alt="socket.io">
  <img src="https://img.shields.io/badge/zod-%5E3.23.8-blueviolet" alt="zod">
</p>



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Use case

![alt text](./public/image.png)

## routes

- **create user [POST]** : ```v1/users/register```
- **login user [POST]** : ```v1/users/login```

<br/>

## Getting Started fullstack

First, run the development server for nextjs:

```bash
  # installing modules
  npm i

  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br/>

Then, run the development server:

```bash
  # installing modules
  cd server
  npm i

  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
```

Open [http://localhost:5232](http://localhost:5232) with your browser to see the result.

### TODO

- [] getAll users
- [] logout user route
- [] delete user route
- [] create chatroom instance
- [] user login page (frontend)
- [] user homepage (frontend)