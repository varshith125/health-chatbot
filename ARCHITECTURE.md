# Health Chatbot Full Stack Application

A complete full-stack health chatbot application with the following capabilities:

## Project Architecture

```
health-chatbot/
├── backend/ (Node.js + Express)
│   ├── Server: REST API on port 5000
│   ├── Database: MongoDB
│   ├── Authentication: JWT
│   └── Features: Chat, Appointments, User Management
│
├── frontend/ (React)
│   ├── Client: React on port 3000
│   ├── Routing: React Router
│   ├── Styling: CSS3
│   └── Features: Chat UI, Appointments, Dashboard
│
└── Documentation
    ├── README.md (Full documentation)
    └── QUICKSTART.md (Setup guide)
```

## Completed Components

### Backend (Node.js + Express)
✅ RESTful API server
✅ MongoDB database integration
✅ User authentication (JWT)
✅ Chat message endpoint with NLP
✅ Appointment booking system
✅ User profile management
✅ Natural Language Processing
✅ Error handling middleware
✅ CORS enabled
✅ Environment configuration

### Frontend (React)
✅ User Authentication (Login/Register)
✅ Dashboard with navigation
✅ Chatbot interface with message history
✅ Appointment booking form
✅ Appointments list management
✅ Responsive design
✅ API service layer
✅ Error handling
✅ Loading states
✅ Professional styling

### Database Models (MongoDB)
✅ User model with password hashing
✅ ChatHistory model with intent classification
✅ Appointment model with status tracking

### NLP Features
✅ Intent classification
✅ Keyword-based response matching
✅ Health knowledge base
✅ Chat history analysis

### DevOps
✅ Docker support
✅ Docker Compose orchestration
✅ Environment configuration
✅ Production-ready structure

## Key Features

### 1. User Management
- Registration and login
- JWT token-based authentication
- User profile with medical history
- Allergy tracking
- Age and personal information

### 2. Health Chatbot
- Natural Language Processing
- Intent classification (health_advice, appointment, symptom_check, general_question)
- Health advice generation
- Chat history persistence
- Real-time conversation

### 3. Appointment System
- Book appointments with doctors
- Multiple specialties and doctors
- Date/time selection
- Visit reason tracking
- Appointment status management (pending, confirmed, completed, cancelled)
- Cancel appointments

### 4. Security
- Password hashing with bcryptjs
- JWT authentication
- Protected API endpoints
- Secure token storage

## Technology Stack

### Frontend
- React 18.2.0
- React Router 6.11.2
- Axios 1.4.0
- CSS3 with responsive design
- Modern JavaScript (ES6+)

### Backend
- Node.js (v14+)
- Express 4.18.2
- MongoDB with Mongoose 7.0.3
- JWT (jsonwebtoken)
- NLP (natural library)
- bcryptjs for password hashing
- CORS support

### DevOps
- Docker containerization
- Docker Compose orchestration
- Multi-stage builds
- Environment management

## API Endpoints

### Authentication
- POST `/api/auth/register` - Create new user
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile
- PUT `/api/auth/profile` - Update user profile

### Chat
- POST `/api/chat/message` - Send message to chatbot
- GET `/api/chat/history` - Get chat history
- DELETE `/api/chat/history` - Clear chat history

### Appointments
- POST `/api/appointments/book` - Book new appointment
- GET `/api/appointments` - Get user appointments
- PUT `/api/appointments/:id` - Update appointment
- DELETE `/api/appointments/:id` - Cancel appointment

## Getting Started

### Option 1: Docker (Recommended)
```bash
cd health-chatbot
docker-compose up --build
```

### Option 2: Manual Setup

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Future Enhancements
- [ ] Advanced machine learning NLP
- [ ] Video consultation integration
- [ ] Prescription management
- [ ] Real-time notifications
- [ ] Mobile application
- [ ] Payment integration
- [ ] Analytics dashboard
- [ ] Third-party doctor API integration

## File Structure

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
│   ├── .env.example
│   ├── .gitignore
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Register.js
│   │   │   ├── Login.js
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
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── favicon.ico
│   ├── package.json
│   ├── .gitignore
│   └── Dockerfile
├── docker-compose.yml
├── README.md
├── QUICKSTART.md
└── ARCHITECTURE.md
```

## Status Summary

✅ **Complete Project Delivered**
- Full-stack application ready for deployment
- All core features implemented
- Docker containerization configured
- Comprehensive documentation
- Production-ready code structure
- Security best practices implemented
- Responsive user interface
- Database integration complete
- NLP engine functional
- Error handling robust

The application is ready to be deployed and used. All components work together seamlessly!
