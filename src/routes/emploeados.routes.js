import { Router } from "express";
import { getEmpleados, createEmpleados, actualizarEmpleado, borrarEmpleado } from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/empleados", getEmpleados);

router.post("/empleados", createEmpleados);

router.put("/empleados", actualizarEmpleado);

router.delete("/empleados", borrarEmpleado);


export default router;
