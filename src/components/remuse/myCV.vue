<template>
  <div class="remuse">
    <!-- 基本信息 -->
    <div class="basics">
      <div class="basics-photo">
        <div>
          <!-- 如果没有,就用用户头像 -->
          <img :src="user.img" />
        </div>
      </div>
      <!-- 电话联系方式 -->
      <div class="basics-info">
        <ul>
          <li>电话：<span class="info-right">{{ user.phone }}</span></li>
          <li>微信：<span class="info-right">{{ user.weChat }}</span></li>
          <li>邮箱：<span class="info-right">{{ user.email }}</span></li>
          <li>Q Q：<span class="info-right">{{ user.qq }}</span></li>
          <li>github：<span class="info-right">{{ user.github }}</span></li>
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
        img: '@img/login-logo.jpg.png'
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>