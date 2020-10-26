const ProyectController = require("../controllers/Proyect.controller");
const { ForbiddenUserException } = require("../models/user/User.error");
const isMyProyect = (error, param) => {
  return async (req, res, next) => {
    const { user } = req;
    const paramId = req.params[param];
    const proyect = await ProyectController.findOneProyectById(paramId);
    if (!proyect) {
      next(error);
    } else if (user.typeUser !== "Administrador" && proyect.user != user._id) {
      next(
        new ForbiddenUserException(
          "No tiene privilegios para realizar una acción sobre un proyecto que no es vuestro"
        )
      );
    } else {
      req.proyect = proyect;
      next();
    }
  };
};

const addOneParamIdToRequest = (req, res, next) => {
  req.id = req.params.id;
  next();
};

module.exports = {
  isMyProyect,
  addOneParamIdToRequest,
};
