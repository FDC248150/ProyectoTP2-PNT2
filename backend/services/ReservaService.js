import { Reserva } from "../models/index.js";

export async function getAllReservasService() {
  return await Reserva.findAll();
}

export async function getReservaByIdService(id) {
  return await Reserva.findByPk(id);
}

export async function createReservaService(data) {
  return await Reserva.create(data);
}

export async function updateReservaService(id, data) {
  const reserva = await Reserva.findByPk(id);
  if (!reserva) return null;
  await reserva.update(data);
  return reserva;
}

export async function deleteReservaService(id) {
  const reserva = await Reserva.findByPk(id);
  if (!reserva) return null;
  await reserva.destroy();
  return reserva;
}