import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Genero from "./Genero.js";

// Modelo que representa una película
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
    // Relación con el género de la película
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
    sequelize: connection, // Conexión a la base de datos
    modelName: "Pelicula",
    timestamps: false,
  }
);

export default Pelicula;