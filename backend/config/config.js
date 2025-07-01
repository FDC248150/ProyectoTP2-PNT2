// Archivo de configuración centralizada para la aplicación

// Puerto en el que se ejecuta el servidor Express
const SERVER_PORT = process.env.SERVER_PORT || 3060;

// Nombre de la base de datos
const DB_NAME = "cine_db";
// Usuario de la base de datos
const DB_USER = "root";
// Contraseña de la base de datos
const DB_PASS = "admin@123";
// Host donde corre la base de datos
const DB_HOST = "localhost";
// Dialecto de la base de datos
const DB_DIALECT = "mysql";
// Puerto de la base de datos
const DB_PORT = 3306;

// Clave secreta para firmar y verificar JWT
const JWT_SECRET = "12345678";

// Exporta todas las variables de configuración para ser usadas en el resto de la app
export {
  SERVER_PORT,
  DB_NAME,
  DB_DIALECT,
  DB_HOST,
  DB_PASS,
  DB_PORT,
  DB_USER,
  JWT_SECRET,
};