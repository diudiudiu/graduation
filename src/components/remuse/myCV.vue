<template>
  <div class="remuse">
    <!-- 基本信息 -->
    <div class="basics">
      <div class="basics-photo">
        <div class="photo">
          <!-- 如果没有,就用用户头像 -->
          <img src="../../assets/logo.png" />
        </div>
        <div class="vitea">
          <div class="name">{{ user.realName}}</div>
          <div class="position">{{ user.position}}</div>
        </div>
      </div>
      <!-- 电话联系方式 -->
      <div class="basics-info">
        <ul>
          <li><span class="info-left">电话：</span><span class="info-right">{{ user.phone }}</span></li>
          <li><span class="info-left">微信：</span><span class="info-right">{{ user.weChat }}</span></li>
          <li><span class="info-left">邮箱：</span><span class="info-right">{{ user.email }}</span></li>
          <li><span class="info-left">Q Q：</span><span class="info-right">{{ user.qq }}</span></li>
          <li><span class="info-left">github：</span><span class="info-right">{{ user.github }}</span></li>
        </ul>
      </div>
    </div>
    <!-- 自我介绍 -->
    <div class="about-me">
      <h3 class="me-title">关于我</h3>
      <p>{{ user.aboutMe }}</p>
    </div>
    <!-- 实习/工作经历 -->
    <div class="intern">
      <h3>工作/实习经历</h3>
      <div class="intern-list">
        <el-tabs :tab-position="left" style="height: 200px;">
          <el-tab-pane
            v-for="(item,index) in user.wordList"
            :key="index"
            :label="item.company">
            {{ item.project }}
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 项目经验 -->
    <div class="project">
      <h3>项目</h3>
      <div class="project-list">
        <ul>
          <li>
            <div class="project-number"></div>
            <div class="project-info"></div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 技能掌握 & 获奖信息  -->
    <div class="other">
      <div class="skill">
        <ul>
          <li>

          </li>
        </ul>
      </div>
      <div class="prize">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        img: '../../img/login-logo.jpg',
        realName: '真实姓',
        position: 'web前端开发',
        phone: '17614010722',
        qq: '171738749',
        weChat: 'mjx171738749',
        email: 'mjx171738749@foxmail.com',
        github: 'https://github.com/diudiudiu',
        aboutMe: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.basics{
  padding: .3rem 0;
  background: url('../../img/pic2.jpg') no-repeat center;
  display: flex;
  justify-content: space-between;
}
.basics-photo{
  display: flex;
  margin-left: .4rem;
}
.photo{
  width: 1.4rem;
  height: 1.4rem;
  background: #fff;
  padding: .12rem;
  border: 2px solid #10A7AF;
  img{
    width: 1.4rem;
  }
}
.vitea{
  margin-left: .15rem;
  .name{
    font-size: .32rem;
    color: #10A7AF;
    margin-top: .3rem;
    text-align: left;
  }
  .position{
    margin-top: .15rem;
    font-size: .16rem;
    color: #fff;
    text-align: left;
  }
}
.basics-info{
  margin-right: 1rem;
  margin-top: .1rem;
  text-align: left;
  li{
    font-size: .16rem;
    line-height: .3rem;
  }
  .info-right{
    color: #ffffff;
  }
  .info-left{
    color: #10A7AF;
    display: inline-block;
    width: 1rem;
    font-weight: bold;
  }
}
</style>