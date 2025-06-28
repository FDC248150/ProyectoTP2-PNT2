// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para funciones.
class ServicioFunciones
{
    #url;

    constructor()
    {
        this.#url = 'http://localhost:3060/api/funciones/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:funciones } = await axios.get(this.#url);
            return funciones;
        }
        catch (error)
        {
            console.error("ERROR funciones GET", error);
        }
    }

    post = async (funcion) =>
    {
        try
        {
            const { data:funcionGuardada } = await axios.post(this.#url, funcion);
            return funcionGuardada;
        }
        catch (error)
        {
            console.error("ERROR funciones POST", error);
        }
    }

    put = async (id, funcion) =>
    {
        try
        {
            const { data:funcionActualizada } = await axios.put(`${this.#url}${id}`, funcion);
            return funcionActualizada;
        }
        catch (error)
        {
            console.error("ERROR funciones PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:funcionEliminada } = await axios.delete(`${this.#url}${id}`);
            return funcionEliminada;
        }
        catch (error)
        {
            console.error("ERROR funciones DELETE", error);
        }
    }
}

export default ServicioFunciones;