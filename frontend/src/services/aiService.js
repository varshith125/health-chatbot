// aiService.js

const fetch = require('node-fetch');

const GEMINI_API_URL = 'https://api.gemini.com/v1';
const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';

// Function to call Gemini API
async function callGeminiApi(endpoint, data) {
    const response = await fetch(`${GEMINI_API_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}

// Function to call ChatGPT API
async function callChatGptApi(data) {
    const response = await fetch(CHATGPT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer YOUR_API_KEY` },
        body: JSON.stringify(data)
    });
    return response.json();
}

module.exports = { callGeminiApi, callChatGptApi };