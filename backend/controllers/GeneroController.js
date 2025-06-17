import {Genero} from "../models/index.js";

export const getAllGeneros = async (req, res) => {
  try {

    const generos = await Genero.findAll();
    res.json(generos);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getGeneroById = async (req, res) => {
  try {

    const genero = await Genero.findByPk(req.params.id);

    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    res.json(genero);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createGenero = async (req, res) => {
  try {

    const genero = await Genero.create(req.body);
    res.status(201).json(genero);

  } catch (err) {
    
    
  }
};

export const updateGenero = async (req, res) => {
  try {

    const genero = await Genero.findByPk(req.params.id);

    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    await genero.update(req.body);
    res.json(genero);

  } catch (err) {
    res.status(400).json({ error: err.message });

  }
};

export const deleteGenero = async (req, res) => {
  try {

    const genero = await Genero.findByPk(req.params.id);

    if (!genero) return res.status(404).json({ error: "Genero no encontrado" });
    await genero.destroy();
    res.json({ message: "Genero eliminado" });

  } catch (err) {

    res.status(500).json({ error: err.message });
    
  }
};