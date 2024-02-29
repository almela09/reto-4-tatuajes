

import express, { Application } from "express"; // desde que librería? express.

const app: Application = express(); //ejecutar funcion y guardar en una variable.

//la app tiene que escuchar---- RUTAS. Por ejemplo si no la tienes que mandas? un 404 o no existe.
//Estructura básica para el servidor
app.listen(4000, ()=>{
    console.log("Server is running");
    
})

