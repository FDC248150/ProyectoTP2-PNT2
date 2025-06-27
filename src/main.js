// Importaciones necesarias.
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './bootstrap';

// Crear la instancia de Pinia y montar la aplicación Vue.
const pinia = createPinia();
const app = createApp(App);

// Configurar la aplicación Vue con Pinia y el router.
app.use(pinia);
app.use(router);
app.mount('#app');