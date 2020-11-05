class CreateUserException extends Error {
  constructor(message = "No se pudo crear el usuario", status = 400) {
    super(message);
    this.status = status;
    this.name = "CreateUserException";
  }
}

class ExistsEmailUserException extends Error {
  constructor(message = "El usuario ya existe", status = "400") {
    super(message);
    this.status = status;
    this.name = "ExistsEmailUserException";
  }
}

class UnauthorizedUserException extends Error {
  constructor(message = "Debe iniciar sesión para acceder a los recursos") {
    super(message);
    this.status = 401;
    this.name = "UnauthorizedUserException";
  }
}

class ForbiddenUserException extends Error {
  constructor(
    message = "No tiene privilegios y/o permisos para realizar esta acción"
  ) {
    super(message);
    this.status = 403;
    this.name = "ForbiddenUserException";
  }
}

class NotFoundUserException extends Error {
  constructor(message = "El usuario no existe") {
    super(message);
    this.status = 404;
    this.name = "UnauthorizedUserException";
  }
}

class AuthUserException extends Error {
  constructor(message = "El email o la contraseña son incorrectos...") {
    super(message);
    this.status = 400;
    this.name = "AuthUserException";
  }
}

module.exports = {
  CreateUserException,
  ExistsEmailUserException,
  UnauthorizedUserException,
  NotFoundUserException,
  ForbiddenUserException,
  AuthUserException,
};
