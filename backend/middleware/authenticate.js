import jwt from "jsonwebtoken";
import { User, Role } from "../models/index.js";

export async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No autenticado" });

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, "12345678");
    const user = await User.findByPk(payload.id, { include: Role });
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
}