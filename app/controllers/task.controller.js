import Task from "../models/task.model.js";
import getAllTasksService from "../services/task.service.js";

const getAllTasks = async (req, res) => {
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

const createTask = async (req, res) => {};
export default getAllTasks;
