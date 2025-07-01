// Importacion de axios para realizar peticiones HTTP.
import axios from "axios";

// Clase que maneja las operaciones CRUD para usuarios.
class ServicioUsuarios
{
    #url;

    constructor()
    {
        this.#url = 'https://686021f7c55df67558a03914.mockapi.io/usuario/';
    }

    getAll = async () =>
    {
        try
        {
            const { data:usuarios } = await axios.get(this.#url);
            return usuarios;
        }
        catch (error)
        {
            console.error("ERROR usuarios GET", error);
        }
    }

    post = async (usuario) =>
    {
        try
        {
            const { data:usuarioGuardado } = await axios.post(this.#url, usuario);
            return usuarioGuardado;
        }
        catch (error)
        {
            console.error("ERROR usuarios POST", error);
        }
    }

    put = async (id, usuario) =>
    {
        try
        {
            const { data:usuarioActualizado } = await axios.put(`${this.#url}/${id}`, usuario);
            return usuarioActualizado;
        }
        catch (error)
        {
            console.error("ERROR usuarios PUT", error);
        }
    }

    delete = async (id) =>
    {
        try
        {
            const { data:usuarioEliminado } = await axios.delete(`${this.#url}/${id}`);
            return usuarioEliminado;
        }
        catch (error)
        {
            console.error("ERROR usuarios DELETE", error);
        }
    }
}

export default ServicioUsuarios;