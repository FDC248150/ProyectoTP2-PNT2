import { Role } from "../models/index.js";

const roleSeed = async () => {
  try {
    // Check if roles already exist
    const count = await Role.count();
    if (count === 0) {
      await Role.bulkCreate([
        { role: "admin" },
        { role: "user" }
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