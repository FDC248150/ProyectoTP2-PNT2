// Archivo principal de configuración de la aplicación Express

import express from "express";
// Importa todas las rutas principales de la API desde el índice de rutas
import { UsuarioRoute, PeliculaRoute, FuncionRoute, SalaRoute, ReservaRoute, GeneroRoute } from "./routes/RoutesIndex.js";
// Importa el middleware global para manejo de errores
import { errorHandler } from "./middleware/errorHandler.js";

// Crea la instancia principal de la aplicación Express
const app = express();

// Middleware para parsear automáticamente el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Asocia cada grupo de rutas a su endpoint base correspondiente
app.use("/api/usuarios", UsuarioRoute);    // Rutas para usuarios
app.use("/api/peliculas", PeliculaRoute);  // Rutas para películas
app.use("/api/funciones", FuncionRoute);   // Rutas para funciones
app.use("/api/salas", SalaRoute);          // Rutas para salas
app.use("/api/reservas", ReservaRoute);    // Rutas para reservas
app.use("/api/generos", GeneroRoute);      // Rutas para géneros

// Middleware global para manejo de errores
app.use(errorHandler);

export default app;