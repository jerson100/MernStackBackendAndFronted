const Validate = {
  User: {
    email: (txt) => {
      //eslint-disable-next-line
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        txt
      )
        ? ""
        : "El email no es válido.";
    },
    password: (txt) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&=-@,;])[\w!#$%&=-@,;]{10,20}$/.test(
        txt
      )
        ? ""
        : "La contraseña debe contener lo siguiente: [a-z] - [A-Z] [w!#$%&=-@,;]  entre 10 - 20 carácteres.";
    },
    name: (txt) => {
      return /^\b(?:[a-zA-ZáéíóúÁÉÍÓÚ]+[ ]*[a-zA-ZáéíóúÁÉÍÓÚ]*)+\b$/.test(txt)
        ? ""
        : "El nombre solo puede contener letras y espacios excepto en los costados.";
    },
  },
};

export default Validate;
