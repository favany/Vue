<template>
  <div>
    <show-message title="哈哈哈" content="我是哈哈哈"></show-message>
    <show-message title="啦啦啦" content="我是哈哈哈"></show-message>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue'

  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: "嘻嘻嘻",
        content: "呵呵呵"
      }
    },
  }
</script>

<style scoped>

</style>