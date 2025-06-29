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
          <div v-if="reservaEditando === reserva.id" class="card h-100 shadow-sm reserva-card">
            <div class="card-body">
              <div class="mb-2">
                <label class="form-label mb-1">Película:</label>
                <input v-model="editForm.tituloPelicula" class="form-control form-control-sm" />
              </div>
              <div class="mb-2">
                <label class="form-label mb-1">Función:</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  v-model.number="editForm.funcion"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="mb-2">
                <label class="form-label mb-1">Butacas:</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  v-model.number="editForm.cantidadButacas"
                  class="form-control form-control-sm"
                />
              </div>
              <div class="d-flex gap-2 justify-content-end">
                <button class="btn btn-success btn-sm" @click="guardarEdicion(reserva.id)">Guardar</button>
                <button class="btn btn-secondary btn-sm" @click="cancelarEdicion">Cancelar</button>
              </div>
            </div>
          </div>
          <ReservaCard
            v-else
            :reserva="reserva"
            @editar="editarReserva"
            @borrar="borrarReserva"
          />
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
import ReservaCard from './ReservaCard.vue';

export default
{
  name: 'Reservas',
  components: { ReservaCard },
  data()
  {
    return {
      reservas: [],
      cancelado: false,
      reservaEditando: null,
      editForm:
      {
        funcion: '',
        cantidadButacas: 1
      }
    };
  },
  methods:
  {
    editarReserva(reserva)
    {
      this.reservaEditando = reserva.id;
      this.editForm =
      {
        tituloPelicula: reserva.tituloPelicula,
        funcion: reserva.funcion,
        cantidadButacas: reserva.cantidadButacas,
      };
    },

    cancelarEdicion()
    {
      this.reservaEditando = null;
    },

    async guardarEdicion(id)
    {
      // Validación de función.
      if (
        this.editForm.funcion < 1 ||
        this.editForm.funcion > 50 ||
        isNaN(this.editForm.funcion)
      )
      {
        alert("El número de función debe estar entre 1 y 50.");
        return;
      }

      // Validación de butacas.

      if (
        this.editForm.cantidadButacas < 1 ||
        this.editForm.cantidadButacas > 8 ||
        isNaN(this.editForm.cantidadButacas)
      ) {
        alert("La cantidad de butacas debe estar entre 1 y 8.");
        return;
      }

      // Proceso de guardado.
      try
      {
        const servicio = new ServicioReservas();
        const reservaActualizada =
        {
          tituloPelicula: this.editForm.tituloPelicula,
          funcion: this.editForm.funcion,
          cantidadButacas: this.editForm.cantidadButacas
        };

        await servicio.put(id, reservaActualizada);
        // Actualiza en el array local
        const idx = this.reservas.findIndex(r => r.id === id);

        if (idx !== -1)
        {
          this.reservas[idx].tituloPelicula = reservaActualizada.tituloPelicula;
          this.reservas[idx].funcion = reservaActualizada.funcion;
          this.reservas[idx].cantidadButacas = reservaActualizada.cantidadButacas;
        }

        alert("¡Reserva actualizada con éxito!");
        this.reservaEditando = null;
      }
      catch (error)
      {
        alert("Ocurrió un error al guardar los cambios.");
      }
    },

    async borrarReserva(id)
    {
      if (confirm("¿Estás seguro de que deseas borrar esta reserva?"))
      {
        try
        {
          const servicio = new ServicioReservas();
          await servicio.delete(id);
          this.reservas = this.reservas.filter(r => r.id !== id);
        }
        catch (error)
        {
          console.error("Error al borrar reserva:", error);
          alert("Ocurrió un error al intentar borrar la reserva.");
        }
      }
    }
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

.btn-editar
{
  width: 110px;
  font-weight: 600;
}

.btn-borrar
{
  width: 110px;
  font-weight: 600;
}
</style>