import express from "express";
import {
  getAllFunciones,
  getFuncionById,
  createFuncion,
  updateFuncion,
  deleteFuncion,
} from "../controllers/FuncionController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Ruta para obtener todas las funciones (pública)
router.get("/", getAllFunciones);

// Ruta para obtener una función por ID (pública)
router.get("/:id", getFuncionById);

// Ruta para crear una nueva función (solo admin autenticado)
router.post("/", authenticate, authorize("admin"), createFuncion);

// Ruta para actualizar una función por ID (solo admin autenticado)
router.put("/:id", authenticate, authorize("admin"), updateFuncion);

// Ruta para eliminar una función por ID (solo admin autenticado)
router.delete("/:id", authenticate, authorize("admin"), deleteFuncion);

export default router;