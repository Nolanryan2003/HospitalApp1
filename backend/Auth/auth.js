import {User } from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const login = async (req, res, next) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      const user = await User.findOne({ username })
      if (!user) {
        res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        // comparing given password with hashed password
        bcrypt.compare(password, user.password).then(function (result) {
          result
            ? res.status(200).json({
                message: "Login successful",
                user,
              })
            : res.status(400).json({ message: "Login not succesful" })
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }

export const register = async (req, res, next) => {
    const { username, password } = req.body;
  
    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({
        username,
        password: hash,
      })
        .then((user) =>
          res.status(200).json({
            message: "User successfully created",
             user,
          })
        )
        .catch((error) =>
          res.status(400).json({
            message: "User not successful created",
            error: error.message,
          })
        );
    });
  };
 export const update = async (req, res, next) => {
    const { role, id } = req.body;
  
    try {
      if (!role || !id) {
        return res.status(400).json({ message: "Role and ID are required." });
      }
  
      if (role === "admin") {
        const user = await User.findById(id);
  
        if (!user) {
          return res.status(400).json({ message: "User not found." });
        }
  
        if (user.role !== "admin") {
          user.role = role;
  
          await user.save();
  
          res.status(201).json({ message: "Update successful", user });
        } else {
          res.status(400).json({ message: "User is already an Admin" });
        }
      } else {
        res.status(400).json({ message: "Role must be 'admin'." });
      }
    } catch (error) {
      res.status(400).json({ message: "An error occurred", error: error.message });
    }
  };