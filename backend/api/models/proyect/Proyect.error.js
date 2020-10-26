class CreateProyectException extends Error {
  constructor(message = "No se pudo crear el proyecto.", status = 400) {
    super(message);
    this.status = status;
    this.name = "CreateProyectException";
  }
}

class ExistsProyectException extends Error {
  constructor(message = "El proyecto ya existe", status = 400) {
    super(message);
    this.status = status;
    this.name = "ExistsProyectException";
  }
}

class NotFoundProyectException extends Error {
  constructor(message = "El proyecto no existe") {
    super(message);
    this.status = 404;
    this.name = "NotFoundProyectException";
  }
}

module.exports = {
  ExistsProyectException,
  CreateProyectException,
  NotFoundProyectException,
};
