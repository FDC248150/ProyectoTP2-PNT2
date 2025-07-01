// Middleware para autorizar el acceso según el rol del usuario
export function authorize(roleName) {
  return (req, res, next) => {
    // Verifica que el usuario esté autenticado
    if (!req.user) return res.status(401).json({ error: "No autenticado" });
    // Verifica que el usuario tenga el rol requerido
    if (req.user.Role.role !== roleName) {
      return res.status(403).json({ error: "No autorizado" });
    }
    next();
  };
}