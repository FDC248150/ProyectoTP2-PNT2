// Archivo principal para iniciar el servidor Express y conectar la base de datos

import app from "./app.js"; // Importa la app de Express ya configurada con rutas y middlewares
import { SERVER_PORT } from "./config/config.js"; // Importa el puerto del servidor desde la configuración
import connection from "./connection/connection.js"; // Importa la instancia de conexión Sequelize

// Importa los seeds
import roleSeed from "./seeds/roleSeed.js"; 
import generoSeed from "./seeds/generoSeed.js";
import salaSeed from "./seeds/salaSeed.js";
import peliculaSeed from "./seeds/peliculaSeed.js";
import funcionSeed from "./seeds/funcionSeed.js";

// Sincroniza los modelos con la base de datos y luego inicia el servidor
connection
  .sync({ force: false }) 
  .then(async () => {
    await roleSeed();
    await generoSeed();
    await salaSeed();
    await peliculaSeed();
    await funcionSeed();

    app.listen(SERVER_PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error sincronizando la base de datos:", err);
    process.exit(1);
  });