import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import User from "./Usuario.js";
import Funcion from "./Funcion.js";

// Modelo que representa una reserva de butacas para una función
class Reserva extends Model {}

Reserva.init(
  {
    // Usuario que realiza la reserva (clave foránea)
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    // Función reservada (clave foránea)
    funcionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Funcion,
        key: "id",
      },
    },
    cantButacas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Conexión a la base de datos
    modelName: "Reserva",
    timestamps: false,
  }
);

export default Reserva;