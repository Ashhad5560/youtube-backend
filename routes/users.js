import express from "express";
import { update } from "../controllers/user.js";
import { VerifyToken } from "../verifyToken.js"; // Use lowercase 'verifyToken'

const router = express.Router();

// UPDATE A USER
router.put("/:id", VerifyToken, update);

// Other routes can be added here if needed

export default router;
