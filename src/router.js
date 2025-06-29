// Importaciones necesarias para el enrutamiento en Vue.js.
import { createRouter, createWebHistory } from "vue-router";
import Peliculas from "./components/Peliculas.vue";
import FormularioLogin from "./components/FormularioLogin/Index.vue";
import Inicio from "./components/Inicio.vue";
import Reservas from "./components/Reservas.vue";
import { useAuthStore } from './Stores/authStore';

// Definición de las rutas de la aplicación.
const routes =
[
    // Definición de la ruta raíz.
    { path: '/', redirect: '/Inicio' },
    
    // Definición de las rutas de los componentes.
    { path: '/Peliculas', component: Peliculas },
    { path: '/FormularioLogin', component: FormularioLogin },
    { path: '/Inicio', component: Inicio },
    
    // Definición de la ruta protegida para Reservas.
    { 
        path: '/Reservas', 
        component: Reservas,
        meta: { requiereAuth: true } // Solo usuarios logueados
    },

    // Definición de las rutas no existentes (por default).
    { path: '/:pathMatch(.*)*', redirect: '/Inicio' },
]

// Creación del router utilizando el historial web y las rutas definidas.
const router = createRouter(
    {
        history: createWebHistory(),
        routes      
    })

// Guard global para proteger rutas.
router.beforeEach((to, from, next) =>
{
    const auth = useAuthStore();

    if (to.meta.requiereAuth && !auth.usuarioLogueado)
    {
        next('/FormularioLogin');
    }
    else
    {
        next();
    }
});

export default router;