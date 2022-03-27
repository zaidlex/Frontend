<template class="templateNav">
  <cabecera/>
  <nav>
    <router-link to="/">Pastelería</router-link> |
    <router-link to="/administrador">Administrador</router-link>
  </nav>
  <router-view/>
  <piePag/>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
import piePag from '@/components/piePag.vue'

export default {
  components: {
    cabecera,
    piePag,
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

nav {
  padding: 10px;
  margin: 0%;
  background-color: blue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
