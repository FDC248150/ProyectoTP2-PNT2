import { Sala } from "../models/index.js";

// Servicio para obtener todas las salas
export async function getAllSalasService() {
  return await Sala.findAll();
}

// Servicio para obtener una sala por su ID
export async function getSalaByIdService(id) {
  return await Sala.findByPk(id);
}

// Servicio para crear una nueva sala
export async function createSalaService(data) {
  return await Sala.create(data);
}

// Servicio para actualizar una sala existente
export async function updateSalaService(id, data) {
  const sala = await Sala.findByPk(id);
  if (!sala) return null;
  await sala.update(data);
  return sala;
}

// Servicio para eliminar una sala
export async function deleteSalaService(id) {
  const sala = await Sala.findByPk(id);
  if (!sala) return null;
  await sala.destroy();
  return sala;
}