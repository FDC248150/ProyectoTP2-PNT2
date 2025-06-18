export default {
  name: 'Formularios',
  data() {
    return {
      formDataRegistro: this.getInicialDataRegistro(),
      formDirtyRegistro: this.getInicialDataRegistro(),
      formDataLogin: this.getInicialDataLogin(),
      formDirtyLogin: this.getInicialDataLogin(),
      
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
    getInicialDataLogin() {
      return {
        email: '',
        contrasenia: ''
      };
    },
    validarBotonRegistro() {
      return !this.errorNombre.ok || !this.errorApellido.ok || 
             !this.errorEmail.ok || !this.errorContrasenia.ok || 
             !this.errorFechaNacimiento.ok || !this.errorPais.ok;
    },
    validarBotonLogin() {
      return !this.errorEmailLogin.ok || !this.errorContraseniaLogin.ok;
    },
    enviarRegistro() {
      console.log('Enviando datos de registro:', { ...this.formDataRegistro });
      this.formDataRegistro = this.getInicialDataRegistro();
      this.formDirtyRegistro = this.getInicialDataRegistro();
    },
    enviarLogin() {
      console.log('Intentando iniciar sesión con:', { ...this.formDataLogin });
      // Aquí iría la validación en BD
      this.formDataLogin = this.getInicialDataLogin();
      this.formDirtyLogin = this.getInicialDataLogin();
    }
  },
  computed: {
    errorNombre() {
      let mensaje = '';
      if (!this.formDataRegistro.nombre) mensaje = 'Campo requerido';
      else if (/\d/.test(this.formDataRegistro.nombre)) mensaje = 'No debe contener números';
      else if (this.formDataRegistro.nombre.length > 40) mensaje = 'Máximo 40 caracteres';
      return { mostrar: mensaje !== '' && this.formDirtyRegistro.nombre, mensaje, ok: mensaje === '' };
    },
    errorApellido() {
      let mensaje = '';
      if (!this.formDataRegistro.apellido) mensaje = 'Campo requerido';
      else if (/\d/.test(this.formDataRegistro.apellido)) mensaje = 'No debe contener números';
      else if (this.formDataRegistro.apellido.length > 40) mensaje = 'Máximo 40 caracteres';
      return { mostrar: mensaje !== '' && this.formDirtyRegistro.apellido, mensaje, ok: mensaje === '' };
    },
    errorEmail() {
      let mensaje = '';
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formDataRegistro.email) mensaje = 'Campo requerido';
      else if (!regexEmail.test(this.formDataRegistro.email)) mensaje = 'Formato de email inválido';
      return { mostrar: mensaje !== '' && this.formDirtyRegistro.email, mensaje, ok: mensaje === '' };
    },
    errorContrasenia() {
      let mensaje = '';
      const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!this.formDataRegistro.contrasenia) mensaje = 'Campo requerido';
      else if (!regexContrasenia.test(this.formDataRegistro.contrasenia)) mensaje = 'Debe cumplir los requisitos de seguridad';
      return { mostrar: mensaje !== '' && this.formDirtyRegistro.contrasenia, mensaje, ok: mensaje === '' };
    },
   
    errorEmailLogin() {
      let mensaje = '';
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formDataLogin.email) mensaje = 'Campo requerido';
      else if (!regexEmail.test(this.formDataLogin.email)) mensaje = 'Formato de email inválido';
      return { mostrar: mensaje !== '' && this.formDirtyLogin.email, mensaje, ok: mensaje === '' };
    },
    errorContraseniaLogin() {
      let mensaje = '';
      if (!this.formDataLogin.contrasenia) mensaje = 'Campo requerido';
      return { mostrar: mensaje !== '' && this.formDirtyLogin.contrasenia, mensaje, ok: mensaje === '' };
    }
  }
};