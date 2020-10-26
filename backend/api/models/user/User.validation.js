const Joi = require("joi");
const REGEX = require("../../helpers/Regex");

const CreateUserSchema = Joi.object().keys({
  name: Joi.string().regex(REGEX.name).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().regex(REGEX.password),
  password_confirmation: Joi.any().equal(Joi.ref("password")).required(),
});

const SignInUserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  CreateUserSchema,
  SignInUserSchema,
};
