// Middleware global para manejar errores en la aplicación Express
// Captura cualquier error que ocurra en los controladores o rutas y responde con un mensaje adecuado
export function errorHandler(error, req, res, next) {
  res.status(error.status || 500).send({ success: false, message: error.message });
}