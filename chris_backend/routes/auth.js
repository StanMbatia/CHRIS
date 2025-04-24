const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Only admin');
    const users = await User.find().select('name _id');
    res.json(users);
  });  

module.exports = router;
