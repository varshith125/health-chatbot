import React, { useState } from 'react';
import { appointmentService } from '../services/api';
import '../styles/Appointments.css';

const BookAppointment = ({ onAppointmentBooked }) => {
  const [formData, setFormData] = useState({
    doctorName: '',
    specialty: '',
    appointmentDate: '',
    reason: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const specialties = [
    'General Practice',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Dermatology',
    'Pediatrics',
    'Psychiatry',
    'Oncology',
  ];

  const doctors = {
    'General Practice': ['Dr. John Smith', 'Dr. Sarah Johnson'],
    'Cardiology': ['Dr. Robert Brown', 'Dr. Emily Davis'],
    'Neurology': ['Dr. Michael Wilson', 'Dr. Lisa Anderson'],
    'Orthopedics': ['Dr. David Martinez', 'Dr. Jennifer Taylor'],
    'Dermatology': ['Dr. Christopher Lee', 'Dr. Amanda White'],
    'Pediatrics': ['Dr. Daniel Garcia', 'Dr. Rachel Green'],
    'Psychiatry': ['Dr. James Miller', 'Dr. Victoria Hall'],
    'Oncology': ['Dr. Matthew Jones', 'Dr. Sophie Clark'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await appointmentService.bookAppointment(formData);
      setSuccess('Appointment booked successfully!');
      setFormData({
        doctorName: '',
        specialty: '',
        appointmentDate: '',
        reason: '',
      });
      if (onAppointmentBooked) {
        onAppointmentBooked(response.data.appointment);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="specialty">Specialty</label>
          <select
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          >
            <option value="">Select a specialty</option>
            {specialties.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="doctorName">Doctor</label>
          <select
            id="doctorName"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
            disabled={!formData.specialty}
          >
            <option value="">Select a doctor</option>
            {formData.specialty && doctors[formData.specialty].map(doctor => (
              <option key={doctor} value={doctor}>{doctor}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Date and Time</label>
          <input
            type="datetime-local"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Visit</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Describe your symptoms or reason for visit"
            required
            rows="4"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
