import { Genero } from "../models/index.js";

// Servicio para obtener todos los géneros
export async function getAllGenerosService() {
  return await Genero.findAll();
}

// Servicio para obtener un género por su ID
export async function getGeneroByIdService(id) {
  return await Genero.findByPk(id);
}

// Servicio para crear un nuevo género
export async function createGeneroService(data) {
  return await Genero.create(data);
}

// Servicio para actualizar un género existente
export async function updateGeneroService(id, data) {
  const genero = await Genero.findByPk(id);
  if (!genero) return null;
  await genero.update(data);
  return genero;
}

// Servicio para eliminar un género
export async function deleteGeneroService(id) {
  const genero = await Genero.findByPk(id);
  if (!genero) return null;
  await genero.destroy();
  return genero;
}