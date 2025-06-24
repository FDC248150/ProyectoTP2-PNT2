<template>
  <section>
    <button class="btn btn-primary my-3" @click="obtener">Ver mis reservas</button>
<!--Posts de funciones, continuar segun logica-->
    <div v-if="posts.length">
      <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <h1>Funciones</h1>
            <tr>
              <th>Número de cliente:</th>
              <th>N° de función:</th>
              <th>Cantidad de butacas reservadas:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.usuarioId }}</td>
              <td>{{ post.funcionId }}</td>
              <td>{{ post.cantButacas }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { obtenerPosts } from '../servicios/posts'

export default {
  name: 'estructuraHttp',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async obtener() {
      const posts = await obtenerPosts()
      //console.log(posts)
      this.posts = posts
    }
  }
}
</script>
