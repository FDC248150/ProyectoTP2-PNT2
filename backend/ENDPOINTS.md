# Endpoints de la API RESTful

A continuación se detallan todos los endpoints disponibles, agrupados por recurso/componente.  
**IMPORTANTE:**  
- Los endpoints marcados con 🔒 requieren autenticación mediante JWT (token en el header `Authorization: Bearer <token>`).
- Los endpoints marcados con 🛡️ requieren además permisos de administrador.

---

## Usuarios

- `POST   /api/usuarios/registro`  
  Registrar un nuevo usuario.  
  **Sin autorización**

- `POST   /api/usuarios/login`  
  Iniciar sesión de usuario.  
  **Sin autorización**

- `GET    /api/usuarios`  
  Listar todos los usuarios.  
  **🔒🛡️ Requiere token y rol admin**

- `GET    /api/usuarios/:id`  
  Obtener datos de un usuario por ID.  
  **🔒🛡️ Requiere token y rol admin**

- `POST   /api/usuarios`  
  Registrar un nuevo usuario.  
  **Sin autorización**

- `PUT    /api/usuarios/:id`  
  Actualizar datos de un usuario.  
  **🔒🛡️ Requiere token y rol admin**

- `DELETE /api/usuarios/:id`  
  Eliminar un usuario.  
  **🔒🛡️ Requiere token y rol admin**

---

## Películas

- `GET    /api/peliculas`  
  Listar todas las películas.  
  **Sin autorización**

- `GET    /api/peliculas/:id`  
  Obtener detalles de una película.  
  **Sin autorización**

- `POST   /api/peliculas`  
  Crear una nueva película.  
  **🔒🛡️ Requiere token y rol admin**

- `PUT    /api/peliculas/:id`  
  Actualizar una película.  
  **🔒🛡️ Requiere token y rol admin**

- `DELETE /api/peliculas/:id`  
  Eliminar una película.  
  **🔒🛡️ Requiere token y rol admin**

---

## Funciones

- `GET    /api/funciones`  
  Listar todas las funciones.  
  **Sin autorización**

- `GET    /api/funciones/:id`  
  Obtener detalles de una función.  
  **Sin autorización**

- `POST   /api/funciones`  
  Crear una nueva función.  
  **🔒🛡️ Requiere token y rol admin**

- `PUT    /api/funciones/:id`  
  Actualizar una función.  
  **🔒🛡️ Requiere token y rol admin**

- `DELETE /api/funciones/:id`  
  Eliminar una función.  
  **🔒🛡️ Requiere token y rol admin**

---

## Salas

- `GET    /api/salas`  
  Listar todas las salas.  
  **Sin autorización**

- `GET    /api/salas/:id`  
  Obtener detalles de una sala.  
  **Sin autorización**

- `POST   /api/salas`  
  Crear una nueva sala.  
  **🔒🛡️ Requiere token y rol admin**

- `PUT    /api/salas/:id`  
  Actualizar una sala.  
  **🔒🛡️ Requiere token y rol admin**

- `DELETE /api/salas/:id`  
  Eliminar una sala.  
  **🔒🛡️ Requiere token y rol admin**

---

## Reservas

- `GET    /api/reservas`  
  Listar todas las reservas.  
  **🔒🛡️ Requiere token y rol admin**

- `GET    /api/reservas/:id`  
  Obtener detalles de una reserva.  
  **🔒 Requiere token**

- `POST   /api/reservas`  
  Crear una nueva reserva.  
  **🔒 Requiere token y rol user**

- `PUT    /api/reservas/:id`  
  Actualizar una reserva.  
  **🔒 Requiere token y rol user**

- `DELETE /api/reservas/:id`  
  Eliminar una reserva.  
  **🔒 Requiere token y rol user**

---

## Géneros

- `GET    /api/generos`  
  Listar todos los géneros.  
  **Sin autorización**

- `GET    /api/generos/:id`  
  Obtener detalles de un género.  
  **Sin autorización**

- `POST   /api/generos`  
  Crear un nuevo género.  
  **🔒🛡️ Requiere token y rol admin**

- `PUT    /api/generos/:id`  
  Actualizar un género.  
  **🔒🛡️ Requiere token y rol admin**

- `DELETE /api/generos/:id`  
  Eliminar un género.  
  **🔒🛡️ Requiere token y rol admin**

---

> **Leyenda:**  
> 🔒 Requiere autenticación (token JWT)  
> 🛡️ Requiere permisos de administrador