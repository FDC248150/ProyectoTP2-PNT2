// Importa los servicios que interactúan con el modelo Usuario
import {
  getAllUsuariosService,
  getUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  loginUsuarioService
} from "../services/UsuarioService.js";

// Controlador para obtener todos los usuarios
// GET /api/usuarios
export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await getAllUsuariosService();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener un usuario por ID
// GET /api/usuarios/:id
export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await getUsuarioByIdService(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear un nuevo usuario (registro)
// POST /api/usuarios
export const createUsuario = async (req, res) => {
  try {
    const usuario = await createUsuarioService(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar un usuario existente
// PUT /api/usuarios/:id
export const updateUsuario = async (req, res) => {
  try {
    const usuario = await updateUsuarioService(req.params.id, req.body);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar un usuario
// DELETE /api/usuarios/:id
export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await deleteUsuarioService(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para login de usuario
// POST /api/usuarios/login
export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Llama al servicio de login con email y password
    const result = await loginUsuarioService(email, password);
    if (!result) return res.status(401).json({ error: "Credenciales inválidas" });
    res.json(result); // Devuelve el token y datos del usuario autenticado
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};