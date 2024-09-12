const socket = new WebSocket('wss://your-app-name.herokuapp.com');

socket.addEventListener('open', function (event) {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', function (event) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = event.data;
    chatBox.appendChild(newMessage);
});

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('chat-input').value;
    socket.send(message);
    document.getElementById('chat-input').value = '';
});
