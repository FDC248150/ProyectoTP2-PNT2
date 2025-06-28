<template>
  <div>
    <header>
      <h1 class="cartelera-titulo">Cartelera</h1>
    </header>

    <!-- Botón de lupa para mostrar/ocultar buscador -->
    <button
      class="btn btn-outline-warning mb-3"
      @click="mostrarBuscador = !mostrarBuscador"
      style="display: block; margin: 0 auto; font-size: 1.5rem; padding: 0.4rem 1rem;"
      aria-label="Buscar"
    >
      <i class="bi bi-search"></i>
    </button>

    <!-- Buscador -->
    <input
      v-show="mostrarBuscador"
      v-model="busqueda"
      class="form-control mb-4 animate__animated animate__fadeIn"
      placeholder="Buscar película por título"
      style="max-width: 400px; margin: 0 auto; display: block;"
    />

    <!-- Mensajes de búsqueda -->
    <div
      v-if="busqueda && peliculasFiltradas.length === 0"
      class="alert mensaje-alerta mensaje-alerta-no"
    >
      No tenemos esta película.
    </div>
    <div
      v-else-if="busqueda && peliculasFiltradas.length > 0"
      class="alert mensaje-alerta mensaje-alerta-si"
    >
      ¡La tenemos!
    </div>

    <!-- Películas en cartelera -->
    <div class="peliculas-container">
      <div
        v-for="(pelicula, index) in peliculasFiltradas"
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

        <div v-if="usuarioLogueado" class="contador">
          <button class="btn-contador" @click="restarButaca(index)">−</button>
          <span class="contador-numero">{{ pelicula.cantButacas }}</span>
          <button class="btn-contador" @click="sumarButaca(index)">+</button>
          <button class="btn-reservar" @click="confirmarReserva(index)">Reservar</button>
        </div>

        <p v-else class="mensaje-alerta mensaje-alerta-dorado">
          Iniciá sesión para reservar
        </p>
      </div>
    </div>

    <!-- Botón para mostrar próximos lanzamientos -->
    <div
      class="proximos-toggle animate__animated"
      :class="{ 'animate__pulse': pulseProximos }"
      @mouseenter="pulseProximos = true"
      @mouseleave="pulseProximos = false"
      @click="mostrarProximos = !mostrarProximos"
    >
      <span class="toggle-label">
        Próximos lanzamientos
        <i :class="['bi', mostrarProximos ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
      </span>
    </div>

    <!-- Próximos lanzamientos -->
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
  </div>
</template>

<script>
import { useAuthStore } from '../Stores/authStore';
import ServicioReservas from '../Servicios/servicioReserva';

export default {
  name: 'Peliculas',
  data() {
    return {
      mostrarBuscador: false,
      busqueda: '',
      mostrarProximos: false,
      pulseProximos: false,
      hoverIndex: null,
      estiloHover: {
        border: '2px solid #ffc107',
        boxShadow: '0 0 16px 2px #ffc107',
        background: '#23272b'
      },
      peliculas: [
        { 
            titulo: "The Shawshank Redemption", 
            url_poster: "https://image.tmdb.org/t/p/w500//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg", cantButacas: 0
     },
        { 
            titulo: "The Godfather", 
            url_poster: "https://image.tmdb.org/t/p/w500//3bhkrj58Vtu7enYsRolD1fZdja1.jpg", cantButacas: 0
     },
        { 
            titulo: "The Godfather Part II", 
            url_poster: "https://image.tmdb.org/t/p/w500//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", cantButacas: 0 
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
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    usuarioLogueado() {
      return this.authStore.usuarioLogueado;
    },
    usuario() {
      return this.authStore.usuario;
    },
    peliculasFiltradas() {
      return this.busqueda
        ? this.peliculasEnCartelera.filter(p =>
            p.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
          )
        : this.peliculasEnCartelera;
    },
    peliculasEnCartelera() {
      const cantidad = Math.ceil(this.peliculas.length * 0.75);
      return this.peliculas.slice(0, cantidad);
    },
    peliculasProximos() {
      const cantidad = Math.ceil(this.peliculas.length * 0.75);
      return this.peliculas.slice(cantidad);
    }
  },
  methods: {
    sumarButaca(index) {
      this.peliculas[index].cantButacas++;
    },
    restarButaca(index) {
      if (this.peliculas[index].cantButacas > 0) {
        this.peliculas[index].cantButacas--;
      }
    },
    generarFuncion() {
      return Math.floor(100000 + Math.random() * 900000);
    },
    async confirmarReserva(index) {
      const pelicula = this.peliculas[index];
      if (pelicula.cantButacas === 0) return;

      const nuevaReserva = {
        usuarioId: this.usuario.id,
        funcion: this.generarFuncion(),
        tituloPelicula: pelicula.titulo,
        cantButacas: pelicula.cantButacas
      };

      try {
        const servicio = new ServicioReservas();
        await servicio.post(nuevaReserva);
        alert(`Reserva confirmada para "${pelicula.titulo}"`);
        this.peliculas[index].cantButacas = 0;
      } catch (error) {
        console.error("Error al guardar reserva:", error);
      }
    }
  }
};
</script>


<style scoped>
.peliculas-container
{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.peliculaItem
{
  width: 150px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.peliculaItem:hover
{
  transform: scale(1.05);
}

.imgAclamada
{
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.tituloPelicula
{
  margin-top: 0.5rem;
  font-weight: 600;
  color: #fff;
  font-size: 0.9rem;
}

.proximos-toggle
{
  margin: 2.5rem auto 0 auto;
  width: fit-content;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  background: #343a40;
  padding: 1rem 3rem;
  border-radius: 30px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  user-select: none;
  transition: background 0.2s, transform 0.2s;
  font-weight: 600;
  letter-spacing: 1px;
}

.proximos-toggle:hover
{
  background: #495057;
  transform: scale(1.06);
}

.toggle-label
{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.fade-enter-active, .fade-leave-active
{
  transition: opacity 0.4s;
}

.fade-enter-from, .fade-leave-to
{
  opacity: 0;
}

.mensaje-alerta
{
  display: inline-block;
  margin: 0 auto 1.5rem auto;
  padding: 0.7rem 2rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}

.mensaje-alerta-dorado {
  background: #23272b;
  color: #ffc107;
  border: 1px solid #ffc107;
  font-size: 0.85rem;
  padding: 0.5rem 1.2rem;
  border-radius: 12px;
  margin-top: 0.5rem;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(255, 193, 7, 0.15);
}

.mensaje-alerta-si
{
  background: #198754 !important;
  color: #fff !important;
  border: 2px solid #157347;
}

.mensaje-alerta
{
  display: block;
  width: fit-content;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.cartelera-titulo
{
  background: #23272b;
  color: #ffc107;
  border-left: 8px solid #ffc107;
  border-radius: 0 18px 18px 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  padding: 0.7rem 2.5rem;
  margin: 2rem auto 2.5rem auto;
  width: fit-content;
  font-size: 2.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}
.contador {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
}

.btn-contador {
  background-color: #343a40;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-contador:hover {
  background-color: #495057;
}

.contador-numero {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 0 0.5rem;
}

.btn-reservar {
  background-color: #ffc107;
  color: #212529;
  border: none;
  border-radius: 6px;
  padding: 0.3rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-reservar:hover {
  background-color: #e0a800;
}

</style>