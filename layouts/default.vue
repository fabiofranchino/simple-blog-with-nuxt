<template>
  <main>
    <Sidebar />
    <nuxt />
  </main>
</template>

<script>
import Sidebar from '~/components/sidebar.vue'

export default {
  components:{
    Sidebar
  }
}

</script>