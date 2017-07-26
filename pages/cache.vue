<template>
  <div>
    <p>timestamp: {{ date }}</p>
    <nuxt-link to="/">back to homepage</nuxt-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'date',
    serverCacheKey () {
      return Math.floor(Date.now() / 1000)
    },
    data () {
      return {
        date: Date.now()
      }
    }
  }
</script>
