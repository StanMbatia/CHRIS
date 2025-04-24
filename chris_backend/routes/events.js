const express = require('express');
const { createEvent, getUserEvents, getAllEvents } = require('../controllers/eventController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createEvent);
router.get('/mine', auth, getUserEvents);
router.get('/', auth, getAllEvents);

module.exports = router;
