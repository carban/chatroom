// io es cargado debido a que se llama desde un scrip en index.html
const socket = io();

// DOM Elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let send = document.getElementById('send');
let chat = document.getElementById('chat');

send.addEventListener('click', () => {
    socket.emit('mess', { username: username.value, message: message.value })
})

socket.on('serverMess', data => {
    chat.innerHTML += `<p><strong>${data.username}</strong>:${data.message}</p>`;
})


