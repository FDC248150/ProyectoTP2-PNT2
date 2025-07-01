import connection from "../connection/connection.js";
import Role from "./Role.js";
import User from "./Usuario.js";
import Genero from "./Genero.js";
import Pelicula from "./Pelicula.js";
import Sala from "./Sala.js";
import Funcion from "./Funcion.js";
import Reserva from "./Reserva.js";

// Define las relaciones entre los modelos
Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });

Genero.hasMany(Pelicula, { foreignKey: "generoId" });
Pelicula.belongsTo(Genero, { foreignKey: "generoId" });

Sala.hasMany(Funcion, { foreignKey: "salaId" });
Funcion.belongsTo(Sala, { foreignKey: "salaId" });

Pelicula.hasMany(Funcion, { foreignKey: "peliculaId" });
Funcion.belongsTo(Pelicula, { foreignKey: "peliculaId" });

User.hasMany(Reserva, { foreignKey: "usuarioId" });
Reserva.belongsTo(User, { foreignKey: "usuarioId" });

Funcion.hasMany(Reserva, { foreignKey: "funcionId" });
Reserva.belongsTo(Funcion, { foreignKey: "funcionId" });

// Sincroniza los modelos con la base de datos
export const syncModels = async () => {
  await connection.sync({ force: false });
  console.log("¡Modelos sincronizados!");
};

export {connection,Role,User,Genero,Pelicula,Sala,Funcion,Reserva,};