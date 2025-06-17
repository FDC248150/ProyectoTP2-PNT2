import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Sala from "./Sala.js";
import Pelicula from "./Pelicula.js";

class Funcion extends Model {}

Funcion.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    butacasDisponibles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Sala,
        key: "id",
      },
    },
    peliculaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pelicula,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Funcion",
    timestamps: false,
  }
);

export default Funcion;