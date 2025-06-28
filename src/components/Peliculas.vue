<template>
  <div>
    <header>
      <h1 class="display-1">Cartelera actual</h1>
    </header>

    <div class="peliculas-container">
      <div 
        v-for="(pelicula, index) in peliculasEnCartelera" 
        :key="index" 
        class="peliculaItem fade-up"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        :style="hoverIndex === index ? estiloHover : {}"
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

    <!-- Botón para mostrar próximos lanzamientos -->
    <div class="proximos-toggle" @click="mostrarProximos = !mostrarProximos">
      <span class="toggle-label">
        Próximos lanzamientos
        <i :class="['bi', mostrarProximos ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
      </span>
    </div>

    <!-- Próximos lanzamientos desplegables -->
    <transition name="fade">
      <div v-if="mostrarProximos" class="peliculas-container mt-3">
        <div 
          v-for="(pelicula, index) in peliculasProximos" 
          :key="index" 
          class="peliculaItem fade-up"
          @mouseenter="hoverIndex = 'proximo-' + index"
          @mouseleave="hoverIndex = null"
          :style="hoverIndex === ('proximo-' + index) ? estiloHover : {}"
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
    </transition>

    <footer>
      Derechos reservados 
      <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo TMDB" />
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PeliculasList',
  data() {
    return {
      mostrarProximos: false,
      hoverIndex: null,
      estiloHover: {
        border: '2px solid #ffc107',
        boxShadow: '0 0 16px 2px #ffc107',
        background: '#23272b'
      },
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
        }
      ]
    }
  },
  computed: {
    peliculasEnCartelera() {
      const cantidad = Math.ceil(this.peliculas.length * 0.75);
      return this.peliculas.slice(0, cantidad);
    },
    peliculasProximos() {
      const cantidad = Math.ceil(this.peliculas.length * 0.75);
      return this.peliculas.slice(cantidad);
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

.proximos-toggle {
  margin: 2rem auto 0 auto;
  width: fit-content;
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  background: #343a40;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  user-select: none;
  transition: background 0.2s;
}
.proximos-toggle:hover {
  background: #495057;
}
.toggle-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>