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

router.get("/", getAllSalas);
router.get("/:id", getSalaById);
router.post("/", authenticate, authorize("admin"), createSala);
router.put("/:id", authenticate, authorize("admin"), updateSala);
router.delete("/:id", authenticate, authorize("admin"), deleteSala);

export default router;