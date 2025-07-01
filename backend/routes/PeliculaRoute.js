import express from "express";
import {
  getAllPeliculas,
  getPeliculaById,
  createPelicula,
  updatePelicula,
  deletePelicula,
} from "../controllers/PeliculaController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Ruta para obtener todas las películas (pública)
router.get("/", getAllPeliculas);

// Ruta para obtener una película por ID (pública)
router.get("/:id", getPeliculaById);

// Ruta para crear una nueva película (solo admin autenticado)
router.post("/", authenticate, authorize("admin"), createPelicula);

// Ruta para actualizar una película por ID (solo admin autenticado)
router.put("/:id", authenticate, authorize("admin"), updatePelicula);

// Ruta para eliminar una película por ID (solo admin autenticado)
router.delete("/:id", authenticate, authorize("admin"), deletePelicula);

export default router;