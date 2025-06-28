// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para reservas.
class ServicioReservas
{
    #url;

    constructor()
    {
        this.#url = 'http://localhost:3060/api/reservas/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:reservas } = await axios.get(this.#url);
            return reservas;
        }
        catch (error)
        {
            console.error("ERROR reservas GET", error);
        }
    }

    post = async (reserva) =>
    {
        try
        {
            const { data:reservaGuardada } = await axios.post(this.#url, reserva);
            return reservaGuardada;
        }
        catch (error)
        {
            console.error("ERROR reservas POST", error);
        }
    }

    put = async (id, reserva) =>
    {
        try
        {
            const { data:reservaActualizada } = await axios.put(`${this.#url}${id}`, reserva);
            return reservaActualizada;
        }
        catch (error)
        {
            console.error("ERROR reservas PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:reservaEliminada } = await axios.delete(`${this.#url}${id}`);
            return reservaEliminada;
        }
        catch (error)
        {
            console.error("ERROR reservas DELETE", error);
        }
    }
}

export default ServicioReservas;