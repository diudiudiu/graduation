<template>
  <div class="user-top">
    <!-- 个人中心的头部 -->
    <div class="img-head">
      <div class="avater">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="circleUrl" :src="circleUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="info">
        <h4 class="user-name">sdfghjkl</h4>
        <input class="sign" type="text" placeholder="编辑个性签名"/>
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
    handleAvatarSuccess(){

    },
    beforeAvatarUpload(){

    }
  }
}
</script>

<style lang="scss" scoped>
.user-top{
  border: .01px solid  #eee;
  background: url(../../assets/img/bga.jpeg) 100%  no-repeat;
  width: 12rem;
  height: 2rem;
  margin: 0 auto;
  position: relative;
  .img-head{
    display: flex;
    position: absolute;
    bottom: .25rem;
    margin-left: .3rem;
    .avater{
      width: 64px;
      height: 64px;
      border: 2px solid hsla(0,0%,100%,.4);
      border-radius: 52px;
      margin-right: .2rem;
    }
    .avatar{
      height: 64px;
      background: #fff;
      border-radius: 48px;
    }
    .info{
      .user-name{
        margin-top: .1rem;
        margin-bottom: .05rem;
        font-size: .18rem;
        text-align: left;
        color: #fff;
        font-weight: 700;
      }
      .sign{
        border: 0;
        background: none;
        font-size: 14px;
        color: #eee;
        width: 3rem;
        padding: .03rem .03rem;
        border-radius: .05rem;
      }
      .sign:hover{
        border: 1px solid #eee;
        background: #fff;
        color: #aaa;
      }
    }
  }
}

</style>