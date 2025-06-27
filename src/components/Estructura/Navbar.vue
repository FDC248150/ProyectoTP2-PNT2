<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/FormularioLogin">Inicia Sesión/Regístrate</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Peliculas">Películas</RouterLink>
          </li>
        </ul>
        <!-- Espacio para usuario (placeholder) -->
        <div class="navbar-user d-flex align-items-center">
          <!-- Acá iría el nombre del usuario, cuando esté logueado. -->
          <i class="bi bi-person-circle"></i>
          <span class="ms-2">Invitado</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default
{
  name: 'Navbar',
}
</script>

<style scoped>
.navbar
{
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.navbar-brand
{
  font-weight: bold;
  color: #ffc107 !important;
  font-size: 1.3rem;
  letter-spacing: 1px;
}

.nav-link
{
  color: #fff3cd !important;
  transition: color 0.2s;
}

.nav-link.router-link-exact-active,
.nav-link:hover
{
  color: #ffc107 !important;
  font-weight: bold;
}

.navbar-user
{
  color: #ffc107;
  font-size: 1.1rem;
  margin-right: 10px;
}

.navbar-user i
{
  font-size: 1.5rem;
}
</style>