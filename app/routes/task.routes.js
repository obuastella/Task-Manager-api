import express from "express";
import {
  getAllTasks,
  createTask,
  getTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);

export default router;
