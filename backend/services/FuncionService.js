import { Funcion } from "../models/index.js";

export async function getAllFuncionesService() {
  return await Funcion.findAll();
}

export async function getFuncionByIdService(id) {
  return await Funcion.findByPk(id);
}

export async function createFuncionService(data) {
  return await Funcion.create(data);
}

export async function updateFuncionService(id, data) {
  const funcion = await Funcion.findByPk(id);
  if (!funcion) return null;
  await funcion.update(data);
  return funcion;
}

export async function deleteFuncionService(id) {
  const funcion = await Funcion.findByPk(id);
  if (!funcion) return null;
  await funcion.destroy();
  return funcion;
}