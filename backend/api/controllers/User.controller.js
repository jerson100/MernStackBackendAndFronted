const User = require("../models/user/User.model");

const createUser = async ({ name, email, password }) => {
  const us = new User({ name, email, password });
  await us.encriptarPass();
  await us.save();
  return us;
};

const findOneUser = async ({ email, name, _id, status = true }) => {
  if (email) {
    return await findOneQuery({ email, status });
  } else if (name) {
    return await findOneQuery({ name, status });
  } else if (_id) {
    return await findOneQuery({ _id, status });
  } else {
    return await findOneQuery({ status });
  }
};

const findQuery = async (query = {}, proyection = {}) => {
  return await User.find(query, proyection);
};

const findOneQuery = async (query = {}, proyection = {}) => {
  return await User.findOne(query, proyection);
};

const updateOneUser = async (query = {}, update = {}, options = {}) => {
  return await User.updateOne(query, update, options);
};

const findOneAndUpdateUser = async (query = {}, update = {}, options = {}) => {
  return await User.findOneAndUpdate(query, update, options);
};

const deleteUser = async ({ _id }) => {
  if (_id) {
    return await findOneAndUpdateUser(
      { _id },
      {
        $set: {
          state: false,
        },
      }
    );
  } else {
    throw new Error("No se puede eliminar, el argumento pasado no es válido");
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateOneUser,
  findOneAndUpdateUser,
  findOneUser,
};
