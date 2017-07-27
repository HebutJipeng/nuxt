<template>
  <div class="container">
    <p>hi from {{ name }}</p>
    <nuxt-link to="/">home page</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head: {
    title: 'About page',
    mata: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  },
  transition: 'bounce'
}
</script>
