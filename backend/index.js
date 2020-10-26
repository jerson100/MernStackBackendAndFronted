const express = require("express");
const { processErrorInDevelopment } = require("./api/middlewares/processError");
const { connectMongoDB } = require("./api/configs/database");

require("dotenv").config();

const app = express();

connectMongoDB();

app.use(express.json());

app.use(`/api/${process.env.APIVERSION}/users`, [
  require("./api/routers/user.router"),
]);

app.use(
  `/api/${process.env.APIVERSION}/sessions`,
  require("./api/routers/session.router")
);

app.use(
  `/api/${process.env.APIVERSION}/proyects`,
  require("./api/routers/proyect.router"),
  require("./api/routers/task.router")
);

// app.use(
//   `/api/${process.env.APIVERSION}/tasks`,
//   require("./api/routers/task.router")
// );

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en el puerto ${process.env.PORT}`);
});

app.use(processErrorInDevelopment);
