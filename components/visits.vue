<template>
  <ul class="time">
    <li v-for="visit in visits"><i>{{ visit.date | hours }}</i></li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    computed: {
      visits () {
        return this.$store.state.visits.slice().reverse()
      }
    },
    filters: {
      hours (date) {
        return date.split('T')[1].split('.')[0]
      }
    }
  }
</script>

<style type="text/css">
ul.time {
  position: fixed;
  top: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  list-style-type: none;
}	

ul.time li {
  padding: 20px 0;
}

ul.time li i {
  color: gray;
  font-syle: normal;
}
</style>
