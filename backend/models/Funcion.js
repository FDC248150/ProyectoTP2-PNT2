// Importa los tipos de datos y la clase Model de Sequelize, la conexión a la base de datos y los modelos relacionados
import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Sala from "./Sala.js";
import Pelicula from "./Pelicula.js";

// Define la clase Funcion que representa una función de cine
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
    // ID de la sala donde se realiza la función (clave foránea)
    salaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Sala,
        key: "id",
      },
    },
    // ID de la película que se proyecta en la función (clave foránea)
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
    sequelize: connection, // Conexión a la base de datos
    modelName: "Funcion",
    timestamps: false,
  }
);

export default Funcion;