import express from "express";
import { login, register, update } from "../controllers/authController.js";

const router = express.Router();

router.post("/update", update);
router.post("/login", login);
router.post("/register", register);

export default router;
