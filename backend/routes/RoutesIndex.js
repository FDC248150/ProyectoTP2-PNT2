// Este archivo centraliza y exporta todas las rutas principales de la API
import UsuarioRoute from "./UsuarioRoute.js";
import PeliculaRoute from "./PeliculaRoute.js";
import FuncionRoute from "./FuncionRoute.js";
import SalaRoute from "./SalaRoute.js";
import ReservaRoute from "./ReservaRoute.js";
import GeneroRoute from "./GeneroRoute.js";

// Exporta cada router para ser usado en app.js
export {
  UsuarioRoute,
  PeliculaRoute,
  FuncionRoute,
  SalaRoute,
  ReservaRoute,
  GeneroRoute
};