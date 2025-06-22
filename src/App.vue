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

</style>
