import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["High Demand", "Available", "Congested"],
      default: "Available",
    },
    image: {
      type: String,
      required: true,
    },
    // Keep these if you plan to use them for logic later
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { 
    timestamps: true,
    // 🔥 FIX: This forces Mongoose to look at the 'slot' collection (singular) 
    // matching your screenshot exactly.
    collection: 'slot' 
  }
);

const Slot = mongoose.model("Slot", slotSchema);

export default Slot;