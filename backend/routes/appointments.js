const express = require('express');
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// Book appointment
router.post('/book', verifyToken, async (req, res) => {
  try {
    const { doctorName, specialty, appointmentDate, reason } = req.body;

    if (!doctorName || !specialty || !appointmentDate || !reason) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const appointment = new Appointment({
      userId: req.userId,
      doctorName,
      specialty,
      appointmentDate: new Date(appointmentDate),
      reason,
    });

    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book appointment', message: err.message });
  }
});

// Get user appointments
router.get('/', verifyToken, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.userId }).sort({ appointmentDate: 1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments', message: err.message });
  }
});

// Update appointment
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.json({ message: 'Appointment updated successfully', appointment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update appointment', message: err.message });
  }
});

// Cancel appointment
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.json({ message: 'Appointment cancelled', appointment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to cancel appointment', message: err.message });
  }
});

module.exports = router;
