<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <Header />
      <main class="card-body">
        <Navbar />
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
// Componentes de archivo simple.
import Inicio from './components/Inicio.vue';
import Footer from './components/Estructura/Footer.vue';
import Header from './components/Estructura/Header.vue';
import Navbar from './components//Estructura/Navbar.vue';
import Peliculas from './components/Peliculas.vue';

// Componentes de archivo compuesto.
import FormularioLogin from './components/FormularioLogin/Index.vue';

export default
{
  name: 'App',
  components:
  {
    Navbar,
    Inicio,
    FormularioLogin,
    Peliculas,
    Footer,
    Header
  }
}
</script>

<style scoped>
.card-header
{
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