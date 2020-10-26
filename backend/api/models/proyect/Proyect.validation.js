const Joi = require("joi");

const CreateProyectSchema = Joi.object().keys({
  name: Joi.string().min(1).max(70).required(),
});

const GetProyectByIdSchema = Joi.object().keys({
  idProyect: Joi.string()
    .regex(/^[a-fA-F0-9]{24}$/)
    .required(),
});

module.exports = {
  CreateProyectSchema,
  GetProyectByIdSchema,
};
