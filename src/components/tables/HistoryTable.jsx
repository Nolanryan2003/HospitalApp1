import "./HistoryTable.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HistoryTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5555/consults/deletedconsult"
        );
        setRows(
          response.data.map((consult) => ({
            id: consult.patientReference._id,
            lastName: consult.patientReference.lastName,
            firstName: consult.patientReference.firstName,
            age: consult.patientReference.age,
            diagnosis: consult.diagnosis,
            doctorReq: consult.patientReference.doctorAssigned,
            phoneNumber: consult.phoneNumber,
            status: consult.status,
            date: consult.date,
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
    { field: "id", headerName: "ID", width: 225 },
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
      cellClassName: "cell",
      renderCell: (params) => {
        return <div className="completeButton">Completed</div>;
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleViewClick(params.row.id)}
            >
              View
            </div>
          </div>
        );
      },
    },
  ];

  const navigate = useNavigate();

  const handleViewClick = (patientId) => {
    navigate(`/users/${patientId}`);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
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
