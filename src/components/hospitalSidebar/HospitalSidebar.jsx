import "./HospitalSidebar.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

import React from "react";

export const HospitalSidebar = () => {
  const [data, setData] = useState({
    dateOfbirth: "",
    diagnosis: "",
    status: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit action

    try {
      const response = await axios.post("http://localhost:5555/consults", {
        dateOfBirth: data.dateOfbirth,
        diagnosis: data.diagnosis,
        status: data.status,
        phoneNumber: data.phoneNumber,
      });

      console.log(response.data); // or handle the response as needed
      setData({
        dateOfbirth: "",
        diagnosis: "",
        status: "",
        phoneNumber: "",
      });
      toast.success("consult sent!!!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("Consult not sent");
    }
  };

  return (
    <div className="hospitalSidebar">
      <div className="top">
        <span className="logo">HospitalMD</span>
        <hr />
        <div className="center">
          <Toaster position="top-center" toastOptions={3000} />
          <h2 className="title">Consults</h2>
          <form className="forms" onSubmit={handleSubmit}>
            <label>Date Of Birth</label>
            <input
              type="date"
              placeholder="Year-Month-Day...."
              value={data.dateOfbirth}
              onChange={(e) =>
                setData({ ...data, dateOfbirth: e.target.value })
              }
            />
            <label>Diagnosis</label>
            <input
              type="text"
              placeholder="Diagnosis...."
              value={data.diagnosis}
              onChange={(e) => setData({ ...data, diagnosis: e.target.value })}
            />
            <label>Status</label>
            <input
              type="text"
              placeholder="stat or routine"
              value={data.status}
              onChange={(e) => setData({ ...data, status: e.target.value })}
            />
            <label>PhoneNumber</label>
            <input
              type="text"
              placeholder="xxx-xxx-xxxx"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
            <button type="submit">Send Consult</button>
          </form>
        </div>
        <ul>
          <div className="title">USER</div>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
