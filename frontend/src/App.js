import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ChatBot from './components/ChatBot';
import BookAppointment from './components/BookAppointment';
import AppointmentsList from './components/AppointmentsList';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      {user && (
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Health Chatbot</h1>
            <div className="nav-info">
              <span>Welcome, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login onSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register onSuccess={handleLoginSuccess} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/appointments" element={<AppointmentsList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1>Welcome to Health Chatbot</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Chat with AI</h2>
            <p>Get instant answers to your health questions and receive personalized health advice.</p>
            <a href="/chat" className="dashboard-link">Start Chat</a>
          </div>
          <div className="dashboard-card">
            <h2>Book Appointment</h2>
            <p>Schedule an appointment with a qualified doctor based on your specific health needs.</p>
            <a href="/book-appointment" className="dashboard-link">Book Now</a>
          </div>
          <div className="dashboard-card">
            <h2>My Appointments</h2>
            <p>View and manage all your scheduled appointments with doctors.</p>
            <a href="/appointments" className="dashboard-link">View Appointments</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
