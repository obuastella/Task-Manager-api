import Task from "../models/task.model.js";

const getAllTasksService = async () => {
  const task = await Task.find();
  return task;
};
export default getAllTasksService;
