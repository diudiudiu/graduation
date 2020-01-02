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
      <h3 class="me-title">工作/实习经历</h3>
      <div class="intern-list">
        <el-tabs tab-position="left" :stretch="true" >
          <el-tab-pane
            v-for="(item,index) in user.wordList"
            :key="index">
            <div class="tab-left" slot="label">
              <span>{{ item.company }}</span>
              <br>
              <span><i class="el-icon-date"></i>{{ item.startTime }}~{{ item.endTime }}</span>
            </div>
            <h4>职位：{{ item.position }}</h4>
            <p>负责or参与的项目：{{ item.project }}</p>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 项目经验 -->
    <div class="project">
      <h3  class="me-title">项目</h3>
      <p>{{user.projectInfo}}</p>
      <div class="project-list">
        <ul>
          <li
            v-for="(item,index) in user.projectList"
            :key="index"
            >
            <div class="project-number">
              <span>{{ index | number }}</span>
            </div>
            <div class="project-info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.project }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 技能掌握 & 获奖信息  -->
    <div class="other">
      <div class="other-list">
        <div class="skill">
          <h3 class="me-title-small">技能掌握</h3>
          <ul>
            <li 
              v-for="(item,index) in user.skillList"
              :key="index"
              >
              <el-progress
                :text-inside="true"
                :stroke-width="26"
                :percentage="item.grade.percentage"
                :color="item.grade.color"
                >
                {{ item.name }}
              </el-progress>
            </li>
          </ul>
        </div>
        <div class="prize">
          <h3 class="me-title-small">获奖信息</h3>
          <ul>
            <li
              :v-for="(item,index) in prizeList"
              :key="index"
              >
              
              </li>
          </ul>
        </div>
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
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
        wordList: [
          {
            company: '北京世纪好未来教育科技有限公司',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
            startTime: '2019-01-01',
            endTime: '2019-01-01',
            position: '前端实习生'
          },
          {
            company: '北京世纪好未来教育科技有限公司',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
            startTime: '2019-01-01',
            endTime: '2019-01-01',
            position: '前端实习生'
          },
          {
            company: '北京世纪好未来教育科技有限公司',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
            startTime: '2019-01-01',
            endTime: '2019-01-01',
            position: '前端实习生'
          },
          {
            company: '北京世纪好未来教育科技有限公司',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
            startTime: '2019-01-01',
            endTime: '2019-01-01',
            position: '前端实习生'
          }
        ],
        projectInfo: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`,
        projectList: [
          {
            title: 'asd',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`
          },
          {
            title: 'asd',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`
          },
          {
            title: 'asd',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`
          },
          {
            title: 'asd',
            project: `关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于
                  我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我关于我`
          }
        ],
        skillList: [
          {
            name: 'HTML',
            grade: 1
          },
          {
            name: 'CSS',
            grade: 2
          },
          {
            name: 'JS',
            grade: 3
          },
          {
            name: 'VUE',
            grade: 4
          }
        ]
      },
      colors: [
        {color: '#e6a23c', percentage: 25},
        {color: '#5cb87a', percentage: 50},
        {color: '#1989fa', percentage: 75},
        {color: '#6f7ad3', percentage: 100}
      ]
    }
  },
  mounted(){
    this.user.skillList.forEach( item => {
      if(item.grade === 1){
        item.grade = this.colors[0]
      } else  if(item.grade === 2){
        item.grade = this.colors[1]
      } else  if(item.grade === 3){
        item.grade = this.colors[2]
      }else  if(item.grade === 4){
        item.grade = this.colors[3]
      }
    })
  },
  methods: {},
  filters: {
    number: function (value) {
      value++
      if (value < 10){
        return '0'+ value
      } else{
        return ''+value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basics{
  padding: .3rem 0;
  background: url('../../img/pic2.jpg') no-repeat center;
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid #E4E4E4;
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
.me-title{
  font-size: .4rem;
  text-align: center;
  margin-bottom: .35rem;
  color: #10A7AF;
  font-weight: bold;
}

.me-title::before,.me-title::after{
  border: .04rem double #c2c2c2;
  width: 1.2rem;
  display: inline-block;
  content: "";
  margin: 0.09rem .1rem;
}

.me-title-small{
  font-size: .3rem;
  text-align: center;
  margin-bottom: .35rem;
  color: #10A7AF;
  font-weight: bold;
}
.me-title-small::before,.me-title-small::after{
  border: .04rem double #c2c2c2;
  width: .6rem;
  display: inline-block;
  content: "";
  margin: 0.09rem .1rem;
}
.about-me{
  color: #464646;
  line-height: 2.2em;
  text-align: center;
  font-size: .14rem;
  margin: 0 auto .5rem;
  width: 75%;
  padding-top: .3rem;
}
.intern{
  background: #f7f7f7;
  padding-top: .3rem;
  border-bottom: 5px solid #E4E4E4;
}
.intern-list{
  line-height: 2.2em;
  text-align: center;
  font-size: .14rem;
  margin: 0 auto;
  padding-bottom: .5rem;
  width: 90%;
}
/deep/ .el-tabs__item{
  height: .7rem;
}
.tab-left{
  line-height: 2em;
}
/deep/ .el-tab-pane{
  text-align: left;
  padding: .2rem;
}
.project{
  padding-top: .3rem;
}
.project>p{
  width: 75%;
  margin: 0 auto;
  padding-bottom: .5rem;
}
.project-list{
  width: 75%;
  margin: 0 auto;
  padding-bottom: .5rem;
  li{
    display: flex;
    border-bottom: 1px solid #b1b1b1;
    .project-number{
      width: 30%;
      border-right: 1px solid #b1b1b1;
      position: relative;
      span{
        font-size: 1rem;
        position: absolute;
        top: 50%;
        right: .2rem;
        transform: translate(0,-50%);
        font-style: italic;
      }
    }
    .project-info{
      width: 70%;
      padding: .1rem .2rem;
      h4{
        text-align: left;
        font-size: .22rem;
        color: #10A7AF;
        margin-bottom: .05rem;
      }
      p{
        color: #464646;
        line-height: 2.2em;
        font-size: .14rem;
      }
    }
  }
  li:nth-child(even) {
    flex-direction: row-reverse;
    .project-number{
      border-left: 1px solid #b1b1b1;
      border-right: none;
      span{
        left: .2rem;
        right: unset;
      }
    }
    .project-info{
      h4{
        text-align: right;
      }
    }
  }
  li:last-of-type {
    border-bottom: none;
  }
}
.other-list{
  width: 75%;
  margin: .1rem auto;
  display: flex;
  .skill{
    width: 50%;
    li{
      margin-bottom: .2rem;
    }
  }
  .prize{
    width: 50%;
  }
}
</style>