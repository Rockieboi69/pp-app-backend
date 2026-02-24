import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet"; // Recommended for security

import authRoutes from "./routes/authRoutes.js";
import parkingRoutes from "./routes/parkingRoutes.js";
import slotRoutes from "./routes/slotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// --- Middleware Setup ---
app.use(helmet()); // 1. Adds security headers
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Allow Vite's default ports
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json()); // 2. Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // 3. Parse URL-encoded bodies
app.use(morgan("dev")); // 4. Log requests to console

// --- Health Check Route ---
app.get("/", (req, res) => {
  res.json({ 
    status: "Success",
    message: "Parking App Backend is running",
    timestamp: new Date().toISOString()
  });
});

// --- API Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);

// --- Error Handling ---
app.use(notFound);
app.use(errorHandler);

export default app;