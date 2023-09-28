import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModelsTasks.js";
import categoriesRoutes from './components/categories/categories.routes.js';
import cors from 'cors';
import usersRoutes from './components/users/users.routes.js';
import tasksRoutes from './components/tasks/tasks.routes.js'


initModels();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json(), cors(), categoriesRoutes, usersRoutes, tasksRoutes );

db.authenticate()
  .then(() => console.log('La base de datos conectada correctamente'))
  .catch((error) => console.log(error));
  
db.sync()
  .then(() => console.log('Base de datos sincronizada correctamente'))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});