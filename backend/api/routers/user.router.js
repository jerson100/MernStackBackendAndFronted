const express = require("express");
const UserController = require("../controllers/User.controller");
const { toEncode } = require("../helpers/token");
const { processError } = require("../middlewares/processError");
const {
  validationSchema,
  validateObjectIdSchema,
} = require("../middlewares/validationSchema");
const {
  CreateUserException,
  NotFoundUserException,
  ForbiddenUserException,
} = require("../models/user/User.error");
const { CreateUserSchema } = require("../models/user/User.validation");
const { ExistsEmailUserException } = require("../models/user/User.error");
const { auth, authAdmin } = require("../middlewares/token");
const ProyectController = require("../controllers/Proyect.controller");
const EndPoint = express.Router();

EndPoint.post(
  "/",
  validationSchema(CreateUserSchema, "body"),
  processError(async (req, res) => {
    const { email } = req.body;
    const us = await UserController.findOneUser({ email });
    if (us) {
      throw new ExistsEmailUserException();
    } else {
      const newUs = await UserController.createUser(req.body);
      if (!newUs) {
        throw new CreateUserException();
      } else {
        res.status(201).json({
          data: {
            user: newUs,
            token: toEncode({ _id: newUs._id, email: newUs.email }),
          },
        });
      }
    }
  })
);
/*
  Create task para un usuario determinado
*/
// EndPoint.post(
//   "/:id/proyects/:idProyect/tasks",
//   processError(async (req, res) => {})
// );

EndPoint.delete(
  "/:id",
  auth,
  authAdmin,
  validationSchema(validateObjectIdSchema, "params"),
  processError(async (req, res) => {
    const { id } = req.params;
    const us = await UserController.deleteUser({ _id: id });
    if (!us || !us.state) {
      throw new NotFoundUserException();
    } else {
      return res.status(204).send();
    }
  })
);

EndPoint.get(
  "/:idUser/proyects",
  auth,
  validationSchema(validateObjectIdSchema()),
  processError(async (req, res) => {
    const { user } = req;
    const { id } = req.params;
    if (user.typeUser !== "Administrador" && user._id != id) {
      throw new ForbiddenUserException();
    } else {
      const proyects = await ProyectController.findManyProyectsByIdUser(id);
      return res.status(200).json({ data: { proyects } });
    }
  })
);

EndPoint.get(
  "/whoIAm",
  auth,
  processError(async (req, res) => {
    const { user: userA } = req.user;
    const user = await UserController.findOneUser({ _id: userA._id });
    if (!user) {
      throw NotFoundUserException();
    } else {
      return res.status(200).json({ data: { user } });
    }
  })
);
module.exports = EndPoint;
