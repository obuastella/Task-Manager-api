import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT;
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });
    await connectDB();
  } catch (e) {
    console.log("An error occurred starting the server...", e);
  }
};
startServer();
