export default {
  name: 'Formularios',
  data() {
    return {
      formDataRegistro: this.getInicialDataRegistro(),
      formDirtyRegistro: this.getInicialDirtyRegistro(),
      formDataLogin: this.getInicialDataLogin(),
      formDirtyLogin: this.getInicialDirtyLogin(),
    };
  },
  methods: {
    
    getInicialDataRegistro() {
      return {
        nombre: '',
        apellido: '',
        email: '',
        contrasenia: '',
      };
    },
    
    getInicialDirtyRegistro() {
      return {
        nombre: false,
        apellido: false,
        email: false,
        contrasenia: false,
      };
    },
   
    getInicialDataLogin() {
      return {
        email: '',
        contrasenia: '',
      };
    },
   
    getInicialDirtyLogin() {
      return {
        email: false,
        contrasenia: false,
      };
    },
    validarBotonRegistro() {
      
      return (
        !this.errorNombre.ok ||
        !this.errorApellido.ok ||
        !this.errorEmail.ok ||
        !this.errorContrasenia.ok
        
      );
    },
    validarBotonLogin() {
      return !this.errorEmailLogin.ok || !this.errorContraseniaLogin.ok;
    },
    enviarRegistro() {
      console.log('Enviando datos de registro:', { ...this.formDataRegistro });
      this.formDataRegistro = this.getInicialDataRegistro();
      this.formDirtyRegistro = this.getInicialDirtyRegistro();
    },
    enviarLogin() {
      console.log('Intentando iniciar sesión con:', { ...this.formDataLogin });
      this.formDataLogin = this.getInicialDataLogin();
      this.formDirtyLogin = this.getInicialDirtyLogin();
    },
  },
  computed: {
    errorNombre() {
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
    errorApellido() {
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
    errorEmail() {
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
    errorContrasenia() {
      let mensaje = '';
      const valor = this.formDataRegistro.contrasenia;
      const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!valor) mensaje = 'Campo requerido';
      else if (!regexContrasenia.test(valor))
        mensaje = 'Debe cumplir los requisitos de seguridad';
      return {
        mostrar: mensaje !== '' && this.formDirtyRegistro.contrasenia,
        mensaje,
        ok: mensaje === '',
      };
    },
    errorEmailLogin() {
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
    errorContraseniaLogin() {
      let mensaje = '';
      const valor = this.formDataLogin.contrasenia;
      if (!valor) mensaje = 'Campo requerido';
      return {
        mostrar: mensaje !== '' && this.formDirtyLogin.contrasenia,
        mensaje,
        ok: mensaje === '',
      };
    },
  },
};
