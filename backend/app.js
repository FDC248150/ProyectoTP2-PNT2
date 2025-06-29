import express from "express";
import { UsuarioRoute,PeliculaRoute,FuncionRoute,SalaRoute,ReservaRoute,GeneroRoute} from "./routes/RoutesIndex.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

app.use("/api/usuarios", UsuarioRoute);
app.use("/api/peliculas", PeliculaRoute);
app.use("/api/funciones", FuncionRoute);
app.use("/api/salas", SalaRoute);
app.use("/api/reservas", ReservaRoute);
app.use("/api/generos", GeneroRoute);

app.use(errorHandler);

export default app;