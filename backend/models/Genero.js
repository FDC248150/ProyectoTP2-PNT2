import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

// Modelo que representa un género de película
class Genero extends Model {}

Genero.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection, // Conexión a la base de datos
    modelName: "Genero",
    timestamps: false,
  }
);

export default Genero;