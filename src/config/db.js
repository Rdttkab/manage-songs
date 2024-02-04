const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Connected to MongoDB failed: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
