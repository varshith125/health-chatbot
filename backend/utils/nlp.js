const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// Health-related keywords and responses
const healthKnowledgeBase = {
  'fever': 'A fever is usually your body\'s way of fighting an infection. Rest, drink plenty of fluids, and monitor your temperature. Seek medical attention if fever persists above 103°F (39.4°C).',
  'cough': 'Coughs can be caused by various conditions. Stay hydrated, use honey to soothe, and avoid irritants. If it persists for more than 3 weeks, see a doctor.',
  'headache': 'Headaches can be caused by stress, dehydration, or tension. Try resting in a dark room, drinking water, and using over-the-counter pain relievers if needed.',
  'fatigue': 'Fatigue can result from lack of sleep, stress, or underlying conditions. Ensure adequate sleep, eat healthy, and see a doctor if it persists.',
  'cold': 'Common cold symptoms include runny nose and congestion. Stay hydrated, rest, and use saline nasal drops. Most colds resolve in 7-10 days.',
  'flu': 'Flu is more severe than a cold. Rest, stay hydrated, and antiviral medications may help. Consult a doctor if symptoms are severe.',
  'appointment': 'To book an appointment with a doctor, please use our appointment booking system.',
};

// Classify user query intent
const classifyIntent = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('doctor')) {
    return 'appointment';
  } else if (lowerMessage.includes('symptom') || lowerMessage.includes('pain') || lowerMessage.includes('hurt')) {
    return 'symptom_check';
  } else if (lowerMessage.includes('advice') || lowerMessage.includes('suggestion')) {
    return 'health_advice';
  }
  return 'general_question';
};

// Find relevant health information using keyword matching
const findHealthInfo = (message) => {
  const tokens = tokenizer.tokenize(message.toLowerCase());
  
  for (const token of tokens) {
    if (healthKnowledgeBase[token]) {
      return healthKnowledgeBase[token];
    }
  }
  
  return 'I\'m not sure about that specific symptom. Could you provide more details? Or you might want to consult with a doctor for personalized advice.';
};

// Generate response based on intent
const generateResponse = (message) => {
  const intent = classifyIntent(message);
  let response = '';

  switch (intent) {
    case 'appointment':
      response = 'I can help you book an appointment. Please use the appointment booking feature to schedule a visit with one of our doctors.';
      break;
    case 'symptom_check':
      response = findHealthInfo(message);
      break;
    case 'health_advice':
      response = 'Here are some general health tips: Exercise regularly, eat balanced meals, stay hydrated, get enough sleep, and manage stress. For specific advice, please consult a healthcare professional.';
      break;
    default:
      response = findHealthInfo(message) || 'Thank you for your question. How can I help you with your health today?';
  }

  return { response, intent };
};

module.exports = {
  classifyIntent,
  findHealthInfo,
  generateResponse,
};
