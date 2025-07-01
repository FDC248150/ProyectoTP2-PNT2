import jwt from "jsonwebtoken";
import { User, Role } from "../models/index.js";
import { JWT_SECRET } from "../config/config.js";

// Middleware asíncrono para autenticar usuarios usando JWT y traer su información desde la base de datos
export async function authenticate(req, res, next) {
  // Obtiene el header Authorization (formato esperado: "Bearer <token>")
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "No autenticado" });
  // Extrae el token del header
  const token = authHeader.split(" ")[1];
  try {
    // Verifica y decodifica el token usando la clave secreta
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(payload.id, { include: Role });
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
    req.user = {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      role: user.Role.nombre 
    };
    next();
  } catch (err) {
    // Si el token es inválido o expiró, responde con 401
    res.status(401).json({ error: "Token inválido" });
  }
}