import {
  getAllUsuariosService,
  getUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  loginUsuarioService
} from "../services/UsuarioService.js";

export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await getAllUsuariosService();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await getUsuarioByIdService(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const usuario = await createUsuarioService(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await updateUsuarioService(req.params.id, req.body);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await deleteUsuarioService(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginUsuarioService(email, password);
    if (!result) return res.status(401).json({ error: "Credenciales inválidas" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};