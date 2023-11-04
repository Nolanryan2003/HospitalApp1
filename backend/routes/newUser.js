import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();



router.post("/", async (req, res) => {
    try {
      // if (
      //   !req.body.weight ||
      //   !req.body.temperature ||
      //   !req.body.severity ||
      //   !req.body.currentMedications ||
      //   !req.body.gender ||
      //   !req.body.dateOfBirth ||
      //   !req.body.name ||
      //   !req.body.doctorAssigned
      // ) {
      //   return res.status(400).send({
      //     message: "Send all required fields",
      //   });
      // }
      const newUser = {
        username : req.body.username,
        password : req.body.password,
        role : req.body.role,
      };
      const user = await User.create(newUser);
  
      return res.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
export default router;