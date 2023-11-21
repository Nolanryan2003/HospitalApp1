import Express from "express";
import {
  createOneConsult,
  getAllConsults,
} from "../controllers/consultsController.js";

const router = Express.Router();

router.get("/", getAllConsults);
router.post("/", createOneConsult);

export default router;
