// Importa los servicios que interactúan con el modelo Funcion
import {
  getAllFuncionesService,
  getFuncionByIdService,
  createFuncionService,
  updateFuncionService,
  deleteFuncionService
} from "../services/FuncionService.js";

// Controlador para obtener todas las funciones
// GET /api/funciones/
export const getAllFunciones = async (req, res) => {
  try {
    const funciones = await getAllFuncionesService();
    res.json(funciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una función por su ID
// GET /api/funciones/:id
export const getFuncionById = async (req, res) => {
  try {
    const funcion = await getFuncionByIdService(req.params.id);
    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    res.json(funcion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva función
// POST /api/funciones
export const createFuncion = async (req, res) => {
  try {
    const funcion = await createFuncionService(req.body);
    res.status(201).json(funcion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para actualizar una función existente
// PUT /api/funciones/:id
export const updateFuncion = async (req, res) => {
  try {
  
    const funcion = await updateFuncionService(req.params.id, req.body);
    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    res.json(funcion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para eliminar una función
// DELETE /api/funciones/:id
export const deleteFuncion = async (req, res) => {
  try {
    const funcion = await deleteFuncionService(req.params.id);
    if (!funcion) return res.status(404).json({ error: "Funcion no encontrada" });
    res.json({ message: "Funcion eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};