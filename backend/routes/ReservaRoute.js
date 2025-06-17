import express from "express";
import {
  getAllReservas,
  getReservaById,
  createReserva,
  updateReserva,
  deleteReserva,
} from "../controllers/ReservaController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.get("/", authenticate, authorize("admin"), getAllReservas);
router.get("/:id", authenticate, getReservaById); 
router.post("/", authenticate, authorize("user"), createReserva); 
router.put("/:id", authenticate, authorize("user"), updateReserva);
router.delete("/:id", authenticate, authorize("user"), deleteReserva);

export default router;