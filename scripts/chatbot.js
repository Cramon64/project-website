const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

chatToggle.addEventListener('click', () => {
    chatContainer.classList.remove('hidden');
    chatToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
    chatToggle.style.display = 'flex';
});

