const express = require('express');
const ChatHistory = require('../models/ChatHistory');
const verifyToken = require('../middleware/auth');
const { generateResponse } = require('../utils/nlp');

const router = express.Router();

// Send message to chatbot
router.post('/message', verifyToken, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    // Generate response using NLP
    const { response, intent } = generateResponse(message);

    // Save chat to database
    const chatRecord = new ChatHistory({
      userId: req.userId,
      userMessage: message,
      botResponse: response,
      category: intent,
    });

    await chatRecord.save();

    res.json({
      userMessage: message,
      botResponse: response,
      intent,
      timestamp: chatRecord.timestamp,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process message', message: err.message });
  }
});

// Get chat history
router.get('/history', verifyToken, async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find({ userId: req.userId }).sort({ timestamp: 1 });
    res.json(chatHistory);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat history', message: err.message });
  }
});

// Clear chat history
router.delete('/history', verifyToken, async (req, res) => {
  try {
    await ChatHistory.deleteMany({ userId: req.userId });
    res.json({ message: 'Chat history cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to clear chat history', message: err.message });
  }
});

module.exports = router;
