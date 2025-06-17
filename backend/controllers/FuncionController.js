import {Funcion, Pelicula, Sala} from "../models/index.js";

export const getAllFunciones = async (req, res) => {
  try {

    const funciones = await Funcion.findAll({ include: [Pelicula, Sala] });
    res.json(funciones);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const getFuncionById = async (req, res) => {
  try {

    const funcion = await Funcion.findByPk(req.params.id, { include: [Pelicula, Sala] });

    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    res.json(funcion);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }
};

export const createFuncion = async (req, res) => {
  try {

    const funcion = await Funcion.create(req.body);
    res.status(201).json(funcion);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const updateFuncion = async (req, res) => {
  try {

    const funcion = await Funcion.findByPk(req.params.id);

    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    await funcion.update(req.body);
    res.json(funcion);

  } catch (err) {

    res.status(400).json({ error: err.message });

  }
};

export const deleteFuncion = async (req, res) => {
  try {

    const funcion = await Funcion.findByPk(req.params.id);

    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    await funcion.destroy();
    res.json({ message: "Funcion eliminada" });

  } catch (err) {

    res.status(500).json({ error: err.message });
    
  }
};