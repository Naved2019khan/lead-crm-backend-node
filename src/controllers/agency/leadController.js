import AgencyLead from "../../models/AgencyLead.js";

// Create lead
export const createLead = async (req, res) => {
  try {
      const { email, phone } = req.body;
      const duplicate = await AgencyLead.findOne({
      $or: [
        email ? { email } : null,
        phone ? { phone } : null,
      ].filter(Boolean) // remove nulls
    });

    if (duplicate) {
      return res.status(409).json({
        success: false,
        message: "Lead already exists with same email or phone",
        duplicateLead: duplicate,
      });
    }

    const lead = await AgencyLead.create(req.body);
    res.status(201).json({ success: true, lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all leads
export const getLeads = async (req, res) => {
  try {
    const leads = await AgencyLead.find().sort({ createdAt: -1 });
    res.json({ success: true, leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single lead
export const getLead = async (req, res) => {
  try {
    const lead = await AgencyLead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json({ success: true, lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update lead (status, assignedTo, etc.)
export const updateLead = async (req, res) => {
  try {
    const lead = await AgencyLead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Add note
export const addNote = async (req, res) => {
  try {
    const lead = await AgencyLead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    lead.notes.push({ body: req.body.body, date: new Date() });

    await lead.save();
    res.json({ success: true, lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
