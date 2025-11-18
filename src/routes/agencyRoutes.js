import express from "express";
import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  addNote,
} from "../controllers/agency/leadController.js";

const router = express.Router();

router.post("/create-agency-lead", createLead);
router.get("/get-all-agency-leads", getLeads);
router.get("/get-agency-lead/:id", getLead);
router.put("/update-agency-lead/:id", updateLead);
router.post("/:id/notes", addNote);

export default router;

