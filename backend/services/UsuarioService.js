import { User, Role } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

// Servicio para obtener todos los usuarios, incluyendo su rol
export async function getAllUsuariosService() {
  return await User.findAll({ include: Role });
}

// Servicio para obtener un usuario por su ID, incluyendo su rol
export async function getUsuarioByIdService(id) {
  return await User.findByPk(id, { include: Role });
}

// Servicio para crear un nuevo usuario
export async function createUsuarioService(data) {
  return await User.create(data);
}

// Servicio para actualizar un usuario existente
export async function updateUsuarioService(id, data) {
  const usuario = await User.findByPk(id);
  if (!usuario) return null;
  await usuario.update(data);
  return usuario;
}

// Servicio para eliminar un usuario
export async function deleteUsuarioService(id) {
  const usuario = await User.findByPk(id);
  if (!usuario) return null;
  await usuario.destroy();
  return usuario;
}

// Servicio para login de usuario
export async function loginUsuarioService(email, password) {
  // Busca el usuario por email e incluye el rol
  const user = await User.findOne({ where: { email }, include: Role });
  if (!user) return null;

  // Compara la contraseña ingresada con el hash almacenado
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null; 

  // Genera un token JWT con el ID y el rol del usuario
  const token = jwt.sign(
    { id: user.id, role: user.Role.role, roleName: user.Role.role },
    JWT_SECRET,
    { expiresIn: "8h" }
  );

  // Devuelve el token y los datos básicos del usuario
  return {
    token,
    user: {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      role: user.Role.role,
    },
  };
}
