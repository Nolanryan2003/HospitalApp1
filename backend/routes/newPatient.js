import express from "express";
import { Patient } from "../models/patientModel.js";

const router = express.Router();


router.post("/", async (req, res) => {
    try {
      // if (
      //   !req.body.weight ||
      //   !req.body.temperature ||
      //   !req.body.severity ||
      //   !req.body.currentMedications ||
      //   !req.body.gender ||
      //   !req.body.dateOfBirth ||
      //   !req.body.name ||
      //   !req.body.doctorAssigned
      // ) {
      //   return res.status(400).send({
      //     message: "Send all required fields",
      //   });
      // }
      const newPatient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        age: req.body.age,
        diagnosis: req.body.diagnosis,
        doctorRequesting: req.body.doctorRequesting,
        status: req.body.status,
        phoneNumber: req.body.phoneNumber,
        date: datetime,
      };
      const patient = await Patient.create(newPatient);
  
      return res.status(201).send(patient);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  var currentdate = new Date();

  var datetime =
  currentdate.getDay() +
  "/" +
  currentdate.getMonth() +
  "/" +
  currentdate.getFullYear() +
  "@" +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

export default router;