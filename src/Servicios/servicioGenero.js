// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para géneros.
class ServicioGeneros
{
    #url;

    constructor()
    {
        this.#url = 'http://localhost:3060/api/generos/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:generos } = await axios.get(this.#url);
            return generos;
        }
        catch (error)
        {
            console.error("ERROR generos GET", error);
        }
    }

    post = async (genero) =>
    {
        try
        {
            const { data:generoGuardado } = await axios.post(this.#url, genero);
            return generoGuardado;
        }
        catch (error)
        {
            console.error("ERROR generos POST", error);
        }
    }

    put = async (id, genero) =>
    {
        try
        {
            const { data:generoActualizado } = await axios.put(`${this.#url}${id}`, genero);
            return generoActualizado;
        }
        catch (error)
        {
            console.error("ERROR generos PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:generoEliminado } = await axios.delete(`${this.#url}${id}`);
            return generoEliminado;
        }
        catch (error)
        {
            console.error("ERROR generos DELETE", error);
        }
    }
}

export default ServicioGeneros;