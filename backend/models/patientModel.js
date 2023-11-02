import mongoose from "mongoose"

const patientSchema =  mongoose.Schema(
    {
       name :{
        type: String,
        required: true,
       },
       dateOfBirth :{
        type: String,
        required: true,
       },
       gender :{
        type: String,
        required: true,
       },
       currentMedications :{
        type: Array,
        required: true,
       },
       allergies :{
        type: Array,
        required: false,
       },
       pastMedicalConditions :{
        type: Array,
        required: false,
       },
       severity :{
        type: String,
        required: true,
       },
       bloodPressure :{
        type: Number,
        required: false,
       },
       temperature :{
        type: Number,
        required: true,
       },
       weight :{
        type: Number,
        required: true,
       },
       surgicalHistory :{
        type: Array,
        required: false,
       },
       doctorAssigned :{
        type: String,
        required: true,
       },
    },
    {
        timestamps : true,
    }
);

export const Patient = mongoose.model('Patients', patientSchema)