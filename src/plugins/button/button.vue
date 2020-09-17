<template>
  <button @click="click">
    vue button
  </button>
</template>

<script>
export default {
  name: 'vue-btn',
  props: {
    type: String
  },
  methods: {
    click () {
      console.log('click!')
    }
  }
}
</script>

<style lang="stylus" scoped>
  button
    padding 5px
    color #ffffff
    background green
    border 1px solid transparent
</style>