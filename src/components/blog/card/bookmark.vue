<template>
  <div class="bookmark">
    <img class="tag" src="@img/paperclip.png" alt="">
    <h5 class="title">{{title}}</h5>
    <div
      v-if="article.type === 'article'||1"
      class="article"
      >
      <h6>{{article.title}}</h6>
      <span>{{article.time}}</span>
      <p>{{article.text}}</p>
      <el-link 
        class="link"
        :href="article.link" type="primary">阅读更多</el-link>
    </div>
    <ul
      v-else>
      <li
        v-for="(item,index) in list"
        :key="index"
        >
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  props: {
    title: {
      type: String,
      default: '友情链接'
    },
    art:{
      type: Object,
      default: ()=>{}
    }
  },
  mounted(){
    this.article = this.art
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.bookmark{
  margin: 40px auto;
  width: 5rem;
  height: 3rem;
  border: 1px solid #eeeeee;
  position: relative;
  border-radius: 7px;
  padding: 0 15px 5px 13px;
  color: #7A7A68;
  .tag{
    position: absolute;
    left: -35px;
    top: -41px;
  }
  .title{
    padding: 14px 15px 14px 15px;
    color: #74706E;
    font: 190% 'Yanone Kaffeesatz';
    margin-left: 10px;
  }
  .link{
    text-align: left;
    float: left;
  }
}

</style>