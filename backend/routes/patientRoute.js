import express from "express";
import {
  getOnePatient,
  createOnePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/:id", getOnePatient);

router.post("/", createOnePatient);

export default router;
