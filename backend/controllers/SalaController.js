import { Sala } from "../models/index.js";

export const getAllSalas = async (req, res) => {
  try {

    const salas = await Sala.findAll();
    res.json(salas);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getSalaById = async (req, res) => {
  try {

    const sala = await Sala.findByPk(req.params.id);

    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    res.json(sala);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createSala = async (req, res) => {
  try {

    const sala = await Sala.create(req.body);
    res.status(201).json(sala);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const updateSala = async (req, res) => {
  try {

    const sala = await Sala.findByPk(req.params.id);

    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    await sala.update(req.body);
    res.json(sala);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const deleteSala = async (req, res) => {
  try {

    const sala = await Sala.findByPk(req.params.id);
    
    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    await sala.destroy();
    res.json({ message: "Sala eliminada" });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};