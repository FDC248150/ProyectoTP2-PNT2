// Importa los servicios que interactúan con el modelo Sala
import {
  getAllSalasService,
  getSalaByIdService,
  createSalaService,
  updateSalaService,
  deleteSalaService
} from "../services/SalaService.js";

// Controlador para obtener todas las salas
// GET /api/salas
export const getAllSalas = async (req, res) => {
  try {
    const salas = await getAllSalasService();
    res.json(salas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una sala por ID
// GET /api/salas/:id
export const getSalaById = async (req, res) => {
  try {
    const sala = await getSalaByIdService(req.params.id);
    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    res.json(sala);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva sala
// POST /api/salas
export const createSala = async (req, res) => {
  try {
    const sala = await createSalaService(req.body);
    res.status(201).json(sala);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar una sala existente
// PUT /api/salas/:id
export const updateSala = async (req, res) => {
  try {
    const sala = await updateSalaService(req.params.id, req.body);
    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    res.json(sala);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar una sala
// DELETE /api/salas/:id
export const deleteSala = async (req, res) => {
  try {
    const sala = await deleteSalaService(req.params.id);
    if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
    res.json({ message: "Sala eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};