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

router.get("/", getAllPeliculas); // Público
router.get("/:id", getPeliculaById); // Público
router.post("/", authenticate, authorize("admin"), createPelicula);
router.put("/:id", authenticate, authorize("admin"), updatePelicula);
router.delete("/:id", authenticate, authorize("admin"), deletePelicula);

export default router;