// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para peliculas.
class ServicioPeliculas
{
    #url;

    constructor()
    {
        this.#url = 'http://localhost:3060/api/peliculas/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:peliculas } = await axios.get(this.#url);
            return peliculas;
        }
        catch (error)
        {
            console.error("ERROR peliculas GET", error);
        }
    }

    post = async (pelicula) =>
    {
        try
        {
            const { data:peliculaGuardada } = await axios.post(this.#url, pelicula);
            return peliculaGuardada;
        }
        catch (error)
        {
            console.error("ERROR peliculas POST", error);
        }
    }

    put = async (id, pelicula) =>
    {
        try
        {
            const { data:peliculaActualizada } = await axios.put(`${this.#url}${id}`, pelicula);
            return peliculaActualizada;
        }
        catch (error)
        {
            console.error("ERROR peliculas PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:peliculaEliminada } = await axios.delete(`${this.#url}${id}`);
            return peliculaEliminada;
        }
        catch (error)
        {
            console.error("ERROR peliculas DELETE", error);
        }
    }
}

export default ServicioPeliculas;