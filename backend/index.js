import express, { urlencoded } from "express";
import { PORT, mongoDBURL } from "./config.js";
import newPatientRoute from './routes/newPatient.js'
import newUserRoute from './routes/newUser.js'
import loginRoute from './routes/login.js'
import updateRoute from './routes/updateRole.js'
import { Patient } from "./models/patientModel.js";
import mongoose from "mongoose";
import {User} from "./models/userModel.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  const patient = await Patient.find();

  res.json(patient);
});

app.use('/newPatient', newPatientRoute);

app.use('/newUser',newUserRoute)

app.use('/login',loginRoute)

app.use('/update',updateRoute)



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

