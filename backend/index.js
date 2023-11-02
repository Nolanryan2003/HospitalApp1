import express, { urlencoded } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Patient } from "./models/patientModel.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  const patient = await Patient.find();

  res.json(patient);
});

app.post("/newPatient", async (req, res) => {
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

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
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
