import { Funcion } from "../models/index.js";

// Seed para poblar la tabla Funcion con algunas funciones iniciales
const funcionSeed = async () => {
  try {
    const count = await Funcion.count();
    if (count === 0) {
      await Funcion.bulkCreate([
        {
          fecha: new Date(Date.now() + 86400000), // Mañana
          butacasDisponibles: 100,
          duracion: 136,
          salaId: 1,
          peliculaId: 1
        },
        {
          fecha: new Date(Date.now() + 172800000), // Pasado mañana
          butacasDisponibles: 80,
          duracion: 175,
          salaId: 2,
          peliculaId: 2
        },
        {
          fecha: new Date(Date.now() + 259200000), // En tres días
          butacasDisponibles: 50,
          duracion: 88,
          salaId: 3,
          peliculaId: 3
        }
      ]);
      console.log("Funciones creadas correctamente");
    } else {
      console.log("Funciones ya existen, no se crean duplicados");
    }
  } catch (error) {
    console.log("Error al crear funciones:", error.message);
  }
};

export default funcionSeed;