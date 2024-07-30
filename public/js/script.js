const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const msgInput = document.getElementById('msg');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = msgInput.value;
    const username = '<%= user.name %>';
    const room = 'main';

    socket.emit('chatMessage', { username, room, msg });

    msgInput.value = '';
    msgInput.focus();
});

socket.on('message', (msg) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<strong>${msg.username}:</strong> ${msg.msg}`;
    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.emit('joinRoom', { username: '<%= user.name %>', room: 'main' });
