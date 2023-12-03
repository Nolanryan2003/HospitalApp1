import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./Register.scss";

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5555/auth/register", {
        username,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Account Created welcome");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <Toaster position="top-center" toastOptions={2000} />

      <form onClick={registerUser} className="registerContainer">
        <h1>Register</h1>
        <h2>SpecialtyMD</h2>
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
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p>
          Do you work for a Hospital?{" "}
          <Link className="link" to="/hlogin">
            Yes I Do
          </Link>
        </p>
      </form>
    </div>
  );
};
