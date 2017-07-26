<template>
  <div class="dark">
    <nuxt/>
  </div>
</template>

<style type="text/css">
body {
  overflow: hidden;
}
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: black;
  color: #fff;
  padding: 10px;
}
.dark a {
  color: #fff;
}
</style>
