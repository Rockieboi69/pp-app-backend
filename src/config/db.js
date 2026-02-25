import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) throw new Error("MONGO_URI not found in .env");

  // Options to bypass common local network blocks
  const connectionOptions = {
    family: 4, // Forces IPv4, which usually fixes ECONNREFUSED
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of hanging
  };

  await mongoose.connect(uri, connectionOptions);
  // This will trigger the "Successfully ✅" log in your server.js
};

export default connectDB;