<template>
  <section>
    <div class="container card">
      <header class="card-header">
        <h1>
          {{ usuario ? `¡Bienvenido ${usuario.nombre}!` : titulo }}
        </h1>
      </header>

      <p class="intro-text">
        {{ intro }}
      </p>

      <p class="info-text">
        {{ info }}
      </p>

      <!-- Si el usuario NO está logueado // Ruteo de componente por código. -->
      <button
        v-if="!usuarioLogueado"
        @click="redirigir('/FormularioLogin')"
        class="btn mt-5"
      >
        <i class="bi bi-ticket-perforated"></i>
        ¡Reserva tu lugar ahora!
      </button>

      <!-- Si el usuario SÍ está logueado -->
      <RouterLink
        v-else
        to="/Peliculas"
        class="btn mt-5"
      >
        <i class="bi bi-ticket-perforated"></i>
        ¡Elegí tu película!
      </RouterLink>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from '@/Stores/authStore';

export default
{
  name: "Inicio",
  data()
  {
    return {
      titulo: "Bienvenidos a ORTFlix",
      intro:
        "ORTFlix es tu plataforma para disfrutar del cine online de forma exclusiva. Aquí podrás reservar tu lugar en la sala virtual y se te asignará una función vía streaming, de esta manera podrás vivir la experiencia cinematográfica desde donde estés.",
      info:
        "¿Cómo funciona? Simplemente elige la película, la cantidad de lugares a reservar, haz la reserva y ¡prepárate para disfrutar!. Nuestra tecnología te asignará una sala virtual personalizada para que puedas ver la función en vivo, con la comodidad y seguridad de tu hogar."
    };
  },
  methods:
  {
    redirigir(ruta)
    {
      this.$router.push(ruta);
    }
  },
  computed:
  {
    authStore()
    {
      return useAuthStore();
    },

    usuarioLogueado()
    {
      return this.authStore.usuarioLogueado;
    },

    usuario()
    {
      return this.authStore.usuario;
    }
  }
};
</script>

<style scoped>
section
{
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(to right top, rgba(36, 36, 36, 0.5), rgba(36, 36, 36, 0.5)),
    url('/FondoRegistro.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  padding: 2rem;
}

*
{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container
{
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.card
{
  background-color: rgba(30, 30, 30, 0.85);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  padding: 3rem 4rem;
  color: #f5f5f5;
  text-align: left;
  line-height: 1.6;
}

.card-header h1
{
  font-weight: 900;
  color: #ffc107;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-align: center;
}

.intro-text
{
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ddd;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.info-text
{
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #ccc;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.btn
{
  display: inline-block;
  font-weight: 700;
  color: #212529;
  background-color: #ffc107;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: auto;
  max-width: none;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.6);
  display: block;
  max-width: 320px;
}

.btn:hover
{
  background-color: #e0a800;
  color: #fff;
  box-shadow: 0 6px 12px rgba(224, 168, 0, 0.8);
}

.mt-5
{
  margin-top: 3rem;
}

/* Responsive para móviles */
@media (max-width: 767px)
{
  .card
  {
    padding: 2rem 1.5rem;
    text-align: center;
  }

  .intro-text,
  .info-text
  {
    font-size: 1.2rem;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .card-header h1
  {
    font-size: 2.2rem;
  }

  .btn
  {
    font-size: 1.1rem;
    padding: 0.85rem 1.5rem;
    max-width: 100%;
  }
}
</style>