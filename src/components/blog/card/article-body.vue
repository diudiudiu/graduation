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
// import ajax from '../../../libs/service-request'
import qs from 'qs'


export default {
  components:{
    // bookmark
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
  background: url(../../../assets/img/pattern.png);
  display: flex;
  .article-body{
    width: 70%;
    text-align: left;
  }
  .card{
    width: 30%;
  }
}

</style>