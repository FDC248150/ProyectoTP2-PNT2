 // Importa los servicios que interactúan con el modelo Genero
import {
  getAllGenerosService,
  getGeneroByIdService,
  createGeneroService,
  updateGeneroService,
  deleteGeneroService
} from "../services/GeneroService.js";

// Controlador para obtener todos los géneros
// GET /api/generos
export const getAllGeneros = async (req, res) => {
  try {
    const generos = await getAllGenerosService();
    res.json(generos); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener un género por ID
// GET /api/generos/:id
export const getGeneroById = async (req, res) => {
  try {
    const genero = await getGeneroByIdService(req.params.id);
    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    res.json(genero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear un nuevo género
// POST /api/generos
export const createGenero = async (req, res) => {
  try {
    const genero = await createGeneroService(req.body);
    res.status(201).json(genero); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar un género existente
// PUT /api/generos/:id
export const updateGenero = async (req, res) => {
  try {
    const genero = await updateGeneroService(req.params.id, req.body);
    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    res.json(genero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar un género
// DELETE /api/generos/:id
export const deleteGenero = async (req, res) => {
  try {
    const genero = await deleteGeneroService(req.params.id);
    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    res.json({ message: "Genero eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};