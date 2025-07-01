// Importa los servicios que interactúan con el modelo Pelicula
import {
  getAllPeliculasService,
  getPeliculaByIdService,
  createPeliculaService,
  updatePeliculaService,
  deletePeliculaService
} from "../services/PeliculaService.js";

// Controlador para obtener todas las películas
// GET /api/peliculas
export const getAllPeliculas = async (req, res) => {
  try {
    const peliculas = await getAllPeliculasService();
    res.json(peliculas); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una película por ID
// GET /api/peliculas/:id
export const getPeliculaById = async (req, res) => {
  try {
    const pelicula = await getPeliculaByIdService(req.params.id);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json(pelicula);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva película
// POST /api/peliculas
export const createPelicula = async (req, res) => {
  try {
    const pelicula = await createPeliculaService(req.body);
    res.status(201).json(pelicula); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar una película existente
// PUT /api/peliculas/:id
export const updatePelicula = async (req, res) => {
  try {
    const pelicula = await updatePeliculaService(req.params.id, req.body);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json(pelicula);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar una película
// DELETE /api/peliculas/:id
export const deletePelicula = async (req, res) => {
  try {
    const pelicula = await deletePeliculaService(req.params.id);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json({ message: "Pelicula eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};