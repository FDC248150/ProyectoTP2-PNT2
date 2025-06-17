export function authorize(roleName) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "No autenticado" });
    if (req.user.Role.role !== roleName) {
      return res.status(403).json({ error: "No autorizado" });
    }
    next();
  };
}