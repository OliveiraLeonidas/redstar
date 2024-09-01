import express from "express";
import http from "node:http";
import { Server as SocketIOServer } from "socket.io";
const app = express();
const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: { origin: 'http://localhost:3000', methods: ["GET", "POST"] }
});

io.on('connection', (socket) => {
  console.log('A user connected', socket.id);
  socket.on('set_username', username => {
    socket.data.username = username
    console.log(socket.data.username)
  })

  socket.on('message', text => {
    io.emit('receive_message', {
      text, 
      authorId: socket.id,
      author: socket.data.username
    })
  })

  socket.on('disconnect', reason => {
    console.log('User disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 5232;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});