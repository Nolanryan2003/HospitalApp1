import asyncHandler from "express-async-handler";
import { MainPatient } from "../models/patientModel.js";
import { Consultation } from "../models/consultModel.js";

const getAllConsults = asyncHandler(async (req, res) => {
  try {
    const consults = await Consultation.find().populate({
      path: "patientReference",
      select: "firstName lastName age doctorAssigned",
    });
    res.json(consults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createOneConsult = asyncHandler(async (req, res) => {
  const { dateOfBirth, diagnosis, status, phoneNumber, additionalNotes } =
    req.body;

  try {
    // Find the patient by date of birth
    const patient = await MainPatient.findOne({ dateOfBirth: dateOfBirth });

    // Check if patient exists
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Create a new consultation with the patient's ID
    const newConsult = {
      patientReference: patient._id,
      diagnosis,
      status,
      phoneNumber,
      additionalNotes,
    };

    const consult = await Consultation.create(newConsult);

    // Populate the response with patient details
    const populatedConsult = await Consultation.findById(consult._id).populate({
      path: "patientReference",
      select: "firstName lastName age doctorAssigned", // Adjust these fields based on your model's structure
    });

    res.status(201).json(populatedConsult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export { getAllConsults, createOneConsult };
