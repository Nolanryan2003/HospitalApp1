import asyncHandler from "express-async-handler";
import { MainPatient } from "../models/patientModel.js";

const getOnePatient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const mainPatients = await MainPatient.findById(id);
    res.status(201).json(mainPatients);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const createOnePatient = asyncHandler(async (req, res) => {
  const newMainPatient = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    currentMedications: req.body.currentMedications,
    allergies: req.body.allergies,
    pastMedicalConditions: req.body.pastMedicalConditions,
    severity: req.body.severity,
    bloodPressure: req.body.bloodPressure,
    temperature: req.body.temperature,
    weight: req.body.weight,
    surgicalHistory: req.body.surgicalHistory,
    doctorAssigned: req.body.doctorAssigned,
    patientReference: req.body.patientReference, // Assuming this is provided in the request
  };
  try {
    // Creating a new patient from the request body
    const newPatient = await MainPatient.create(newMainPatient);

    // Sending the saved patient back as a response
    res.status(201).json(newPatient);
  } catch (error) {
    // Handling any errors
    res.status(400).json({ message: error.message });
  }
});
export { getOnePatient, createOnePatient };
