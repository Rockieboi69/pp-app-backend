import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

// Render usually provides the PORT via environment variables
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log("Connecting to Database...");
    await connectDB();
    console.log("MongoDB Connected Successfully ✅");

    // 🔥 FIX: Explicitly bind to '0.0.0.0'
    // This allows the server to accept connections from external sources (Render's Load Balancer).
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server start failed:", err.message);
    process.exit(1);
  }
};

startServer();