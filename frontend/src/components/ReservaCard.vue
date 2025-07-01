<template>
    <div class="card h-100 shadow-sm reserva-card">
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-title text-warning">{{ reserva.tituloPelicula }}</h5>
                <p class="card-text mb-0">
                    <strong>Función:</strong> {{ reserva.funcion }}<br />
                    <strong>Butacas:</strong> {{ reserva.cantidadButacas }}
                </p>
            </div>
            <div class="d-flex flex-column align-items-end ms-3">
                <button
                    class="btn btn-warning btn-editar mb-2"
                    @click="$emit('editar', reserva)"
                    >
                    <i class="bi bi-pencil"></i>
                    Editar
                </button>
                <button
                    class="btn btn-danger btn-borrar"
                    @click="$emit('borrar', reserva.id)"
                    >
                    <i class="bi bi-trash"></i>
                    Borrar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    name: 'ReservaCard',
    props:
    {
        reserva:
        {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
</style>