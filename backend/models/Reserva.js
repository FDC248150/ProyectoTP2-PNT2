import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import User from "./Usuario.js";
import Funcion from "./Funcion.js";

class Reserva extends Model {}

Reserva.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
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
    sequelize: connection,
    modelName: "Reserva",
    timestamps: false,
  }
);

export default Reserva;