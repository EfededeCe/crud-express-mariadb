import express from "express";
import empleadosRoutes from "./routes/emploeados.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(empleadosRoutes);


app.use((req, res) => {
    res.status(404).send("No se encontró la ruta solicitada");
});


app.listen(3000, () => {
    console.log(`Escuchando el puerto 3000`);
});

