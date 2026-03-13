import mongoose from "mongoose";
import Task from "../models/task.model.js";
import {
  getAllTasksService,
  createTaskService,
  getTaskService,
} from "../services/task.service.js";

export const getAllTasks = async (req, res) => {
  try {
    const task = await getAllTasksService();
    res
      .status(200)
      .json({ message: "Task retrieved successfully", task: task });
  } catch (error) {
    // add global error handle here to throw error
    console.log("An error occurred getting all tasks", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTask = await createTaskService({ title, description, status });
    res
      .status(200)
      .json({ message: "Task created succesfully!", task: newTask });
  } catch (error) {
    console.log("An error occurred:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }
    const task = await getTaskService(id);
    if (!task) {
      return res.status(404).json({ message: `Task ${id} not found.` });
    }
    return res
      .status(200)
      .json({ message: "Task retrieved succesfully", task });
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.log("An error occurred... ", error);
  }
};
