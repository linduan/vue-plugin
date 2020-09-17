<template>
  <div class="item">
    <label>电话：</label>
    <div class="content">
      <input type="tel" v-model="tel" placeholder="请输入电话"/>
      <span class="error" v-if="invalid">请输入正确的电话号码</span>
    </div>
    <button @click="submit">提交</button>
    <vue-msg ref="msg"/>
    <vue-btn class="btn" />
  </div>
</template>

<script>
const PHONE_REG = /^[1][3,4,5,7,8,9][0-9]{9}$/
export default {
  name: 'HelloWorld',
  data() {
    return {
      tel: '',
      invalid: false,
      info: ''
    }
  },
  methods: {
    submit () {
      if (!PHONE_REG.test(this.tel)) {
        this.invalid = true
        this.info = '请输入正确的手机号码!'
      } else {
        this.invalid = false
        this.info = '手机号码正确!'
      }
      this.$nextTick(() => {
        this.$refs.msg.show(this.info)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.item
  text-align left
  label
    width 80px
    text-align right
    margin-right 10px
    display inline-block
  .content
    display inline-block
    position relative
  input
    width 200px
  .error
    color red
    left 0
    bottom -20px
    font-size 14px
    position absolute
  button
    margin-left 20px
  .btn
    margin 20px
</style>
