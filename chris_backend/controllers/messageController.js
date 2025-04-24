const nodemailer = require('nodemailer');
const User = require('../models/user');
const Message = require('../models/message');

exports.sendMessage = async (req, res) => {
  const { to, content } = req.body;
  const receiver = await User.findById(to);
  const sender = await User.findById(req.user.id);
  const message = await Message.create({ from: req.user.id, to, content });

  // Email alert
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'stanmbatia19@gmail.com', 
      pass: '@Wisefool1#Mbatia'
    }
  });

  let mailOptions = {
    from: '"CHRIS System" <stanmbatia19@gmail.com>',
    to: receiver.email,
    subject: `New message from ${sender.name}`,
    text: content
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error('Email failed:', err.message);
  });

  res.json(message);
  
};
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { from: req.user.id },
        { to: req.user.id }
      ]
    }).populate('from to', 'name email'); // optional: to show user info

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};