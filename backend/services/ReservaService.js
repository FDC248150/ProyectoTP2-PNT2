import { Reserva, Funcion } from "../models/index.js";

// Servicio para obtener todas las reservas
export async function getAllReservasService() {
  return await Reserva.findAll();
}

// Servicio para obtener una reserva por su ID
export async function getReservaByIdService(id) {
  return await Reserva.findByPk(id);
}

// Servicio para crear una nueva reserva y actualizar las butacas disponibles
export async function createReservaService(data) {
  // Busca la función asociada a la reserva
  const funcion = await Funcion.findByPk(data.funcionId);
  if (!funcion) throw new Error("Función no encontrada");

  // Verifica que haya suficientes butacas disponibles
  if (funcion.butacasDisponibles < data.cantButacas) {
    throw new Error("No hay suficientes butacas disponibles");
  }

  // Crea la reserva
  const reserva = await Reserva.create(data);

  // Resta la cantidad de butacas reservadas a la función
  funcion.butacasDisponibles -= data.cantButacas;
  await funcion.save();

  return reserva;
}

// Servicio para actualizar una reserva existente
export async function updateReservaService(id, data) {
  const reserva = await Reserva.findByPk(id);
  if (!reserva) return null;
  await reserva.update(data);
  return reserva;
}

// Servicio para eliminar una reserva
export async function deleteReservaService(id) {
  const reserva = await Reserva.findByPk(id);
  if (!reserva) return null;
  await reserva.destroy();
  return reserva;
}