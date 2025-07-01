import { Pelicula } from "../models/index.js";

// Seed para poblar la tabla Pelicula con algunas películas iniciales
const peliculaSeed = async () => {
  try {
    const count = await Pelicula.count();
    if (count === 0) {
      await Pelicula.bulkCreate([
        {
          titulo: "Matrix",
          portada: "https://image.tmdb.org/t/p/w500/matrix.jpg",
          generoId: 5, // Ciencia Ficción
          descripcion: "Un hacker descubre la verdad sobre su realidad.",
          duracion: 136,
          precio: 1500
        },
        {
          titulo: "El Padrino",
          portada: "https://image.tmdb.org/t/p/w500/godfather.jpg",
          generoId: 3, // Drama
          descripcion: "La historia de una familia mafiosa.",
          duracion: 175,
          precio: 1800
        },
        {
          titulo: "Scary Movie",
          portada: "https://image.tmdb.org/t/p/w500/scarymovie.jpg",
          generoId: 2, // Comedia
          descripcion: "Parodia de películas de terror.",
          duracion: 88,
          precio: 1200
        }
      ]);
      console.log("Películas creadas correctamente");
    } else {
      console.log("Películas ya existen, no se crean duplicados");
    }
  } catch (error) {
    console.log("Error al crear películas:", error.message);
  }
};

export default peliculaSeed;