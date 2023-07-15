const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http').Server(app);
const cors = require('cors');
const e = require('express');

app.use(cors());

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', (socket) => {
    socket.emit('UpdateUserInfo', {id: socket.id})

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });

    socket.on("joinRoom", (roomInfo) => {
        console.log("joining room");
        socket.join(roomInfo.room);
        username = roomInfo.username
        io.to(roomInfo.room).emit("joinRoomResponse", roomInfo);
        socket.emit('updateUsername', {username});
        console.log(`User ${socket.id} joined ${roomInfo.room}`);
      });

    socket.on('message', (data) => {
        io.to(data.roomID).emit('messageResponse', {text: data.text, userId: data.userId, username: data.username});
      });

});



app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});