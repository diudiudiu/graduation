<template>
  <div class="article" id="">
    <div 
      class="article-body"
      v-html="article">
    </div>
    <ul class="card">
      <li>
        <bookmark>

        </bookmark>
      </li>
    </ul>
  </div>
</template>

<script>
import marked from "marked"
import bookmark from './bookmark'

export default {
  components:{
    bookmark
  },
  data() {
    return {
      article: ''
    }
  },
  props: {
    art:{
      type: String,
      default: 
      '##### `Promise.all(iterable)`'
      
     
    }
  },
  mounted(){
    this.article = marked(this.art)
    // console.log( ' ##### `Promise.all(iterable)`')
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.article{
  background: url(../../../assets/img/pattern.png);
  display: flex;
  .article-body{
    width: 70%;
  }
  .card{
    width: 30%;
  }
}

</style>