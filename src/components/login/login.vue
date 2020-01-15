<template>
  <div id="login">
    <div 
      class="logo"
      :class="logoAnimated? 'logo-animated': ''"
      @animationend="logoAnimated = false"
      >
      <img src="@img/login-logo.jpg" alt="logo">
    </div>
    <div 
      class="tab"
      :class="loginStatus? 'login':'register'"
      >
      <div 
        v-if="loginTextStatus"
        class="tab-login">
        <form>
          <p>登录</p>
          <div class="input-group">
            <el-input
              v-model="username"
              placeholder="账号/用户名/邮箱"
              clearable>
            </el-input>
          </div>
          
          <div class="input-group">
            <el-input
              v-model="username"
              placeholder="密码"
              show-password>
            </el-input>
            
            <a class="link" href="">忘记密码?</a>
          </div>
          
          <div class="submit">
            登录
          </div>

          <div class="text-foot">
            还没有账号？点击
            <a 
              class="link" 
              @click="goRegister"
              >注册</a>
          </div>
        </form>
      </div>
      <div 
        class="tab-register"
        v-else
        >
        <form>
          <p>注册</p>
          <div class="input-group">
            <el-input
              v-model="username"
              placeholder="账号/用户名/邮箱"
              clearable>
            </el-input>
          </div>
          
          <div class="input-group">
            <el-input
              v-model="username"
              placeholder="密码"
              show-password>
            </el-input>
          </div>

          <div class="input-group">
            <el-input
              v-model="username"
              placeholder="确认密码"
              show-password>
            </el-input>
          </div>

          <div class="input-group verif">
            <el-input
              v-model="username"
              placeholder="验证码"
              >
            </el-input>
            <el-button 
              :disabled="sent"
              @click="sendEmail">
              {{ sent ? timer + 's后再次发送' : '发送验证码'}}
            </el-button>
          </div>

          <div class="submit">
            注册
          </div>

          <div class="text-foot">
            已经有账号？点击
            <a 
              class="link"
              @click="goRegister">登录</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      username: '',
      password: '',
      newUser: {
        username: '',
        password: '',
      },
      passwordAgain: '',
      loginStatus: true,
      logoAnimated: true,
      loginTextStatus: true,
      timer: 60,
      sent: false

    }
  },
  methods: {
    goRegister(){
      this.loginStatus = !this.loginStatus
      setTimeout( ()=> {
        this.loginTextStatus = !this.loginTextStatus
      },500)
      this.logoAnimated = true
    },
    sendEmail(){
      if(this.sent) {
        return
      }else{
        this.sent = true
        let interTime = setInterval(() => {
          if(this.timer>0){
            this.timer--
          }else{
            clearInterval(interTime)
            this.timer = 60
            this.sent=false
          }
        }, 1000);
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
$blue:rgba(68, 160, 179, .5);
$primary: #44a0b3;
$grey: rgba(68, 160, 179, .06);
$dark: rgba(68, 160, 179, .5);
$semidark: rgba(68, 160, 179, .5);
#login{
  // background: #fbfbfb;
  width: 3.1rem;
  height: 3.61rem;
  padding: .6rem .25rem .25rem .25rem;
  background: #fff;
  margin: 1rem auto;
  position: relative;
  box-shadow: 0 0 .25rem rgba(0, 0, 0, .1);
  border-radius: .03rem;
}
#login::after {
  content: ' ';
  box-shadow: 0 0 25px rgba(0, 0, 0, .1);
  transform: translate(0, -92.6%) scale(.88);
  border-radius: 3px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
}
.logo{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-50%);
  padding: .1rem;
  box-shadow: 0 .04rem .4rem rgba(0, 0, 0, .07);
  border-radius: 50%;
  width: .8rem;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fff;
  img{
    width: .8rem;
  }
}
.logo-animated{
  animation: logoAnimated 1s forwards ease-in-out;
}
a{
  color: $primary;
  text-decoration: none;
  border-bottom: 1px dashed $semidark;
  padding: .02rem 0;
  font-weight: 700;
  cursor: pointer;
}
.tab{
  transition: all 1s;
  transform-style: preserve-3d;
  perspective: 1000px;
  .tab-register{
    transform: rotateY(180deg);
    .input-group{
      margin-bottom: .1rem;
    }
    .verif{
      display: flex;
      /deep/ .el-input{
        display: flex;
      }
      /deep/ .el-input__inner{
        background-color: $grey;
        color: $dark;
        border: none;
        border-radius: 3px;
        padding: 24px 20px;
        outline: 0;
        width: 1.6rem;
      }
      /deep/ .el-button{
        width: 1.5rem;
      }
    }
    .text-foot{
      text-align: center;
      padding: .1rem;
      font-weight: 700;
      color: $semidark;
      margin-top: 0;
    }
  }
}
.login{

}
.register{
  transform: rotateY(-180deg);
}
  
.tab p{
  color: $blue;
  font-weight: 700;
  margin: .1rem 0 .2rem 0;
  text-align: center;
}
  .input-group{
    margin-bottom: .2rem;
    overflow: hidden;
    /deep/ .el-input__inner{
      background-color: $grey;
      color: $dark;
      border: none;
      border-radius: 3px;
      padding: 24px 20px;
      outline: 0;
    }
    input{
      background-color: $grey;
      color: $dark;
      border: none;
      border-radius: 3px;
      padding: 15px 20px;
      width: 2.6rem;
      outline: 0;
    }
    
    .link{
      float: right;
      margin-right: .07rem;
      cursor: pointer;
    }
  }
  .submit{
    border: none;
    color: #fff;
    padding: .15rem;
    border-radius: .03rem;
    background-color: $primary;
    box-shadow: 0 2px 7px -semidark;
    font-weight: 700;
    outline: 0;
    cursor: pointer;
    transition: all 1s;
  }
  
      
  .text-foot{
    text-align: center;
    padding: .1rem;
    font-weight: 700;
    margin-top: .2rem;
    color: $semidark;
  }

  @keyframes logoAnimated {
    0% {
      transform: translate(-50%,-50%);
    }
    50% {
      transform: translate(-50%,calc(-50% - 1.2rem));
    }
    100% {
      transform: translate(-50%,-50%);
    }
  }

</style>