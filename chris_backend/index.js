const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '.env')
});
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const messageRoutes = require('./routes/message');
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
