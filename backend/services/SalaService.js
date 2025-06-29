import { Sala } from "../models/index.js";

export async function getAllSalasService() {
  return await Sala.findAll();
}

export async function getSalaByIdService(id) {
  return await Sala.findByPk(id);
}

export async function createSalaService(data) {
  return await Sala.create(data);
}

export async function updateSalaService(id, data) {
  const sala = await Sala.findByPk(id);
  if (!sala) return null;
  await sala.update(data);
  return sala;
}

export async function deleteSalaService(id) {
  const sala = await Sala.findByPk(id);
  if (!sala) return null;
  await sala.destroy();
  return sala;
}