<template>
  <div class="article" id="">
    <div class="art-top">
      <div 
        class="article-body"
        v-html="article">
      </div>
      <div class="card">
        <bookmark></bookmark>
      </div>
    </div>
    <comment></comment>
  </div>
</template>

<script>
import marked from "marked"
import bookmark from './bookmark'
import comment from '../../comment/comment'
// import ajax from '../../../libs/service-request'
import qs from 'qs'


export default {
  components:{
    bookmark,
    comment
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
    // let data = await ajax.getArticle({
    //   name:'front'
    // })
    // console.error(data)
    // this.article = marked(data)

    this.axios.post('http://47.104.87.40:9091/', qs.stringify({name: "js"})
        ,{
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }
    ).then((response)=> {
        this.article = marked(response.data)
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
// @import './markdownStyle/style4.css';

.article{
  margin: 0 auto;
  width: 13rem;
  .art-top{
    display: flex;
    width: 13rem;
    background: url(../../../assets/img/pattern.png);
  }
  .article-body{
    width: 8rem;;
    text-align: left;
    overflow: hidden;
    padding: .3rem;
  }
  .card{
    width: 3.5rem;
  }
}

</style>