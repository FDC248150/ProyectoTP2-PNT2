<template>
  <div class="app-fondo-oscuro">
    <div class="container mt-4">
      <h2 class="text-warning mb-4">Mis Reservas</h2>

      <div v-if="reservas.length" class="row g-4">
        <div
          v-for="reserva in reservas"
          :key="reserva.id"
          class="col-md-6 col-lg-4"
        >
          <div class="card h-100 shadow-sm reserva-card">
            <div class="card-body">
              <h5 class="card-title text-warning">{{ reserva.tituloPelicula }}</h5>
              <p class="card-text">
                <strong>Función:</strong> {{ reserva.funcion }}<br />
                <strong>Butacas:</strong> {{ reserva.cantidadButacas }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="alert alert-secondary text-center mt-5">
        No hay reservas registradas.
      </div>
    </div>
  </div>
</template>

<script>
import ServicioReservas from '../Servicios/servicioReserva';
import { useAuthStore } from '../Stores/authStore';

export default
{
  name: 'Reservas',
  data()
  {
    return {
      reservas: [],
      cancelado: false
    };
  },

  // Life Cycle Hooks.
  async mounted()
  {
    const servicio = new ServicioReservas();
    const authStore = useAuthStore();

    if (authStore.usuarioLogueado && authStore.usuario)
    {
      try
      {
        const todasLasReservas = await servicio.getAll();
        // Filtra solo las reservas del usuario logueado.
        if (!this.cancelado)
        {
          this.reservas = todasLasReservas.filter(r => r.usuarioId === authStore.usuario.id);
        }
      }
      catch (error)
      {
        console.error("Error al cargar reservas:", error);
      }
    }
  },
  
  unmounted()
  {
    this.cancelado = true;
  }
};
</script>

<style scoped>
.app-fondo-oscuro
{
  background: #181a1b;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 2rem;
}

.reserva-card
{
  background: #23272b;
  color: #fff;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.reserva-card:hover
{
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.3);
}

.card-title
{
  font-size: 1.2rem;
  font-weight: 600;
}

.card-text
{
  font-size: 0.95rem;
}
</style>