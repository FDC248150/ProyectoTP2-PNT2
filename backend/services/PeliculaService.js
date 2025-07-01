import { Pelicula, Genero } from "../models/index.js";

// Servicio para obtener todas las películas, incluyendo su género
export async function getAllPeliculasService() {
  return await Pelicula.findAll({ include: Genero });
}

// Servicio para obtener una película por su ID, incluyendo su género
export async function getPeliculaByIdService(id) {
  return await Pelicula.findByPk(id, { include: Genero });
}

// Servicio para crear una nueva película
export async function createPeliculaService(data) {
  return await Pelicula.create(data);
}

// Servicio para actualizar una película existente
export async function updatePeliculaService(id, data) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.update(data);
  return pelicula;
}

// Servicio para eliminar una película
export async function deletePeliculaService(id) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return pelicula;
}