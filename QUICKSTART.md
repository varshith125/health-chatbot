# Quick Start Guide - Health Chatbot

## Option 1: Docker Setup (Recommended)

### Prerequisites
- Docker
- Docker Compose

### Steps

1. **Navigate to project directory:**
```bash
cd health-chatbot
```

2. **Build and run with Docker Compose:**
```bash
docker-compose up --build
```

3. **Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

4. **Stop the application:**
```bash
docker-compose down
```

---

## Option 2: Manual Setup

### Backend Setup

1. **Install backend dependencies:**
```bash
cd backend
npm install
```

2. **Create .env file:**
```bash
cp .env.example .env
```

3. **Configure MongoDB:**
   - Install MongoDB locally or use MongoDB Atlas
   - Update MONGODB_URI in .env

4. **Start backend server:**
```bash
npm run dev
```

Backend runs on http://localhost:5000

### Frontend Setup

1. **Install frontend dependencies:**
```bash
cd frontend
npm install
```

2. **Start frontend:**
```bash
npm start
```

Frontend runs on http://localhost:3000

---

## Testing the Application

### Register a New User
1. Go to http://localhost:3000/register
2. Fill in name, email, and password
3. Click Register

### Login
1. Go to http://localhost:3000/login
2. Enter your email and password
3. Click Login

### Chat with AI
1. Click "Start Chat" on dashboard
2. Ask health-related questions like:
   - "I have a fever"
   - "What should I do for a cough?"
   - "I want to book an appointment"

### Book an Appointment
1. Click "Book Now" on dashboard
2. Select specialty and doctor
3. Choose date and time
4. Enter reason for visit
5. Click "Book Appointment"

### View Appointments
1. Click "View Appointments" on dashboard
2. See all your booked appointments
3. Cancel if needed

---

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/health-chatbot
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- For MongoDB Atlas: Use connection string from Atlas dashboard

### Port Already in Use
```bash
# Kill process using port
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Dependencies Issue
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## Features

✅ User Authentication (Register/Login)
✅ AI Health Chatbot with NLP
✅ Chat History
✅ Book Doctor Appointments
✅ Manage Appointments
✅ User Profile Management
✅ Responsive Design
✅ Secure JWT Authentication

---

## Support

For issues, check:
1. Console logs (Frontend: Browser DevTools, Backend: Terminal)
2. MongoDB connection
3. PORT availability
4. Environment variables

---

## Next Steps

After successful setup:
1. Enhance NLP with machine learning
2. Add video consultation feature
3. Integrate with real doctor scheduling systems
4. Add mobile support
5. Implement payment gateway
