const mongoose = require("mongoose");
const Proyect = require("../models/proyect/Proyect.model");

const findQueryProyect = async (query = {}, proyection = {}) => {
  return await Proyect.find(query, proyection);
};

const findOneQueryProyect = async (query = {}, proyection = {}) => {
  return await Proyect.findOne(query, proyection);
};

const createOneProyect = async ({ name, user }) => {
  const p = new Proyect({ name, user });
  await p.save();
  return p;
};

const findOneProyectByIdAndUser = async (
  { idProyect, idUser, status = true },
  proyection = {}
) => {
  const proyect = await Proyect.findById(idProyect, proyection);
  return proyect !== null && proyect.user == idUser && proyect.status === status
    ? proyect
    : null;
};

const findOneProyectById = async (idProyect, status = true) => {
  if (!idProyect) {
    throw new Error("Debe especificar el idProyect");
  } else {
    return await Proyect.findOne({ _id: idProyect, status });
  }
};

const deleteOneProyectById = async (idProyect) => {
  return await updateOneProyect(
    { _id: idProyect },
    {
      $set: {
        status: false,
      },
    }
  );
};

const updateOneProyect = async (query = {}, data = {}, options = {}) => {
  return await Proyect.updateOne(query, data, options);
};

const findManyProyectsByIdUser = async (idUser, status = true) => {
  return await findQueryProyect({ user: idUser, status });
};

module.exports = {
  findQueryProyect,
  findOneProyectByIdAndUser,
  createOneProyect,
  findOneProyectById,
  findOneQueryProyect,
  deleteOneProyectById,
  findManyProyectsByIdUser,
};
