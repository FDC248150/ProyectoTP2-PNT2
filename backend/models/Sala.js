import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

// Modelo que representa una sala de cine
class Sala extends Model {}

Sala.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    capacidadButacas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Conexión a la base de datos
    modelName: "Sala",
    timestamps: false,
  }
);

export default Sala;