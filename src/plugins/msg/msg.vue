<template>
  <div class="msg" :class="{ active: isShow }">{{msg}}</div>
</template>

<script>
export default {
  name: 'vue-msg',
  props: {
    type: {
      type: String,
      default: 'plain'
    }
  },
  data() {
    return {
      msg: '',
      isShow: false
    }
  },
  methods: {
    show (msg) {
      this.msg = msg
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.msg
  position fixed
  top 0
  left 0
  width 100%
  height 0
  background #ccc
  z-index 9999
  opacity 0
  &.active
    opacity 1
    height 80px
    transition all .8
</style>
