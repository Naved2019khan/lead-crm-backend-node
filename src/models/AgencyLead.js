import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String },
    phone: { type: String },

    source: { type: String, default: "Website" },   // Google Ads, LinkedIn, etc.
    campaign: { type: String },                     // Optional tracking
    value: { type: Number ,default: 0},
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "lost", "converted"],
      default: "new",
    },
    duplicateLead : { type: Boolean, default: false },
    message: { type: String },
    location: { type: String },
    country: { type: String },
    company: { type: String },
    assignedTo: { type: String }, // CRM user ID or name

    notes: [{ body: String, date: Date }],

    tags: [String],  // example: ["high-priority", "follow-up"]
  },
  { timestamps: true , versionKey: false,  }
);

export default mongoose.model("Agency_Lead", leadSchema);
