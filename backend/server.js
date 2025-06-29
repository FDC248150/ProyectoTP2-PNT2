import app from "./app.js";
import { SERVER_PORT } from "./config/config.js";
import connection from "./connection/connection.js";
import roleSeed from "./seeds/roleSeed.js";

connection
  .sync({ force: false })
  .then(async () => {
    await roleSeed();
    app.listen(SERVER_PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error sincronizando la base de datos:", err);
  });