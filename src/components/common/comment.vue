<template>
  <div class="comment">
    <div class="comment-body">
      <ul class="comment-list">
        <li 
          class="comment-item"
          v-for="(item,index) in commentlist"
          :key="index"
          >
          <commentInner></commentInner>
        </li>
      </ul>
    </div>
    <commentArea></commentArea> 
  </div>
</template>

<script>
import commentArea from './comment-area'
import commentInner from './comment-inner'

export default {
  components: {
    commentArea,
    commentInner
  },
  data() {
    return {
      commentlist:[
        {
          a: '',
          b: ''
        }
      ]
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