<template>
  <div class="home">
    <administrador/>
  </div>
</template>

<script>
// @ is an alias to /src
import administrador from '@/components/administrador.vue'

export default {
  name: 'administrar',
  components: {
    administrador,
  }
}
</script>
