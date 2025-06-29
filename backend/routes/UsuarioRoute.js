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

router.post("/login", loginUsuario);
router.get("/", authenticate, authorize("admin"), getAllUsuarios);
router.get("/:id", authenticate, authorize("admin"), getUsuarioById);
router.post("/", createUsuario);
router.put("/:id", authenticate, authorize("admin"), updateUsuario);
router.delete("/:id", authenticate, authorize("admin"), deleteUsuario);
 
export default router;