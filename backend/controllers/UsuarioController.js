import { User, Role } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const getAllUsuarios = async (req, res) => {
  try {
    
    const usuarios = await User.findAll({ include: Role });
    res.json(usuarios);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getUsuarioById = async (req, res) => {
  try {

    const usuario = await User.findByPk(req.params.id, { include: Role });

    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createUsuario = async (req, res) => {
  try {

    const usuario = await User.create(req.body);
    res.status(201).json(usuario);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const updateUsuario = async (req, res) => {
  try {

    const usuario = await User.findByPk(req.params.id);

    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    await usuario.update(req.body);
    res.json(usuario);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const deleteUsuario = async (req, res) => {
  try {

    const usuario = await User.findByPk(req.params.id);

    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    await usuario.destroy();
    res.json({ message: "Usuario eliminado" });

  } catch (err) {

    res.status(500).json({ error: err.message });
    
  }
};

export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ where: { email }, include: Role });
    if (!usuario) return res.status(401).json({ error: "Credenciales inválidas" });

    const valid = await bcrypt.compare(password, usuario.password);
    if (!valid) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: usuario.id, role: usuario.Role.role },
      "12345678",
      { expiresIn: "1h" }
    );

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, role: usuario.Role.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};