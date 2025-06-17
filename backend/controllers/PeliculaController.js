import {Pelicula, Genero} from "../models/index.js"; 

export const getAllPeliculas = async (req, res) => {
  try {

    const peliculas = await Pelicula.findAll({ include: Genero });
    res.json(peliculas);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getPeliculaById = async (req, res) => {
  try {

    const pelicula = await Pelicula.findByPk(req.params.id, { include: Genero });

    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    res.json(pelicula);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createPelicula = async (req, res) => {
  try {

    const pelicula = await Pelicula.create(req.body);

    res.status(201).json(pelicula);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const updatePelicula = async (req, res) => {
  try {

    const pelicula = await Pelicula.findByPk(req.params.id);

    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    await pelicula.update(req.body);
    res.json(pelicula);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const deletePelicula = async (req, res) => {
  try {

    const pelicula = await Pelicula.findByPk(req.params.id);

    if (!pelicula) return res.status(404).json({ error: "Pelicula no encontrada" });
    await pelicula.destroy();
    res.json({ message: "Pelicula eliminada" });

  } catch (err) {

    res.status(500).json({ error: err.message });
    
  }
};