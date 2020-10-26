const REGEX = {
  name: /^\b(?:[a-zA-ZáéíóúÁÉÍÓÚ]+[ ]*[a-zA-ZáéíóúÁÉÍÓÚ]*)+\b$/,
  lastname: /^[a-zA-ZáéíóúÁÉÍÓÚ]{3,30}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&=-@,;])[\w!#$%&=-@,;]{10,20}$/,
  dni: /^[0-9]{8}$/,
  phones: /^[0-9]{9,13}$/,
  nameTaskAndProyect: /^\b(?:[a-zA-ZáéíóúÁÉÍÓÚ\d]+[ ]*[a-zA-ZáéíóúÁÉÍÓÚ\d]*){1,60}\b$/,
};

module.exports = REGEX;
