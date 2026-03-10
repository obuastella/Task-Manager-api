import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db connected successfully!");
  } catch (error) {
    console.log("An error occured connecting to db...");
  }
};

export default connectDB;
