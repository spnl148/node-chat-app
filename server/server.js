const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
app.use(express.static(publicPath));
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');



    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        socket.emit('newMessage', generateMessage('Admin', `Hello ${message.from}! Welcome to the chat app`));
        socket.broadcast.emit('newMessage', generateMessage('Admin', `New user joined ${message.from}`));
    });



    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});