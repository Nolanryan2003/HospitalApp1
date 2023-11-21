import express, { urlencoded } from "express";
import { PORT, mongoDBURL } from "./config.js";
import newPatientRoute from "./routes/patientRoute.js";
import authRoute from "./routes/authRoute.js";
import mongoose from "mongoose";
import cors from "cors";
import consultRoute from "./routes/consultsRoute.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/newPatient", newPatientRoute);

app.use("/consults", consultRoute);

app.use("/auth", authRoute);

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
