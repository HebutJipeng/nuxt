<template>
  <div class="container">
    <h1 class="red">hello {{ name }}</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="{ name: 'users-id', params: { id: post.id }}">{{ post.title }}</nuxt-link>
      </li>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'

  export default {
    asyncData ({ req, params }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return {
          name: 'peng',
          posts: res.data.slice(0, 5)
        }
      })
    },
    fetch () {
      // hi
    },
    head () {
      // head
      return {
        meta: [
          { charset: 'utf-8' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://cdn.bootcss.com/weui/1.1.2/style/weui.css' }
        ]
      }
    },
    layout (context) {
      // layout
    }
  }
</script>

<style type="text/css">
  .red {
    color: red;
  }
</style>
