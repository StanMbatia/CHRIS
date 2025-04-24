const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});
const express = require('express');
const mongoose = require('mongoose');



const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://stanmbatia19:JwW2HalbG28DnwPD@chris-backend.nps1xyx.mongodb.net/?retryWrites=true&w=majority&appName=chris-backend';
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};



module.exports = connectDB;
