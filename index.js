const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');

// Settings
app.set('port', process.env.port || 3000);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening
const server = app.listen(app.get('port'), () => {
    console.log("Server on port: " + app.get('port'));
});

const io = socketio(server);

// web sockets
io.on('connection', socket => {
    console.log("New connection", socket.id);
    socket.on('mess', data => {
        io.sockets.emit('serverMess', data);
    })
});
