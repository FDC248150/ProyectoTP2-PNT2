import {
  getAllReservasService,
  getReservaByIdService,
  createReservaService,
  updateReservaService,
  deleteReservaService
} from "../services/ReservaService.js";

export const getAllReservas = async (req, res) => {
  try {
    const reservas = await getAllReservasService();
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getReservaById = async (req, res) => {
  try {
    const reserva = await getReservaByIdService(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createReserva = async (req, res) => {
  try {
    const reserva = await createReservaService(req.body);
    res.status(201).json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateReserva = async (req, res) => {
  try {
    const reserva = await updateReservaService(req.params.id, req.body);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json(reserva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteReserva = async (req, res) => {
  try {
    const reserva = await deleteReservaService(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json({ message: "Reserva eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};