<template>
  <div class="user">{{ params }}</div>
</template>

<script type="text/javascript">
export default {
  asyncData ({ req, params }) {
    return {
      params: params.id
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
