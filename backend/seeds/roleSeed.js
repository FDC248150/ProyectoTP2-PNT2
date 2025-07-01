import { Role } from "../models/index.js";

// Seed para poblar la tabla Role con los roles básicos si no existen
const roleSeed = async () => {
  try {
    // Verifica si ya existen roles en la tabla
    const count = await Role.count();
    if (count === 0) {
      // Si no existen, crea los roles "admin" y "user"
      await Role.bulkCreate([
        { nombre: "admin" },
        { nombre: "user" }
      ]);
      console.log("Roles creados correctamente");
    } else {
      console.log("Roles ya existen, no se crean duplicados");
    }
  } catch (error) {
    console.log("Error al crear roles:", error.message);
  }
};

export default roleSeed;