const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  const { title, description, date, assignedTo } = req.body;
  try {
    const event = await Event.create({ title, description, date, assignedTo });
    res.json(event);
  } catch {
    res.status(500).send('Error creating event');
  }
};

exports.getUserEvents = async (req, res) => {
  const events = await Event.find({ assignedTo: req.user.id });
  res.json(events);
};

exports.getAllEvents = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });
  const events = await Event.find().populate('assignedTo', 'name email');
  res.json(events);
};
