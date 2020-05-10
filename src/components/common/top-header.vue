<template>
  <div class="header">
    <div class="logo">
      <img src="@img/login-logo.jpg" alt="">
      <span>Tuse</span>
    </div>
    <div class="nav">

    </div>
    <div class="info">
      <div
        v-if="isOnline">
          <el-dropdown>
            <div class="avatar">
              <el-avatar size="large" :src="circleUrl"></el-avatar>
              <span class="name">测试专用</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link :to="{path:'/follow', query:{type: 'follow'}}" tag="span">我的关注</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/follow', query:{type: 'collect'}}" tag="span">我的收藏</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/infocenter'}" tag="span">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/bloglist', query:{style: style}}" tag="span">我的博客</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/blogcontrol'}" tag="span">博客管理</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/remuse', query:{style: cvStyle}}" tag="span">我的简历</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/remusecontrol'}" tag="span">简历管理</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path:'/'}" tag="span">退出</router-link>
              </el-dropdown-item>
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
      circleUrl: `https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=3183274783,1271682948&os=1499526599,3719473866&simid=4246974712,581405718&pn=0&rn=1&di=25740&ln=3796&fr=&fmq=1589044172771_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121171107_zMZcy.thumb.700_0.jp
      eg&rpstart=0&rpnum=0&adpicid=0&force=undefined`,
      isOnline: true,
      style: 'photo',
      cvStyle: 'color'
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
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99999;
  background: #ffffff;
  // justify-content: space-around;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  .logo{
    // width: .5rem;
    height: .5rem;
    margin-left: 1rem;
    display: flex;
    img{
      width: .5rem;
      height: .5rem;
    }
    span{
      color: #1cb7dc8c;
      font-size: 40px;
      font-style:italic;
      font-weight: bold;
    }
  }
  .info{
    // float: right;
    margin-left: 9.8rem;
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