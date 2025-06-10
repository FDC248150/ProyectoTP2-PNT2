<script setup>
  // Importamos la librería Axios para hacer peticiones HTTP
</script>

<template>

    <header>
      <h1 class="display-1">Lista de Películas</h1>
    </header>
 
  <div>
    
    <ul>          <!-- mysql -->
      <li v-for="pelicula in peliculas" :key="pelicula.id">
        {{ pelicula.titulo }} - {{ pelicula.genero }}
      </li>
    </ul>
  </div>
    
</template>

<style scoped>

</style>