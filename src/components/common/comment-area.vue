
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
      :disabled="textarea"
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
    
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>


</style>