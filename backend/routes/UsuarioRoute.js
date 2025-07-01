import express from "express";
import {
  loginUsuario,
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/UsuarioController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Ruta para login de usuario (pública, no requiere autenticación)
router.post("/login", loginUsuario);

// Ruta para obtener todos los usuarios (solo admin autenticado)
router.get("/", authenticate, authorize("admin"), getAllUsuarios);

// Ruta para obtener un usuario por ID (solo admin autenticado)
router.get("/:id", authenticate, authorize("admin"), getUsuarioById);

// Ruta para registrar un nuevo usuario (pública)
router.post("/", createUsuario);

// Ruta para actualizar un usuario por ID (solo admin autenticado)
router.put("/:id", authenticate, authorize("admin"), updateUsuario);

// Ruta para eliminar un usuario por ID (solo admin autenticado)
router.delete("/:id", authenticate, authorize("admin"), deleteUsuario);

export default router;