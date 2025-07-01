import { Genero } from "../models/index.js";

// Seed para poblar la tabla Genero con algunos géneros iniciales
const generoSeed = async () => {
  try {
    const count = await Genero.count();
    if (count === 0) {
      await Genero.bulkCreate([
        { nombre: "Acción" },
        { nombre: "Comedia" },
        { nombre: "Drama" },
        { nombre: "Terror" },
        { nombre: "Ciencia Ficción" }
      ]);
      console.log("Géneros creados correctamente");
    } else {
      console.log("Géneros ya existen, no se crean duplicados");
    }
  } catch (error) {
    console.log("Error al crear géneros:", error.message);
  }
};

export default generoSeed;