const Joi = require("joi");
const SchemaValidationException = require("../helpers/Error");

const validationSchema = (schema, property) => {
  return (req, res, next) => {
    console.log(req.body);
    const { error } = schema.validate(req[property], {
      abortEarly: false,
      convert: false,
    });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      next(new SchemaValidationException(message));
      //res.status(422).json({ error: message });
    }
  };
};

// const validateObjectIdSchema = Joi.object().keys({
//   id: Joi.string()
//     .regex(/^[a-fA-F0-9]{24}$/)
//     .required(),
// });

const validateObjectIdSchema = (paramName = "id") => {
  return Joi.object().keys({
    [paramName]: Joi.string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .required(),
  });
};

module.exports = {
  validationSchema,
  validateObjectIdSchema,
};
