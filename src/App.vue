<!--Sala 8 / 9 de junio-->
<!--<script setup>
  import Peliculas from './components/Peliculas.vue'
</script>
//Borrar cuando el NavBar esté listo
<template>
  <h1>Bienvenido a Cineflix</h1>-->
  <!--usar Nabvar
  <Peliculas />
</template>-->



<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <header class="card-header">
        <h2>ORTFlix</h2>
      </header>

      <main class="card-body">
        <Navbar />

        <RouterView />
        
      </main>
    </div>
  </div>

</template>


<script>
import Navbar from './components/Navbar.vue'
import Peliculas from './components/Peliculas.vue'
/*este va último*/
import FormularioLogin from './components/FormularioLogin/Index.vue'
import Inicio from './components/Inicio.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    Inicio,
    FormularioLogin,
    Peliculas,
  }
}
</script>

<style scoped>
  .card-header {
  background-color: #ffc107; 
  color: #212529; 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 700;
  font-size: 1.8rem;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
