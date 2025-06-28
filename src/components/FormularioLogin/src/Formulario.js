// Importaciones a MockAPI.
import ServicioUsuarios from '@/Servicios/servicioUsuario';
import { useAuthStore } from '@/Stores/authStore';
import { useRouter } from 'vue-router';

const servicioUsuarios = new ServicioUsuarios();

export default
{
  name: 'Formularios',
  data()
  {
    return {
      formDataRegistro: this.getInicialDataRegistro(),
      formDirtyRegistro: this.getInicialDirtyRegistro(),
      formDataLogin: this.getInicialDataLogin(),
      formDirtyLogin: this.getInicialDirtyLogin(),
      mensajeErrorRegistro: '',
      mensajeErrorLogin: '',
    };
  },
  methods:
  {
    getInicialDataRegistro()
    {
      return {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
      };
    },
    
    getInicialDirtyRegistro()
    {
      return {
        nombre: false,
        apellido: false,
        email: false,
        password: false,
      };
    },

    getInicialDataLogin()
    {
      return {
        email: '',
        password: '',
      };
    },

    getInicialDirtyLogin()
    {
      return {
        email: false,
        password: false,
      };
    },

    validarBotonRegistro()
    {
      return (
        !this.errorNombre.ok ||
        !this.errorApellido.ok ||
        !this.errorEmail.ok ||
        !this.errorPassword.ok
      );
    },

    validarBotonLogin()
    {
      return !this.errorEmailLogin.ok || !this.errorPasswordLogin.ok;
    },

    async enviarRegistro()
    {
      this.mensajeErrorRegistro = '';

      try
      {
        const usuarios = await servicioUsuarios.getAll();
        const existe = usuarios.some(u => u.email === this.formDataRegistro.email);

        if (existe)
        {
          this.mensajeErrorRegistro = 'El email ya está registrado.';
          this.formDataRegistro = this.getInicialDataRegistro();
          this.formDirtyRegistro = this.getInicialDirtyRegistro();
          return;
        }

        const nuevoUsuario =
        {
          nombre: this.formDataRegistro.nombre,
          apellido: this.formDataRegistro.apellido,
          email: this.formDataRegistro.email,
          password: this.formDataRegistro.password,
        };

        const usuarioGuardado = await servicioUsuarios.post(nuevoUsuario);

        const authStore = useAuthStore();
        authStore.login(usuarioGuardado);

        this.mensajeErrorRegistro = '';

        alert('¡Registro exitoso!');
        this.$router.push('/Inicio');
        return;
      }
      catch (error)
      {
        this.mensajeErrorRegistro = 'Error al intentar registrar usuario.';
        this.formDataRegistro = this.getInicialDataRegistro();
        this.formDirtyRegistro = this.getInicialDirtyRegistro();
      }
    },

    async enviarLogin()
    {
      this.mensajeErrorLogin = '';
      try
      {
        const usuarios = await servicioUsuarios.getAll();
        const usuario = usuarios.find(u => u.email === this.formDataLogin.email && u.password === this.formDataLogin.password);

        if (usuario)
        {
          const authStore = useAuthStore();
          authStore.login(usuario); // Guarda el usuario en el estado global.
          this.mensajeErrorLogin = ''; // Limpia el mensaje antes de redirigir
          alert('¡Login exitoso!');
          this.$router.push('/Inicio');
        }
        else
        {
          this.mensajeErrorLogin = 'Email o contraseña incorrectos';
        }
      }
      catch (error)
      {
        this.mensajeErrorLogin = 'Error al intentar iniciar sesión.';
        this.formDataLogin = this.getInicialDataLogin();
        this.formDirtyLogin = this.getInicialDirtyLogin();
      }
    }
  },
  computed:
  {
    errorNombre()
    {
      let mensaje = '';
      const valor = this.formDataRegistro.nombre;

      if (!valor) mensaje = 'Campo requerido';
      else if (/\d/.test(valor)) mensaje = 'No debe contener números';
      else if (valor.length > 40) mensaje = 'Máximo 40 caracteres';

      return {
        mostrar: mensaje !== '' && this.formDirtyRegistro.nombre,
        mensaje,
        ok: mensaje === '',
      };
    },

    errorApellido()
    {
      let mensaje = '';
      const valor = this.formDataRegistro.apellido;

      if (!valor) mensaje = 'Campo requerido';
      else if (/\d/.test(valor)) mensaje = 'No debe contener números';
      else if (valor.length > 40) mensaje = 'Máximo 40 caracteres';

      return {
        mostrar: mensaje !== '' && this.formDirtyRegistro.apellido,
        mensaje,
        ok: mensaje === '',
      };
    },

    errorEmail()
    {
      let mensaje = '';
      const valor = this.formDataRegistro.email;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!valor) mensaje = 'Campo requerido';
      else if (!regexEmail.test(valor)) mensaje = 'Formato de email inválido';

      return {
        mostrar: mensaje !== '' && this.formDirtyRegistro.email,
        mensaje,
        ok: mensaje === '',
      };
    },

    errorPassword()
    {
      let mensaje = '';
      const valor = this.formDataRegistro.password;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

      if (!valor) mensaje = 'Campo requerido';
      else if (!regexPassword.test(valor))
        mensaje = 'Debe cumplir los requisitos de seguridad';

      return {
        mostrar: mensaje !== '' && this.formDirtyRegistro.password,
        mensaje,
        ok: mensaje === '',
      };
    },

    errorEmailLogin()
    {
      let mensaje = '';
      const valor = this.formDataLogin.email;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!valor) mensaje = 'Campo requerido';
      else if (!regexEmail.test(valor)) mensaje = 'Formato de email inválido';

      return {
        mostrar: mensaje !== '' && this.formDirtyLogin.email,
        mensaje,
        ok: mensaje === '',
      };
    },

    errorPasswordLogin()
    {
      let mensaje = '';
      const valor = this.formDataLogin.password

      if (!valor) mensaje = 'Campo requerido';

      return {
        mostrar: mensaje !== '' && this.formDirtyLogin.password,
        mensaje,
        ok: mensaje === '',
      };
    },
  },
};