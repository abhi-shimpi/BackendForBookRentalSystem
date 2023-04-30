const mongoose = require('mongoose');

const DB_URI = 'mongodb://127.0.0.1:27017/my-book-rental-system';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

module.exports = connectToDatabase;
