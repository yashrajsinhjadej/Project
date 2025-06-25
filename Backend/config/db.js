const mongoose = require('mongoose');
const {mongo_url} = require('./config')
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, {
     
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
