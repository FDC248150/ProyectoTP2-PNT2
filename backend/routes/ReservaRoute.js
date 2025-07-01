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

// Ruta para obtener todas las reservas (solo admin autenticado)
router.get("/", authenticate, authorize("admin"), getAllReservas);

// Ruta para obtener una reserva por ID (usuario autenticado)
router.get("/:id", authenticate, getReservaById);

// Ruta para crear una nueva reserva (usuario autenticado con rol "user")
router.post("/", authenticate, authorize("user"), createReserva);

// Ruta para actualizar una reserva por ID (usuario autenticado con rol "user")
router.put("/:id", authenticate, authorize("user"), updateReserva);

// Ruta para eliminar una reserva por ID (usuario autenticado con rol "user")
router.delete("/:id", authenticate, authorize("user"), deleteReserva);

export default router;