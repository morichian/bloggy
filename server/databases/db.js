const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
