<template>
  <div class="home">
    <HomePasteleria/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePasteleria from '@/components/HomePasteleria.vue'

export default {
  name: 'HomeView',
  components: {
    HomePasteleria,
  }
}
</script>