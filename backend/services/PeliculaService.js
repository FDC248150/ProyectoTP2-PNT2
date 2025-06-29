import { Pelicula, Genero } from "../models/index.js";

export async function getAllPeliculasService() {
  return await Pelicula.findAll({ include: Genero });
}

export async function getPeliculaByIdService(id) {
  return await Pelicula.findByPk(id, { include: Genero });
}

export async function createPeliculaService(data) {
  return await Pelicula.create(data);
}

export async function updatePeliculaService(id, data) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.update(data);
  return pelicula;
}

export async function deletePeliculaService(id) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return pelicula;
}