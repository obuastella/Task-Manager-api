import dotenv from "dotenv";
import app from "./app";
dotenv.config();
const PORT = process.env.PORT;
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });
  } catch (e) {
    console.log("An error occurred starting the server...", e);
  }
};
startServer();
