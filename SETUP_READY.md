# ✅ Setup Complete - Ready to Run!

## 🚀 Next Steps to Run the Application

### Step 1: Start MongoDB (Choose One Option)

**Option A: MongoDB Local Installation (Windows)**

If MongoDB is installed:
```powershell
# MongoDB should auto-start as Windows service
# Or manually start:
mongod
```

**Option B: MongoDB Atlas Cloud (Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Get connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/health-chatbot`)
5. Update `.env` in backend folder:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/health-chatbot
   ```

**Option C: Docker MongoDB (If Docker installed)**

```powershell
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

---

### Step 2: Start Backend Server

**In PowerShell:**

```powershell
cd C:\Users\varsh\Desktop\sample\health-chatbot\backend
npm run dev
```

**Expected Output:**
```
Server running on port 5000
MongoDB connected successfully
```

---

### Step 3: Start Frontend (Open NEW PowerShell)

**In a New PowerShell Window:**

```powershell
cd C:\Users\varsh\Desktop\sample\health-chatbot\frontend
npm start
```

**Expected Output:**
- Browser opens to http://localhost:3000
- "Compiled successfully!"

---

## 🎯 Quick Test

1. **Register**: Create account (http://localhost:3000/register)
   - Name: John Doe
   - Email: john@example.com  
   - Password: test123456

2. **Chat**: Test the chatbot (http://localhost:3000)
   - Say "I have a fever"
   - Ask "Book an appointment"

3. **Appointments**: Book an appointment
   - Select specialty and doctor
   - Choose future date
   - Confirm booking

---

## ⚠️ Troubleshooting

**Error: "Failed to connect to MongoDB"**
- Ensure MongoDB is running (use Atlas option above)
- Verify MONGODB_URI in backend/.env

**Error: "Port 5000 already in use"**
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Error: "Port 3000 already in use"**
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**npm install failed?**
```powershell
rm -r node_modules
npm install
```

---

## 📝 Current Status

✅ Backend installed
✅ Frontend installed
✅ Configuration files created (.env)
✅ Ready to run!

Only missing: MongoDB should be running

---

## 🌐 Access Points After Startup

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **MongoDB**: localhost:27017

---

Need help? Check these files:
- INSTALLATION.md - Detailed installation guide
- QUICKSTART.md - Quick reference
- README.md - Full documentation
