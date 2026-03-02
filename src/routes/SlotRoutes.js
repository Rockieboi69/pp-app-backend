import express from "express";
import Slot from "../models/Slot.js"; // Ensure path is correct

const router = express.Router();

// GET /api/slots
router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find({}); // Fetches everything in the 'slot' collection
    res.status(200).json(slots);
  } catch (error) {
    console.error("Error fetching slots:", error);
    res.status(500).json({ message: "Server Error: Could not fetch slots" });
  }
});

export default router;