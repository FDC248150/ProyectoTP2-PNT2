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
   - Crea una base de datos llamada `cine_db` con el comando `create database cine_db`
   - Actualizá las credenciales en `config/config.js`
5. Inicia el servidor backend:
   ```
   node start app.js
   ```
6. El backend se ejecutará por defecto en [http://localhost:3060](http://localhost:3060).

---

### Uso del API RESTful

El backend expone endpoints RESTful para gestionar los recursos principales.

**IMPORTANTE:**  
Todos los endpoints deben ser llamados anteponiendo el puerto del servidor backend.  
Por ejemplo, si el backend corre en el puerto 3060, la URL completa será:

```
http://localhost:3060/api/usuarios/registro
```

La lista completa y detallada de endpoints está disponible en [ENDPOINTS.md](./ENDPOINTS.md).

> **Nota:** Algunos endpoints requieren autenticación mediante JWT.  
> El token se debe enviar en el header `Authorization: Bearer <token>`.

### ¿Cómo testear los endpoints?

- Puedes usar **Postman**, **Thunder Client** (VSCode) o **cURL** para probar cada endpoint.
- Primero, registra un usuario y haz login para obtener el token JWT.
- Usa el token en los endpoints que lo requieran (ver [ENDPOINTS.md](https://www.notion.so/ENDPOINTS.md) para saber cuáles).

---

### Notas

- Al iniciar el backend, las tablas se crean y se poblan automáticamente con datos de ejemplo (seeds).
