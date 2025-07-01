import express from "express";
import {
  getAllGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  deleteGenero,
} from "../controllers/GeneroController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Ruta para obtener todos los géneros (pública)
router.get("/", getAllGeneros);

// Ruta para obtener un género por ID (pública)
router.get("/:id", getGeneroById);

// Ruta para crear un nuevo género (solo admin autenticado)
router.post("/", authenticate, authorize("admin"), createGenero);

// Ruta para actualizar un género por ID (solo admin autenticado)
router.put("/:id", authenticate, authorize("admin"), updateGenero);

// Ruta para eliminar un género por ID (solo admin autenticado)
router.delete("/:id", authenticate, authorize("admin"), deleteGenero);

export default router;