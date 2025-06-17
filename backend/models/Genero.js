import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

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
    sequelize: connection,
    modelName: "Genero",
    timestamps: false,
  }
);

export default Genero;