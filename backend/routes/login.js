import express from "express";
const router = express.Router();
import {login } from "../Auth/auth.js"

router.post("/",login)

export default router;