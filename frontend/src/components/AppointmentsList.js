import React, { useState, useEffect } from 'react';
import { appointmentService } from '../services/api';
import '../styles/Appointments.css';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    setLoading(true);
    try {
      const response = await appointmentService.getAppointments();
      setAppointments(response.data);
    } catch (err) {
      setError('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await appointmentService.cancelAppointment(appointmentId);
        loadAppointments();
      } catch (err) {
        setError('Failed to cancel appointment');
      }
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return '#4CAF50';
      case 'pending':
        return '#FF9800';
      case 'cancelled':
        return '#f44336';
      default:
        return '#2196F3';
    }
  };

  if (loading) return <div>Loading appointments...</div>;

  return (
    <div className="appointments-list-container">
      <h2>Your Appointments</h2>
      {error && <div className="error">{error}</div>}

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <div className="appointments-grid">
          {appointments.map(appointment => (
            <div key={appointment._id} className="appointment-card">
              <div className="appointment-header">
                <h3>{appointment.doctorName}</h3>
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(appointment.status) }}
                >
                  {appointment.status}
                </span>
              </div>
              <p><strong>Specialty:</strong> {appointment.specialty}</p>
              <p><strong>Date & Time:</strong> {formatDate(appointment.appointmentDate)}</p>
              <p><strong>Reason:</strong> {appointment.reason}</p>
              {appointment.notes && <p><strong>Notes:</strong> {appointment.notes}</p>}
              {appointment.status !== 'cancelled' && (
                <button
                  onClick={() => handleCancelAppointment(appointment._id)}
                  className="cancel-btn"
                >
                  Cancel Appointment
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentsList;
