<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ content }}</h3>
  </div>
</template>

<script>
  export default {
    props: ['title', 'content']
  }
</script>

<style scoped>

</style>