import express from "express";
import { SERVER_PORT } from "./config/config.js";
import connection from "./connection/connection.js";
import UsuarioRoute from "./routes/UsuarioRoute.js";
import PeliculaRoute from "./routes/PeliculaRoute.js";
import FuncionRoute from "./routes/FuncionRoute.js";
import SalaRoute from "./routes/SalaRoute.js";
import ReservaRoute from "./routes/ReservaRoute.js";
import GeneroRoute from "./routes/GeneroRoute.js";
import roleSeed from "./seeds/roleSeed.js";

const app = express();
app.use(express.json());

app.use("/api/usuarios", UsuarioRoute);
app.use("/api/peliculas", PeliculaRoute);
app.use("/api/funciones", FuncionRoute);
app.use("/api/salas", SalaRoute);
app.use("/api/reservas", ReservaRoute);
app.use("/api/generos", GeneroRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ success: false, message: error.message });
});
app.get("/ping", (req, res) => {
  res.send("pong");
});
connection
  .sync({ force: false })
  .then(async () => {
    await roleSeed(); 
    const PORT = SERVER_PORT;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error sincronizando la base de datos:", err);
  });