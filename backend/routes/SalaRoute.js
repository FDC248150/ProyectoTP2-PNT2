import express from "express";
import {
  getAllSalas,
  getSalaById,
  createSala,
  updateSala,
  deleteSala,
} from "../controllers/SalaController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Ruta para obtener todas las salas (pública)
router.get("/", getAllSalas);

// Ruta para obtener una sala por ID (pública)
router.get("/:id", getSalaById);

// Ruta para crear una nueva sala (solo admin autenticado)
router.post("/", authenticate, authorize("admin"), createSala);

// Ruta para actualizar una sala por ID (solo admin autenticado)
router.put("/:id", authenticate, authorize("admin"), updateSala);

// Ruta para eliminar una sala por ID (solo admin autenticado)
router.delete("/:id", authenticate, authorize("admin"), deleteSala);

export default router;