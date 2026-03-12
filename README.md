# Health Chatbot Application

A full-stack health chatbot application built with React, Node.js, Express, and MongoDB. The chatbot provides health advice, answers health questions, and allows users to book appointments with doctors.

## Features

### 🤖 AI Chatbot
- Natural Language Processing (NLP) for understanding user queries
- Health advice and recommendations
- Symptom checking
- Chat history stored in MongoDB
- Intent classification (health_advice, appointment, symptom_check, general_question)

### 👨‍⚕️ Doctor Appointments
- Book appointments with qualified doctors
- Multiple specialties available
- View and manage appointments
- Appointment status tracking (pending, confirmed, completed, cancelled)

### 👤 User Management
- User registration and login
- JWT-based authentication
- User profile management
- Medical history tracking
- Allergy information storage

### 💾 Data Persistence
- MongoDB for persistent storage of:
  - User profiles
  - Chat history
  - Appointments
  - Medical information

## Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Natural** - NLP library
- **bcryptjs** - Password hashing

## Project Structure

```
health-chatbot/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── ChatHistory.js
│   │   └── Appointment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── chat.js
│   │   └── appointments.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── nlp.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── ChatBot.js
│   │   │   ├── BookAppointment.js
│   │   │   └── AppointmentsList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── Auth.css
│   │   │   ├── ChatBot.css
│   │   │   ├── Appointments.css
│   │   │   └── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd health-chatbot/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure your MongoDB URI and JWT secret in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/health-chatbot
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd health-chatbot/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Chat
- `POST /api/chat/message` - Send a message to chatbot
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/history` - Clear chat history

### Appointments
- `POST /api/appointments/book` - Book an appointment
- `GET /api/appointments` - Get user appointments
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

## Usage

1. **Register/Login**: Create an account or log in with existing credentials
2. **Chat with AI**: Start chatting with the health chatbot for health advice
3. **Book Appointments**: Select a specialty and doctor, then book an appointment
4. **Manage Appointments**: View and manage your booked appointments

## NLP Features

The chatbot uses Natural Language Processing to:
- Classify user intent
- Match keywords with health information
- Provide relevant responses
- Track conversation sentiment

### Built-in Health Knowledge Base
- Fever
- Cough
- Headache
- Fatigue
- Cold
- Flu

## Future Enhancements

- [ ] Advanced NLP with machine learning
- [ ] Video consultation support
- [ ] Prescription management
- [ ] Integration with real doctor scheduling systems
- [ ] SMS notifications
- [ ] Mobile app
- [ ] Payment gateway integration
- [ ] Medical report upload

## License

MIT License

## Support

For issues or questions, please contact the development team.
