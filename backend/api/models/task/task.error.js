class ExistsTaskException extends Error {
  constructor(message = "La tarea ya existe", status = 400) {
    super(message);
    this.status = status;
    this.name = "ExistsTaskException";
  }
}

class CreateTaskException extends Error {
  constructor(message = "No se pudo crear la tarea", status = 400) {
    super(message);
    this.status = status;
    this.name = "CreateTaskException";
  }
}

class NotFoundTaskException extends Error {
  constructor(message = "No se encontró la tarea") {
    super(message);
    this.status = 404;
    this.name = "NotFoundTaskException";
  }
}

module.exports = {
  ExistsTaskException,
  CreateTaskException,
  NotFoundTaskException,
};
