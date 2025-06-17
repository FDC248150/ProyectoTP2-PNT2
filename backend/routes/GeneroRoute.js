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

router.get("/", getAllGeneros); // Público
router.get("/:id", getGeneroById); // Público
router.post("/", authenticate, authorize("admin"), createGenero);
router.put("/:id", authenticate, authorize("admin"), updateGenero);
router.delete("/:id", authenticate, authorize("admin"), deleteGenero);

export default router;