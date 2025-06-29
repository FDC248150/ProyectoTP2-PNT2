export function errorHandler(error, req, res, next) {
  res.status(error.status || 500).send({ success: false, message: error.message });
}