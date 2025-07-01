// Archivo encargado de crear y exportar la conexión a la base de datos usando Sequelize

import { Sequelize } from "sequelize";
// Importa las variables de configuración necesarias para la conexión
import {
  DB_NAME,
  DB_USER,
  DB_PASS,     
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
} from "../config/config.js";

// Crea una instancia de Sequelize con los datos de conexión y opciones recomendadas
const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
});

export default connection;