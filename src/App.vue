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
// Componentes de archivo simple.
import Inicio from './components/Inicio.vue'
import Navbar from './components/Navbar.vue'
import Peliculas from './components/Peliculas.vue'

// Componentes de archivo compuesto.
import FormularioLogin from './components/FormularioLogin/Index.vue'

export default
{
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