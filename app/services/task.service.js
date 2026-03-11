import Task from "../models/task.model.js";

export const getAllTasksService = async () => {
  const task = await Task.find();
  return task;
};

export const createTaskService = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};
