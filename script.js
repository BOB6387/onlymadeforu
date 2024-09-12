document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    
    if (chatInput.value.trim() !== "") {
        // Create a new message div
        const message = document.createElement('div');
        message.textContent = chatInput.value;
        message.style.marginBottom = '10px';

        // Append the message to the chat box
        chatBox.appendChild(message);

        // Clear the input field
        chatInput.value = '';
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
