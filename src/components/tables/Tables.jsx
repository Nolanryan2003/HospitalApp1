import "./Tables.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import { Box } from "@mui/material";

export const Tables = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await Axios.get("http://localhost:5555/");

        // Update the rows state with the fetched data
        setRows(
          response.data.map((info) => ({
            id: info._id,
            lastName: info.lastName,
            firstName: info.firstName,
            age: info.age,
            diagnosis: info.diagnosis,
            doctorReq: info.doctorRequesting,
            phoneNumber: info.phoneNumber,
            status: info.status,
            date: info.date,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
    },
    { field: "diagnosis", headerName: "Diagnosis", width: 130 },
    { field: "doctorReq", headerName: "Doctor Requesting", width: 150 },
    { field: "phoneNumber", headerName: "Phone Number", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      cellClassName: (params) => {
        if (params.value === "routine") {
          return "status-routine";
        } else if (params.value === "stat") {
          return "status-stat";
        } else {
          return "status-default";
        }
      },
    },
    { field: "date", headerName: "Date", width: 170 },
  ];

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
