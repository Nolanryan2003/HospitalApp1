import mongoose from "mongoose";

const patientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    diagnosis: {
      type: Array,
      required: false,
    },
    doctorRequesting: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["stat", "routine"],
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Patient = mongoose.model("Patients", patientSchema);
