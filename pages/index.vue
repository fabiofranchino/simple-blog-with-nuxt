<template>
  <article>
    <h1>Index</h1>
    <div class="grid">
      <ul>
        <li v-for="article in articles" class="item">
          <nuxt-link :to="'/article/' + article.id">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </article>
  
</template>


<script>
import axios from 'axios'

export default {
  async asyncData () {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {articles:data}
  }
}

</script>


<style scoped>
  
</style>