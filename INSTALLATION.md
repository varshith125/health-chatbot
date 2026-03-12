# Installation & Setup Instructions

## Overview
This is a complete full-stack health chatbot application with React frontend, Node.js/Express backend, MongoDB database, and NLP capabilities.

## Prerequisites
- Node.js v14+ 
- MongoDB (local or MongoDB Atlas account)
- npm or yarn
- Docker & Docker Compose (optional, for containerized setup)

---

## Quick Setup - Docker (Recommended)

### 1. Ensure Docker is installed and running

### 2. Clone/Extract the project

### 3. Run the application:
```bash
cd health-chatbot
docker-compose up --build
```

### 4. Wait for all services to start, then access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000/api/health
- MongoDB: localhost:27017

### 5. To stop:
```bash
docker-compose down
```

---

## Manual Setup - Backend

### 1. Navigate to backend:
```bash
cd health-chatbot/backend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Create .env file:
```bash
cp .env.example .env
```

### 4. Edit .env and set MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/health-chatbot
PORT=5000
JWT_SECRET=your_super_secret_key_12345
NODE_ENV=development
```

For MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/health-chatbot
```

### 5. Start backend:
```bash
npm run dev
```

Expected output:
```
Server running on port 5000
MongoDB connected successfully
```

---

## Manual Setup - Frontend

### 1. Open new terminal, navigate to frontend:
```bash
cd health-chatbot/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Create .env file (optional, defaults to localhost):
```bash
cp .env.example .env
```

### 4. Start frontend:
```bash
npm start
```

This opens http://localhost:3000 in your browser automatically.

---

## Testing the Application

### Create Test Account:
1. Go to Register page (http://localhost:3000/register)
2. Enter:
   - Name: John Doe
   - Email: john@example.com
   - Password: test123456
3. Click Register (auto-login happens)

### Test Chatbot:
1. Click "Start Chat"
2. Send messages like:
   - "I have a fever"
   - "What about cough?"
   - "I want to book an appointment"
   - "What's general health advice?"

### Test Appointments:
1. Click "Book Now"
2. Select:
   - Specialty: General Practice
   - Doctor: Dr. John Smith
   - Date: Future date/time
   - Reason: Regular checkup
3. Click "Book Appointment"
4. View in "Appointments" page

---

## MongoDB Setup

### Local MongoDB:

**On Windows:**
```bash
# If installed: mongodb is usually a Windows service
# Check Services app or verify:
mongosh # Should connect to local MongoDB
```

**On Mac (using Homebrew):**
```bash
brew install mongodb-community
brew services start mongodb-community
mongosh
```

**On Linux:**
```bash
sudo systemctl start mongod
mongo # or mongosh
```

### MongoDB Atlas Cloud:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string (replace placeholders)
4. Add to .env as MONGODB_URI

---

## Project Structure

```
health-chatbot/
├── backend/
│   ├── models/ (User, ChatHistory, Appointment)
│   ├── routes/ (auth, chat, appointments)
│   ├── middleware/ (JWT authentication)
│   ├── utils/ (NLP engine)
│   ├── server.js (Express app)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/ (React components)
│   │   ├── services/ (API client)
│   │   ├── styles/ (CSS files)
│   │   └── App.js (Main app)
│   └── package.json
│
└── Documentation
    ├── README.md
    ├── QUICKSTART.md
    └── ARCHITECTURE.md
```

---

## API Health Check

Verify backend is running:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"message":"Health Chatbot API is running"}
```

---

## Common Issues & Solutions

### Issue: MongoDB Connection Error
**Solution:**
- Check MongoDB is running: `mongosh` or `mongo`
- Verify connection string in .env
- For Atlas: Check IP whitelist in Security settings

### Issue: Port 5000 or 3000 Already in Use
**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :5000
kill -9 <PID>
```

### Issue: npm install fails
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: CORS Error in Browser
**Solution:**
- Backend CORS is configured for all origins (*) in development
- Check backend is running on correct port (5000)

### Issue: Login keeps redirecting to login page
**Solution:**
- Check .env JWT_SECRET is set
- Clear browser localStorage: F12 → Application → localStorage → clear

---

## Environment Variables

### Backend .env
```
MONGODB_URI=mongodb://localhost:27017/health-chatbot
PORT=5000
JWT_SECRET=your_secret_key_change_this
NODE_ENV=development
```

### Frontend .env (optional)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Development Commands

### Backend:
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start without nodemon
npm test         # Run tests (if available)
```

### Frontend:
```bash
npm start        # Start dev server
npm build        # Build for production
npm eject        # Eject CRA (irreversible!)
```

---

## Production Deployment

### Using Docker Compose:
```bash
docker-compose -f docker-compose.yml up -d
```

### Environment for Production:
```
NODE_ENV=production
JWT_SECRET=use_strong_random_secret
MONGODB_URI=your_production_mongodb_uri
```

---

## Features Overview

✅ **User Authentication**
- Register and login
- JWT tokens
- Secure password hashing

✅ **AI Chatbot**
- NLP processing
- Intent classification
- Health knowledge base
- Conversation history

✅ **Doctor Appointments**
- Browse doctors by specialty
- Schedule appointments
- View appointment list
- Cancel appointments

✅ **User Profiles**
- Medical history
- Allergy tracking
- Personal information

✅ **Data Persistence**
- MongoDB storage
- All data synchronized

---

## Support & Troubleshooting

1. Check logs in terminal (backend) and browser console (frontend)
2. Verify all ports (3000, 5000, 27017) are available
3. Ensure MongoDB connection is active
4. For Docker: Check `docker ps` to see running containers
5. Review QUICKSTART.md and README.md for detailed info

---

## Next Steps

After successful setup:
1. Explore the chatbot features
2. Test all components
3. Modify chatbot responses in `/backend/utils/nlp.js`
4. Add more specialties in BookAppointment component
5. Enhance UI with additional features
6. Deploy to cloud (Azure, AWS, Heroku, etc.)

---

## License

MIT License - Free to use and modify

---

Need help? Check the documentation files included in the project!
