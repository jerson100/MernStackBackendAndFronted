const Joi = require("joi");
// const { nameTaskAndProyect } = require("../../helpers/Regex");

const CreateTaskSchema = Joi.object().keys({
  name: Joi.string().min(1).max(70).required(),
  idProyect: Joi.string()
    .regex(/^[a-fA-F0-9]{24}$/)
    .required(),
  user: Joi.object(),
});

const DeleteTaskSchema = Joi.object().keys({
  idProyect: Joi.string()
    .regex(/^[a-fA-F0-9]{24}$/)
    .required(),
  idTask: Joi.string()
    .regex(/^[a-fA-F0-9]{24}$/)
    .required(),
});

module.exports = {
  CreateTaskSchema,
  DeleteTaskSchema,
};
