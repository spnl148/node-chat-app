const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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

        socket.emit('newMessage', {
            from: 'Admin',
            text: `Hello ${message.from}! Welcome to the chat app`, 
            createdAt: new Date().getTime()
        });
        socket.broadcast.emit('newMessage', {
            from: 'Admin',
            text: `New user joined ${message.from}`,
            createdAt: new Date().getTime()
        });
    });



    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});