import {
  getAllPeliculasService,
  getPeliculaByIdService,
  createPeliculaService,
  updatePeliculaService,
  deletePeliculaService
} from "../services/PeliculaService.js";

export const getAllPeliculas = async (req, res) => {
  try {
    const peliculas = await getAllPeliculasService();
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPeliculaById = async (req, res) => {
  try {
    const pelicula = await getPeliculaByIdService(req.params.id);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json(pelicula);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createPelicula = async (req, res) => {
  try {
    const pelicula = await createPeliculaService(req.body);
    res.status(201).json(pelicula);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updatePelicula = async (req, res) => {
  try {
    const pelicula = await updatePeliculaService(req.params.id, req.body);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json(pelicula);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePelicula = async (req, res) => {
  try {
    const pelicula = await deletePeliculaService(req.params.id);
    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json({ message: "Pelicula eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};