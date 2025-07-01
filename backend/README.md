## Backend: Instalación y uso del API RESTful

El backend de este proyecto está desarrollado en Node.js con Express, Sequelize y MySQL. Expone una API RESTful para gestionar usuarios, películas, funciones, salas, reservas y géneros.

### Requisitos previos

- Node.js y npm instalados.
- MySQL instalado y corriendo.

### Instrucciones para ejecutar el servidor backend

1. Clona el repositorio:
   ```
   git clone https://github.com/FDC248150/ProyectoTP2-PNT2
   ```
2. Ingresa al directorio del proyecto:
   ```
   cd ProyectoTP2-PNT2/backend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Configura la base de datos MySQL:
   - Crea una base de datos llamada `cine_db`
   - Actualizá las credenciales en `config/config.js`
5. Inicia el servidor backend:
   ```
   npm run dev
   ```
   o
   ```
   node server.js
   ```
6. El backend se ejecutará por defecto en [http://localhost:3060](http://localhost:3060).

---

### Uso del API RESTful

El backend expone endpoints RESTful para gestionar los recursos principales. 

La lista completa y detallada de endpoints está disponible en [ENDPOINTS.md](./ENDPOINTS.md).

> **Nota:** Algunos endpoints requieren autenticación mediante JWT.  
> El token se debe enviar en el header `Authorization: Bearer <token>`.

---

### Notas

- Al iniciar el backend, las tablas se crean y se poblan automáticamente con datos de ejemplo (seeds).