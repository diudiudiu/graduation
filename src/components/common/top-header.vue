<template>
  <div class="header">
    <div class="logo">
      <img src="@img/login-logo.jpg" alt="">
    </div>
    <div class="info">
      <div
        v-if="isOnline">
          <el-dropdown>
            <div class="avatar">
              <el-avatar size="large" :src="circleUrl"></el-avatar>
              <span class="name">asdfadgfd</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的关注</el-dropdown-item>
              <el-dropdown-item>我的收藏</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>我的博客</el-dropdown-item>
              <el-dropdown-item>博客管理</el-dropdown-item>
              <el-dropdown-item>我的简历</el-dropdown-item>
              <el-dropdown-item>简历管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
      </div>
      <div
        v-else
        class="nologin">
        <span><a href="#">注册/登录</a></span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components:{
    // bookmark
  },
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      isOnline: true
    }
  },
  props: {
    user: {
      type: Object,
      default: ()=>{}
    }
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: .5rem;
  // display: flex;
  position: sticky;
  background: #ffffff;
  // justify-content: space-around;
  .logo{
    width: .5rem;
    height: .5rem;
    margin-left: 1rem;
    float: left;
    img{
      width: .5rem;
      height: .5rem;
    }
  }
  .info{
    float: right;
    margin-right: 1rem;
    .avatar{
      height: .5rem;
      display: flex;
      /deep/ .el-avatar{
        margin-top: .05rem;
      }
      .name{
        display: inline-block;
        line-height: .5rem;
        margin-left: .15rem
      }
    }
    .nologin{
      span{
        display: inline-block;
        line-height: .5rem;
        margin-left: .15rem;
        font-weight: 700;
        a{
          color: rgba(68, 160, 179, 0.5);
          text-decoration: none;
        }
      }
    }
  }
}


</style>