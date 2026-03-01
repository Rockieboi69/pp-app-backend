import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import authRoutes from "./routes/authRoutes.js";
import parkingRoutes from "./routes/parkingRoutes.js";
import slotRoutes from "./routes/SlotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// --- Middleware Setup ---
app.use(helmet());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://pp-app-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

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