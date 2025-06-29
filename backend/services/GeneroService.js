import { Genero } from "../models/index.js";

export async function getAllGenerosService() {
  return await Genero.findAll();
}

export async function getGeneroByIdService(id) {
  return await Genero.findByPk(id);
}

export async function createGeneroService(data) {
  return await Genero.create(data);
}

export async function updateGeneroService(id, data) {
  const genero = await Genero.findByPk(id);
  if (!genero) return null;
  await genero.update(data);
  return genero;
}

export async function deleteGeneroService(id) {
  const genero = await Genero.findByPk(id);
  if (!genero) return null;
  await genero.destroy();
  return genero;
}