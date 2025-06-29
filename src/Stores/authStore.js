import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth',
{
    state: () => (
    {
        usuarioLogueado: false,
        usuario: null, // Se podría guardar información del usuario logueado.
    }),
    actions:
    {
        login(usuario)
        {
            this.usuarioLogueado = true;
            this.usuario = usuario;
        },
        logout()
        {
            this.usuarioLogueado = false;
            this.usuario = null;
        }
    }
});