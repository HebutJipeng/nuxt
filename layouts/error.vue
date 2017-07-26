<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>		
    <h1 v-else>应用发生错误</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['error']
  }
</script>

<style type="text/css">
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>
