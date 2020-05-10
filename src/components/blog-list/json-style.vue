<template>
  <div class="json-list">
    <div class="list-hearder"></div>
    <div class="main-list">
      <div class="json-header">
        // Author：diudiudiu
        <br />// string can be clicked.
      </div>
      <div class="json">
        const blogList = [
        <div v-for="(item,index) in list" :key="index" class="list-item">
          <span class="brackets">{</span>
          <p class="item-title">
            title: "
            <router-link 
              :to="{path:'/article', query:{id: item.id} }" 
              >{{item.title}}<span class="text-line"></span></router-link>"
          </p>
          <p class="item-introduce">
            introduce: "
            <router-link 
              :to="{path:'/article', query:{id: item.id} }" 
              >{{item.introduce}}<span class="text-line"></span></router-link>
            "
          </p>
          <span class="brackets-back">
            }
            <span v-if="index !== list.length-1">,</span>
          </span>
        </div>]
      </div>
      <div v-if="notes.length!==0" class="array">
        const notes = [
        <p v-for="(item,index) in notes" :key="index">
          '{{ item.title }}'<span v-if="index !== list.length-1">,</span>
        </p>]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jsonStyle',
  data() {
    return {
      user: {
        img: '@img/login-logo.jpg.png'
      },
      list: [
        {
          title: '文章名字1',
          introduce: '文文章名字11简章名字11简章名字11简章名字11简介...'
        },
        {
          title: '文章文章名字1文章名字1',
          introduce: '简章名字11简章名字11简章名字11简介...'
        },
        {
          title: '文章文章名字1文章名字1',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字文章名字11章文章名字1',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文章名字1文文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简11简章名字11简介...'
        },
        {
          title: '文文章名字1文章名字1章',
          introduce: '简介11简章名字11简介...'
        }
      ],
      notes: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.json-list{
  background:url(../../assets/img/bgb.jpeg)  no-repeat center center;
   background-size:cover;
   background-attachment:fixed;
   background-color:#CCCCCC;
}
.main-list {
  color: #ffffff;
  text-align: left;
  margin-left: 0.3rem;
}
.json {
  margin-bottom: 0.3rem;
}
.json-header {
  line-height: 0.3rem;
  margin-bottom: 0.2rem;
}
.list-item {
  text-indent: 0.33rem;
}
.item-title,
.item-introduce {
  text-indent: 0.6rem;
  a {
    position: relative;
    text-decoration: none;
    color: gray;
  }
  .text-line {
    display: inline-block;
    position: absolute;
    top: 0.2rem;
    left: 0;
    border: 0rem solid #fff;
    height: 0;
    width: 0;
    transition: width 0.3s ease-in;
  }
  a:hover .text-line {
    // width: calc(100 - .08rem);
    width: 100%;
    border: 0.005rem solid #fff;
  }
}
.brackets-back {
  margin-left: 0.33rem;
}
</style>