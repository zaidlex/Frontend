<template class="templateNav">
  <cabecera/>
  <nav>
    <router-link to="/">Pastelería</router-link> |
    <router-link to="/ordenar">Pedir pastel</router-link> |
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
  background-color: #c29b61;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #01870B;
  font-size: 25px;
}

.title {
    font-weight:800;
    font-family: 'Times New Roman', serif;    
}

.sabores {
    background-color: rgb(238,208,157,0.6);
    padding: 7px;
    border-radius: 30px;
    margin-left: 10%;
    margin-right: 10%;
}

.disenos {
    background-color: rgb(248,211,137,0.6);
    margin-bottom: 30px;
    margin-left: 10%;
    margin-right: 10%;
    padding: 7px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 30px;
}
</style>
