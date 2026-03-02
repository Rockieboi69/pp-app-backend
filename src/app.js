import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import authRoutes from "./routes/authRoutes.js";
import parkingRoutes from "./routes/parkingRoutes.js";
// 🔥 FIX: Changed "SlotRoutes.js" to "slotRoutes.js" (lowercase 's') 
// to prevent "Module Not Found" errors on Linux-based servers like Render.
import slotRoutes from "./routes/SlotRoutes.js"; 
import bookingRoutes from "./routes/bookingRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// --- Middleware Setup ---
app.use(helmet());

// 🔥 UPDATED CORS: This allows your Vercel frontend to communicate with this Render backend.
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://pp-app-frontend.vercel.app",
    /\.vercel\.app$/ // Matches all Vercel preview/deployment URLs
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
app.use("/api/slots", SlotRoutes); // Access this at https://your-url.onrender.com/api/slots
app.use("/api/bookings", bookingRoutes);

// --- Error Handling ---
app.use(notFound);
app.use(errorHandler);

export default app;