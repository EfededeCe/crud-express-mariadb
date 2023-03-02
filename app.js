import express from "express";
import { pool } from "./db.js";

const app = express();


app.get("/ping", async (req, res) => {
    const [result] = await pool.query("SELECT 1 + 1 AS result")
    res.json(result)
})

app.get("/empleados", (req, res) => { res.send("Obteniendo empleados") })

app.post("/empleados", (req, res) => { res.send("Creando empleado") })

app.put("/empleados", (req, res) => { res.send("Actualizando empleados") })

app.delete("/empleados", (req, res) => { res.send("Borrando empleados") })

app.use(express.static("./src/public"));

app.listen(3000, () => {
    console.log(`Escuchando el puerto 3000`);
})

