<template>
  <article>
    <h1>{{title}}</h1>
    <p>{{body}}</p>
    <nuxt-link :to="'/'">Back</nuxt-link>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({params, error}){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${+params.id}`)
    return data
  }
}

</script>