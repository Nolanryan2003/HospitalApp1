import express from "express";
import {update} from "../Auth/auth.js"

const router = express.Router();

router.post("/", update)

export default router;