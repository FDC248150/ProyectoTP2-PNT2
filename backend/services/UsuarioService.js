import { User, Role } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function getAllUsuariosService() {
  return await User.findAll({ include: Role });
}

export async function getUsuarioByIdService(id) {
  return await User.findByPk(id, { include: Role });
}

export async function createUsuarioService(data) {
  return await User.create(data);
}

export async function updateUsuarioService(id, data) {
  const usuario = await User.findByPk(id);
  if (!usuario) return null;
  await usuario.update(data);
  return usuario;
}

export async function deleteUsuarioService(id) {
  const usuario = await User.findByPk(id);
  if (!usuario) return null;
  await usuario.destroy();
  return usuario;
}

export async function loginUsuarioService(email, password) {
  const usuario = await User.findOne({ where: { email }, include: Role });
  if (!usuario) return null;
  const valid = await bcrypt.compare(password, usuario.password);
  if (!valid) return null;
  const token = jwt.sign(
    { id: usuario.id, role: usuario.Role.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token, usuario: { id: usuario.id, nombre: usuario.nombre, role: usuario.Role.role } };
}