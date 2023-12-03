import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./HospitalRegister.scss";

export const HospitalRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const hospitalRegisterUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post(
        "http://localhost:5555/auth/hospitalregister",
        {
          username,
          password,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Account Created welcome");
        navigate("/hlogin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="hospitalRegister">
      <Toaster position="top-center" toastOptions={2000} />

      <form
        onClick={hospitalRegisterUser}
        className="hospitalRegisterContainer"
      >
        <h1>Register</h1>
        <h2>HopsitalMD</h2>
        <label>UserName</label>
        <input
          type="text"
          placeholder="enter name....."
          value={data.userName}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password....."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <select
          name="role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
        >
          <option value="admin">Admin</option>
          <option value="basic">Basic</option>
        </select>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/hlogin">Login here</Link>
        </p>
        <p>
          Do you work for a specialty?{" "}
          <Link className="link" to="/login">
            Yes I Do
          </Link>
        </p>
      </form>
    </div>
  );
};
