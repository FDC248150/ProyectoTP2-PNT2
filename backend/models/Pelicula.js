import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Genero from "./Genero.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    portada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Genero,
        key: "id",
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Pelicula",
    timestamps: false,
  }
);

export default Pelicula;