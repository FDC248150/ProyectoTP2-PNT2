// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para salas.
class ServicioSalas
{
    #url;

    constructor()
    {
        this.#url = 'http://localhost:3060/api/salas/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:salas } = await axios.get(this.#url);
            return salas;
        }
        catch (error)
        {
            console.error("ERROR salas GET", error);
        }
    }

    post = async (sala) =>
    {
        try
        {
            const { data:salaGuardada } = await axios.post(this.#url, sala);
            return salaGuardada;
        }
        catch (error)
        {
            console.error("ERROR salas POST", error);
        }
    }

    put = async (id, sala) =>
    {
        try
        {
            const { data:salaActualizada } = await axios.put(`${this.#url}${id}`, sala);
            return salaActualizada;
        }
        catch (error)
        {
            console.error("ERROR salas PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:salaEliminada } = await axios.delete(`${this.#url}${id}`);
            return salaEliminada;
        }
        catch (error)
        {
            console.error("ERROR salas DELETE", error);
        }
    }
}

export default ServicioSalas;