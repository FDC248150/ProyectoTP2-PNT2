import { createRouter, createWebHistory } from "vue-router";
import Peliculas from "./components/Peliculas.vue";
import FormularioLogin from "./components/FormularioLogin/Index.vue";
import Inicio from "./components/Inicio.vue";

const routes = [
    { path: '/', redirect: '/Inicio' }, 
    { path: '/Peliculas', component: Peliculas },
    { path: '/FormularioLogin', component: FormularioLogin },
    { path: '/Inicio', component: Inicio },
    /* ---- rutas no existentes / default ---- */
    { path: '/:pathMatch(.*)*', redirect: '/Inicio' },
]

const router = createRouter({
    history: createWebHistory(),
    routes      
})

export default router