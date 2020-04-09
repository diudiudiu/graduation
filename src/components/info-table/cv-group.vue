<template>
  <div class="cv-group">
    <!-- 基础信息 -->
    <div 
      v-if="type === 'basis'"
      >

    </div>
    <!-- 工作经历 -->
    <div 
      v-if="type === 'word'"
      >
      
    </div>
    <!-- 技能掌握 -->
    <div 
      v-if="type === 'skill'"
      >
      
    </div>
    <!-- 项目经历 -->
    <div 
      v-if="type === 'project'"
      >
      
    </div>
    <!-- 关于我 -->
    <div 
      v-if="type === 'aboutMe'"
      >
      
    </div>
    <!-- 获奖信息 -->
    <div 
      v-if="type === 'prize'"
      >
      
    </div>
    <!-- 发表论文 -->
    <div 
      v-if="type === 'article'"
      >
      
    </div>
    <!-- <div 
      v-if="type === 'project'"
      >
      
    </div> -->
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      info
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>