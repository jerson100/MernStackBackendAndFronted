const express = require("express");
const { processError } = require("../middlewares/processError");
const TaskController = require("../controllers/Task.Controller");
const {
  validationSchema,
  validateObjectIdSchema,
} = require("../middlewares/validationSchema");
const {
  ExistsTaskException,
  CreateTaskException,
  NotFoundTaskException,
} = require("../models/task/task.error");
const { NotFoundProyectException } = require("../models/proyect/Proyect.error");
const {
  CreateTaskSchema,
  DeleteTaskSchema,
} = require("../models/task/task.validation");
const { auth } = require("../middlewares/token");
const { isMyProyect } = require("../middlewares/auth");
const EndPoint = express.Router();
/*
    /api/v1/proyects/
*/

EndPoint.use(auth);

EndPoint.route("/:idProyect/tasks")
  .post(
    (req, res, next) => {
      req.body.idProyect = req.params.idProyect;
      next();
    },
    validationSchema(CreateTaskSchema, "body"),
    isMyProyect(
      new CreateTaskException(
        "No se pudo crear la tarea por que el proyecto no existe"
      ),
      "idProyect"
    ),
    processError(async (req, res) => {
      const { name, idProyect } = req.body;
      const { user } = req;
      const task = await TaskController.findOneTask({
        name,
        proyect: idProyect,
      });
      if (task) {
        throw new ExistsTaskException();
      } else {
        const newTask = await TaskController.createTask({
          name,
          userId: user._id,
          proyect: idProyect,
        });
        return res.status(201).json({ data: { task: newTask } });
      }
    })
  )
  .get(
    validationSchema(validateObjectIdSchema("idProyect"), "params"),
    isMyProyect(new NotFoundProyectException(), "idProyect"),
    processError(async (req, res) => {
      const { proyect } = req;
      const tasks = await TaskController.findTask({
        proyect: proyect._id,
      });
      console.log(tasks);
      if (!tasks) {
        throw new NotFoundTaskException(
          "No se encontraron task para el proyecto especificado"
        );
      } else {
        res.status(200).json({ data: { tasks } });
      }
    })
  );

EndPoint.route("/:idProyect/tasks/:idTask")
  .get(
    validationSchema(DeleteTaskSchema, "params"),
    isMyProyect(new NotFoundProyectException(), "idProyect"),
    processError(async (req, res) => {
      const { idTask } = req.params;
      const task = await TaskController.findOneTask({ _id: idTask });
      if (!task) {
        throw new NotFoundTaskException();
      } else {
        return res.status(200).json({ data: { task } });
      }
    })
  )
  .delete(
    validationSchema(DeleteTaskSchema, "params"),
    isMyProyect(new NotFoundProyectException(), "idProyect"),
    processError(async (req, res) => {
      const { idProyect, idTask } = req.params;
      const task = await TaskController.findOneTask({
        _id: idTask,
        proyect: idProyect,
      });
      if (!task) {
        throw new NotFoundTaskException();
      } else {
        task.status = false;
        await task.save();
        return res.status(204).send();
      }
    })
  );

module.exports = EndPoint;
