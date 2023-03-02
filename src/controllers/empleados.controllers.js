import { pool } from "../db.js";


export const getEmpleados = (req, res) => { res.send("Obteniendo empleados") };

export const createEmpleados = async (req, res) => { 
    const { nombre, salario } = req.body;
    const [ rows ] = await pool.query("INSERT INTO empleados (nombre, salario) VALUES (?, ?)", [nombre, salario]);
    res.send({ rows }) };

export const actualizarEmpleado = (req, res) => { res.send("Actualizando empleados") };

export const borrarEmpleado = (req, res) => { res.send("Borrando empleados") };