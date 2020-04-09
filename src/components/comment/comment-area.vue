
<template>
  <div class="comment-area">
    <el-input
      type="textarea"
      :placeholder="placeholder"
      v-model="textarea"
      maxlength="30"
      show-word-limit
      :class="focus? 'focus':''"
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
    },
    placeholder: {
      type: String,
      default: ''
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
  },
  methods: {
    comment(textarea,replyName) {
      this.$emit('comment', textarea, 'replyName')
    }
  }
}
</script>

<style lang="scss" scoped>
.focus{
  /deep/ .el-textarea__inner{
    height: 1rem;
  }
}

</style>