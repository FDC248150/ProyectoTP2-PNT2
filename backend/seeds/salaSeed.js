import { Sala } from "../models/index.js";

// Seed para poblar la tabla Sala con algunas salas iniciales
const salaSeed = async () => {
  try {
    const count = await Sala.count();
    if (count === 0) {
      await Sala.bulkCreate([
        { nombre: "Sala 1", capacidadButacas: 100 },
        { nombre: "Sala 2", capacidadButacas: 80 },
        { nombre: "Sala 3", capacidadButacas: 50 }
      ]);
      console.log("Salas creadas correctamente");
    } else {
      console.log("Salas ya existen, no se crean duplicados");
    }
  } catch (error) {
    console.log("Error al crear salas:", error.message);
  }
};

export default salaSeed;