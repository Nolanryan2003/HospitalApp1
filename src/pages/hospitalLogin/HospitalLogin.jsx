import React, { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./HospitalLogin.scss";

export const HospitalLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const HospitalLoginUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post(
        "http://localhost:5555/auth/hospitallogin",
        {
          username,
          password,
        }
      );

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login succesful welcome");
        navigate("/hospital");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="hospitalLogin">
      <Toaster position="top-center" toastOptions={3000} />
      <form onClick={HospitalLoginUser} className="hospitalLoginContainer">
        <h1>Login</h1>
        <h2>HospitalMD</h2>
        <label>UserName</label>
        <input
          type="text"
          placeholder="enter name....."
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password....."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/hregister">Register here</Link>
        </p>
        <p>
          Do you work for a specialty?{" "}
          <Link className="link" to="/register">
            Yes I Do
          </Link>
        </p>
      </form>
    </div>
  );
};
