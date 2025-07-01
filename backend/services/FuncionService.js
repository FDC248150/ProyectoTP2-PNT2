import { Funcion } from "../models/index.js";

// Servicio para obtener todas las funciones
export async function getAllFuncionesService() {
  return await Funcion.findAll();
}

// Servicio para obtener una función por su ID
export async function getFuncionByIdService(id) {
  return await Funcion.findByPk(id);
}

// Servicio para crear una nueva función
export async function createFuncionService(data) {
  return await Funcion.create(data);
}

// Servicio para actualizar una función existente
export async function updateFuncionService(id, data) {
  const funcion = await Funcion.findByPk(id);
  if (!funcion) return null;
  await funcion.update(data);
  return funcion;
}

// Servicio para eliminar una función
export async function deleteFuncionService(id) {
  const funcion = await Funcion.findByPk(id);
  if (!funcion) return null;
  await funcion.destroy();
  return funcion;
}