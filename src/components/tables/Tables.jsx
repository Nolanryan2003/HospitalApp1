import "./Tables.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 210 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
  } /*
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },*/,
  { field: "diagnosis", headerName: "Diagnosis", width: 130 },
  { field: "doctorReq", headerName: "Doctor Requesting", width: 150 },
  { field: "phoneNumber", headerName: "Phone Number", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
];

export const Tables = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await Axios.get("http://localhost:5555/");

        // Update the rows state with the fetched data
        setRows(
          response.data.map((other) => ({
            id: other._id,
            lastName: other.lastName,
            firstName: other.firstName,
            age: other.age,
            diagnosis: other.diagnosis,
            doctorReq: other.doctorRequesting,
            phoneNumber: other.phoneNumber,
            status: other.status,
            date: other.date,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
