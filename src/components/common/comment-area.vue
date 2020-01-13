
<template>
  <div class="comment-area">
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    >
    </el-input>
    <el-button 
      type="success"
      :disabled="!textarea"
      @click="comment(textarea,replyName)"
      >
      确认
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  props: {
    replyName: {
      type: String,
      default: ''
    }
  },
  mounted(){
  },
  methods: {
    comment(textarea,replyName) {
      this.$emit('comment', textarea, replyName)
    }
  }
}
</script>

<style lang="scss" scoped>


</style>