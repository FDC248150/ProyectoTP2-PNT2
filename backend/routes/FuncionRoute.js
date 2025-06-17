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

router.get("/", getAllFunciones); // Público
router.get("/:id", getFuncionById); // Público
router.post("/", authenticate, authorize("admin"), createFuncion);
router.put("/:id", authenticate, authorize("admin"), updateFuncion);
router.delete("/:id", authenticate, authorize("admin"), deleteFuncion);

export default router;