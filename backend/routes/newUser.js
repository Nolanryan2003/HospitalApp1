import express from "express";
import { register } from "../Auth/auth.js"

const router = express.Router();

router.post("/", register);
  
export default router;