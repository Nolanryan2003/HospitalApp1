import "./HospitalTable.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import { Box } from "@mui/material";

export const HopsitalTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await Axios.get("http://localhost:5555/newPatient");
        setRows(
          response.data.map((patient) => ({
            id: patient._id,
            lastName: patient.lastName,
            firstName: patient.firstName,
            age: patient.age,
            dateOfBirth: patient.dateOfBirth,
            gender: patient.gender,
            currentMedications: patient.currentMedications.join(", "),
            allergies: patient.allergies.join(", "),
            pastMedicalConditions: patient.pastMedicalConditions.join(", "),
            severity: patient.severity,
            bloodPressure: patient.bloodPressure,
            temperature: patient.temperature,
            weight: patient.weight,
            surgicalHistory: patient.surgicalHistory.join(", "),
            doctorAssigned: patient.doctorAssigned,
          }))
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 145 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 50 },
    { field: "dateOfBirth", headerName: "Date Of Birth", width: 120 },
    { field: "gender", headerName: "Gender", width: 100 },
    {
      field: "currentMedications",
      headerName: "Current Medications",
      width: 200,
    },
    { field: "allergies", headerName: "Allergies", width: 200 },
    {
      field: "pastMedicalConditions",
      headerName: "Past Medical Conditions",
      width: 200,
    },
    { field: "severity", headerName: "Severity", width: 100 },
    {
      field: "bloodPressure",
      headerName: "Blood Pressure",
      type: "number",
      width: 100,
    },
    {
      field: "temperature",
      headerName: "Temperature",
      type: "number",
      width: 100,
    },
    { field: "weight", headerName: "Weight", type: "number", width: 100 },
    { field: "surgicalHistory", headerName: "Surgical History", width: 200 },
    { field: "doctorAssigned", headerName: "Doctor Assigned", width: 150 },
    // Add any additional columns here
  ];

  return (
    <Box sx={{ height: "600px", width: "1200px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
