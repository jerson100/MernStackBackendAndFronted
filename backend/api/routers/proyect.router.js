const express = require("express");
const { processError } = require("../middlewares/processError");
const { auth, authAdmin } = require("../middlewares/token");
const ProyectController = require("../controllers/Proyect.controller");
const {
  validationSchema,
  validateObjectIdSchema,
} = require("../middlewares/validationSchema");
const {
  ExistsProyectException,
  NotFoundProyectException,
} = require("../models/proyect/Proyect.error");
const { CreateProyectSchema } = require("../models/proyect/Proyect.validation");
const { isMyProyect } = require("../middlewares/auth");
const EndPoint = express.Router();

EndPoint.use(auth);

EndPoint.post(
  "/",
  validationSchema(CreateProyectSchema, "body"),
  processError(async (req, res) => {
    const { name } = req.body;
    const { user } = req;
    const findProyect = await ProyectController.findOneQueryProyect({
      name,
      user: user._id,
      status: true,
    });
    if (findProyect) {
      throw new ExistsProyectException();
    } else {
      const newProyect = await ProyectController.createOneProyect({
        name,
        user: user._id,
      });
      return res.status(201).json({
        data: {
          proyect: newProyect,
        },
      });
    }
  })
);

EndPoint.route("/:id")
  .get(
    validationSchema(validateObjectIdSchema(), "params"),
    isMyProyect(new NotFoundProyectException(), "id"),
    processError(async (req, res) => {
      const { proyect } = req;
      res.status(200).json({
        data: {
          proyect,
        },
      });
    })
  )
  .delete(
    validationSchema(validateObjectIdSchema(), "params"),
    isMyProyect(new NotFoundProyectException(), "id"),
    processError(async (req, res) => {
      const { proyect } = req;
      await ProyectController.deleteOneProyectById(proyect._id);
      return res.status(204).send();
    })
  );

/**
 * Solo el administrador puede ver todos los proyectos
 */
EndPoint.get(
  "/",
  authAdmin,
  processError(async (req, res) => {
    const proyects = await ProyectController.findQueryProyect({});
    res.status(200).json({
      data: {
        proyects,
      },
    });
  })
);

module.exports = EndPoint;
