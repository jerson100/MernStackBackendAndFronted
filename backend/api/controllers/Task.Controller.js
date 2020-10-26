const Task = require("../models/task/Task.model");

const createTask = async ({ name, userId, proyect }) => {
  const task = await new Task({ name, user: userId, proyect });
  await task.save();
  return task;
};

const findOneTask = async (query = { name, _id, proyect }, status = true) => {
  return await findOneQuery({ ...query, status });
};

const findTask = async (query = { name, _id, proyect }, status = true) => {
  return await findQuery({ ...query, status });
};

const findOneQuery = async (query = {}, proyection = {}) => {
  return await Task.findOne(query, proyection);
};

const findQuery = async (query = {}, proyection = {}) => {
  return await Task.find(query, proyection);
};

module.exports = {
  findOneTask,
  createTask,
  findTask,
};
