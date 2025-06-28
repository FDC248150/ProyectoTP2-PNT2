<!--<script setup>
  // Importamos la librería Axios para hacer peticiones HTTP
</script>

<template>

    <header>
      <h1 class="display-1">Lista de Películas</h1>
    </header>
 
  <div>
    
    <ul>          mysql 
      <li v-for="pelicula in peliculas" :key="pelicula.id">
        {{ pelicula.titulo }} - {{ pelicula.genero }}
      </li>
    </ul>
  </div>-->

  <!--descomentar lo de arriba, cuando se utilice la API_KEY responsiva desde el backend-->

  <template>
  <div class="peliculas-container">
    <div 
      v-for="(pelicula, index) in peliculas" 
      :key="index" 
      class="peliculaItem fade-up"
    >
      <img 
        class="imgAclamada" 
        :src="pelicula.url_poster" 
        :alt="pelicula.titulo" 
        loading="lazy" 
      />
      <p class="tituloPelicula">{{ pelicula.titulo }}</p>
    </div>
  </div>
  <footer>
      Derechos reservados 
      <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo TMDB" />
      </a>
  </footer>
</template>

<script>
export default {
  name: 'PeliculasList',
  data() {
    return {
      peliculas: [
        {
          titulo: "The Shawshank Redemption",
          url_poster: "https://image.tmdb.org/t/p/w500//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
        },
        {
          titulo: "The Godfather",
          url_poster: "https://image.tmdb.org/t/p/w500//3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        },
        {
          titulo: "The Godfather Part II",
          url_poster: "https://image.tmdb.org/t/p/w500//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg"
        },
        {
          titulo: "Schindler's List",
          url_poster: "https://image.tmdb.org/t/p/w500//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
        },
        {
          titulo: "12 Angry Men",
          url_poster: "https://image.tmdb.org/t/p/w500//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg"
        },
        {
          titulo: "Spirited Away",
          url_poster: "https://image.tmdb.org/t/p/w500//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
        },
        {
          titulo: "Dilwale Dulhania Le Jayenge",
          url_poster: "https://image.tmdb.org/t/p/w500//lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg"
        },
        {
          titulo: "The Dark Knight",
          url_poster: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
          titulo: "Parasite",
          url_poster: "https://image.tmdb.org/t/p/w500//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
        {
          titulo: "The Green Mile",
          url_poster: "https://image.tmdb.org/t/p/w500//8VG8fDNiy50H4FedGwdSVUPoaJe.jpg"
        },
        {
          titulo: "Your Name.",
          url_poster: "https://image.tmdb.org/t/p/w500//q719jXXEzOoYaps6babgKnONONX.jpg"
        },
        {
          titulo: "Pulp Fiction",
          url_poster: "https://image.tmdb.org/t/p/w500//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
        },
        {
          titulo: "The Lord of the Rings: The Return of the King",
          url_poster: "https://image.tmdb.org/t/p/w500//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
        },
        {
          titulo: "Forrest Gump",
          url_poster: "https://image.tmdb.org/t/p/w500//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
        },
        {
          titulo: "The Good, the Bad and the Ugly",
          url_poster: "https://image.tmdb.org/t/p/w500//bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
        },
        {
          titulo: "GoodFellas",
          url_poster: "https://image.tmdb.org/t/p/w500//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"
        },
        {
          titulo: "Grave of the Fireflies",
          url_poster: "https://image.tmdb.org/t/p/w500//k9tv1rXZbOhH7eiCk378x61kNQ1.jpg"
        },
        {
          titulo: "Seven Samurai",
          url_poster: "https://image.tmdb.org/t/p/w500//8OKmBV5BUFzmozIC3pPWKHy17kx.jpg"
        },
      ]
    }
  }
}
</script>

<style scoped>
.peliculas-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.peliculaItem {
  width: 150px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.peliculaItem:hover {
  transform: scale(1.05);
}

.imgAclamada {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.tituloPelicula {
  margin-top: 0.5rem;
  font-weight: 600;
  color: #fff;
  font-size: 0.9rem;
}
</style>

    
    


