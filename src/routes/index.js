import express from 'express';
import userRoutes from './userRoutes.js';
import agencyRoutes from './agencyRoutes.js';

const router = express.Router();
// api is added as a prefix

router.use("/", userRoutes);
router.use("/agency",agencyRoutes );

export default router;
