import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import {Patient} from './models/patientModel.js';

const app = express();

app.use(express.json());


app.get('/', (req,res ) => {
    console.log(req);
    return res.status(234).send("welcome to mern tut")
});

app.post('/newPatient', async (req,res) => {
    try{
        if(
            !req.body.weight ||
            !req.body.temperature ||
            !req.body.severity ||
            !req.body.currentMedications ||
            !req.body.gender ||
            !req.body.dateOfBirth ||
            !req.body.name ||
            !req.body.doctorAssigned
        ) {
            return res.status(400).send({
                message: 'Send all required fields'
        });
        }
        const newPatient ={
            doctorAssigned : req.body.doctorAssigned,
            surgicalHistory : req.body.surgicalHistory,
            weight : req.body.weight,
            temperature : req.body.temperature,
            bloodPressure : req.body.bloodPressure,
            severity : req.body.severity,
            pastMedicalConditions : req.body.astMedicalConditions,
            allergies : req.body.allergies,
            currentMedications : req.body.currentMedications,
            gender : req.body.gender ,
            dateOfBirth : req.body.dateOfBirth,
            name : req.body.name,
        };
        const patient = await Patient.create(newPatient)

        return res.status(201).send(patient);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})



mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`listening to port : ${PORT}`)
    });
})
.catch((error) => {
    console.log(error);
});