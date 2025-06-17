import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

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
    sequelize: connection,
    modelName: "Sala",
    timestamps: false,
  }
);

export default Sala;