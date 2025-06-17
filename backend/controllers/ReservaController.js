import {Reserva, User, Funcion} from "../models/index.js";

export const getAllReservas = async (req, res) => {
  try {

    const reservas = await Reserva.findAll({ include: [User, Funcion] });
    res.json(reservas);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getReservaById = async (req, res) => {
  try {

    const reserva = await Reserva.findByPk(req.params.id, { include: [User, Funcion] });

    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    res.json(reserva);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createReserva = async (req, res) => {
  try {

    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const updateReserva = async (req, res) => {
  try {

    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    await reserva.update(req.body);
    res.json(reserva);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const deleteReserva = async (req, res) => {
  try {

    const reserva = await Reserva.findByPk(req.params.id);

    if (!reserva) return res.status(404).json({ error: "Reserva no encontrada" });
    await reserva.destroy();
    res.json({ message: "Reserva eliminada" });

  } catch (err) {

    res.status(500).json({ error: err.message });
    
  }
};