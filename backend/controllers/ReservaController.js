// Importa los servicios que interactúan con el modelo Reserva
import {
  getAllReservasService,
  getReservaByIdService,
  createReservaService,
  updateReservaService,
  deleteReservaService
} from "../services/ReservaService.js";

// Controlador para obtener todas las reservas
// GET /api/reservas
export const getAllReservas = async (req, res) => {
  try {
    const reservas = await getAllReservasService();
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una reserva por ID
// GET /api/reservas/:id
export const getReservaById = async (req, res) => {
  try {
    const reserva = await getReservaByIdService(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva reserva
// POST /api/reservas
export const createReserva = async (req, res) => {
  try {
    const reserva = await createReservaService(req.body);
    res.status(201).json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar una reserva existente
// PUT /api/reservas/:id
export const updateReserva = async (req, res) => {
  try {
    const reserva = await updateReservaService(req.params.id, req.body);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar una reserva
// DELETE /api/reservas/:id
export const deleteReserva = async (req, res) => {
  try {
    const reserva = await deleteReservaService(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json({ message: "Reserva eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};