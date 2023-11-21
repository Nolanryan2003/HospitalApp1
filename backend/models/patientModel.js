import mongoose from "mongoose";

const mainPatientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    currentMedications: {
      type: Array,
      required: false,
    },
    allergies: {
      type: Array,
      required: false,
    },
    pastMedicalConditions: {
      type: Array,
      required: false,
    },
    severity: {
      type: String,
      required: false,
    },
    bloodPressure: {
      type: Number,
      required: false,
    },
    temperature: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    surgicalHistory: {
      type: Array,
      required: false,
    },
    doctorAssigned: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const MainPatient = mongoose.model("MainPatients", mainPatientSchema);
