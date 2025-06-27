// Importaciones necesarias para el enrutamiento en Vue.js.
import { createRouter, createWebHistory } from "vue-router";
import Peliculas from "./components/Peliculas.vue";
import FormularioLogin from "./components/FormularioLogin/Index.vue";
import Inicio from "./components/Inicio.vue";

// Definición de las rutas de la aplicación.
const routes =
[
    // Definición de la ruta raíz.
    { path: '/', redirect: '/Inicio' },
    
    // Definición de las rutas de los componentes.
    { path: '/Peliculas', component: Peliculas },
    { path: '/FormularioLogin', component: FormularioLogin },
    { path: '/Inicio', component: Inicio },
    
    // Definición de las rutas no existentes (por default).
    { path: '/:pathMatch(.*)*', redirect: '/Inicio' },
]

// Creación del router utilizando el historial web y las rutas definidas.
const router = createRouter(
    {
        history: createWebHistory(),
        routes      
    })

export default router;