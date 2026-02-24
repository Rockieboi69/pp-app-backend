import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log("Connecting to Database...");
    await connectDB();
    console.log("MongoDB Connected Successfully ✅");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🔗 Frontend can now connect via CORS`);
    });
  } catch (err) {
    console.error("❌ Server start failed:", err.message);
    process.exit(1);
  }
};

startServer();