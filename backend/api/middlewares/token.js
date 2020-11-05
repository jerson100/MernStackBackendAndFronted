const { request, response } = require("express");
const { toDecode } = require("../helpers/token");
const { ForbiddenUserException } = require("../models/user/User.error");

const auth = (req = request, res = response, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    next(new TokenException("El token no es válido"));
  } else {
    try {
      const indexBearer = token.indexOf("Bearer ");
      if (indexBearer === 0) {
        token = token.replace("Bearer ", "");
        const tokenDecode = toDecode(token);
        req.user = tokenDecode;
        next();
      } else {
        throw new Error();
      }
    } catch (e) {
      next(new TokenException("El token no es válido"));
    }
  }
};

/**
 * Verifica si el usuario es administrador
 */
const authAdmin = (req, res, next) => {
  const { user } = req;
  if (user && user.typeUser && user.typeUser === "Administrador") {
    next();
  } else {
    next(new ForbiddenUserException());
  }
};

class TokenException extends Error {
  constructor(message = "El token no es válido", status = 401) {
    super(message);
    this.status = status;
    this.name = "TokenException";
  }
}

module.exports = {
  auth,
  authAdmin,
};
