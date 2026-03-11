import Task from "../models/task.model.js";
import {
  getAllTasksService,
  createTaskService,
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
