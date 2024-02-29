import express, { Application } from "express"; // desde que librería? express.
import dotenv from "dotenv";
import { createRole, getRoles } from "../controllers/roleController";

dotenv.config();

const app: Application = express(); //ejecutar funcion y guardar en una variable.

const PORT = process.env.PORT || 4001;

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

//Roles routes
app.get('/roles', getRoles); //lo modificamos en roleControllers.
app.post('/roles', createRole);

//la app tiene que escuchar---- RUTAS. Por ejemplo si no la tienes que mandas? un 404 o no existe.
//Estructura básica para el servidor

app.listen(PORT, () => {
  console.log("Server is running");
});
