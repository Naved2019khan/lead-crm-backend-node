import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/test", getUser);
router.post("/login", loginUser);

export default router;
