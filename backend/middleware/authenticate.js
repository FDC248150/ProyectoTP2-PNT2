import jwt from "jsonwebtoken";
import { User, Role } from "../models/index.js";
import { JWT_SECRET } from "../config/config.js";

export async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No autenticado" });

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(payload.id, { include: Role });
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
}