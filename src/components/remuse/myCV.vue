<template>
  <div class="remuse">
    <!-- 基本信息 -->
    <div class="basics">
      <div class="basics-photo">
        <div class="photo">
          <!-- 如果没有,就用用户头像 -->
          <img src="../../assets/img/4.jpg" />
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
              <p>{{ item.name }}</p>
              <div class="progress">
                <el-progress
                  :stroke-width="26"
                  :percentage="item.grade.percentage"
                  :color="item.grade.color"
                  :show-text="false"
                  >
                </el-progress>
                <span>{{ item.grade.text }}</span>
              </div>
              
            </li>
          </ul>
        </div>
        <div class="prize">
          <h3 class="me-title-small">获奖信息</h3>
          <ul>
            <li
              v-for="(item,index) in user.prizeList"
              :key="index"
              >
              <span><i class="el-icon-medal-1"></i>{{ item.name }}</span>
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
        realName: '梅嘉祥',
        position: 'web前端开发',
        phone: '17614010722',
        qq: '171738749',
        weChat: 'mjx171738749',
        email: 'mjx171738749@foxmail.com',
        github: 'https://github.com/diudiudiu',
        aboutMe: `我是一位饱受自我介绍折磨的人。在此之前，面对一群陌生人，我也跟不少人一样不知
        道怎么做自我介绍，不少时候特别想找一个洞转进去，好在现在我已经掌握了这样一项技能，所以现在拿
        进行一些互动环节，希望大家能够积极参与其中，通过切身的体验真正的掌握本次分享的核心内容。如果大家在本次
        分享活动中有什么不明白的地方可以随时打断我进行反馈交流，也希望大家将本次活动学到的技能分享给更多的人，让我们不再饱受
        不知道如何做自我介绍的折磨。最后趁着这么一个宝大声点
        贵的机会也希望大家能够积极地向我们学术之路投递稿件，让我们共同打造一个专属于我们法律人的学术交流平台。`,
        wordList: [
          {
            company: '北京教育科技有限公司',
            project: `HTTP1.1 与 HTTP2 HTTP1.1 的缺陷 由于队头堵塞的高延迟 无状态特性阻碍交互 明文传输不安全 
            不支持服务端推送 什么是对头阻塞? 对头阻塞是指当顺序发送请求序列中的一个请求因为某种原因被阻塞时，后面排
            队的所有请求也一并被阻塞，进而可能会导致客户端迟迟收不到数据。 SPDY协议 是由谷歌推出的改进版本的HTTP 它的特
            点： 多路复用（解决队头阻塞） 允许在一个连接上无限制并发流(就是不限制请求个数）。因为请求在一个通道上TCP效
            率更高（一个连接数）。更少的网络连接发出更密集的包 头部压缩（解决巨大的HTTP头部） 使用专
            门的 HPACK 算法，每次请求和响应都只发送差异头部，`,
            startTime: '2019-01-01',
            endTime: '2019-02-04',
            position: '前端实习生'
          },
          {
            company: '杭州科技有限公司',
            project: `一般可以达到50%~90%的高压缩率 请求优先级（先获取重要数据） 虽然无限的并发流解决了队头阻塞的问题，但如果带宽受限，客户端
            可能会因防止阻塞通道而阻止请求。在网络被非关键资源阻塞时，高优先级的请求会被优先处理。 服务端推送
            （填补空缺） 可以让服务端主动地将资源发送给客户端，当然客户端也有权利选择是否接受。 举个例子，当客户端请求根目录的
            时候，服务端会将style.css和example.png一同发送给客户端。 提高安全性 `,
            startTime: '2019-02-04',
            endTime: '2019-06-05',
            position: '架构'
          },
          {
            company: 'ucloud',
            project: `使用 HTTPS 进行加密传输 HTTP2 HTTP2 基于 SPDY，专注于性能，最大的目标是在网站和用户之间
            只用一个连接。 新增特性： 二进制分帧 是 HTTP2 性能增强的核心 首先，HTTP2 没有改变 HTTP 的语义，只是在
            应用层使用二进制分帧的方式进行传输。因此引入了新的通信单位：帧、消息、流。 **分帧有什么好处？ ** 服务器单位
            时间内接受的请求数变多，这样提高了并发数量，最重要的是为多路复用提供了底层支持。 多路复用 解决串行的文件
            传输和连接数过多 一个域名对应一个连接，一个流代表了一个完整的请求-响应的过程。帧是最小的数据单位，每个帧会标
            识出该帧属于哪个流，流也就是由多个帧组成的数据流。那么，多路复用就是在一个 TCP 连接里可以存在多个数据流，HTTP1.`,
            startTime: '2019-07-012',
            endTime: '2019-09-012',
            position: '前端开发工程师'
          },
          {
            company: '上海科技有限公司',
            project: `查看容器IP // 查看具体某一个容器的IP，需要已知容器ID docker inspect --fo
            rmat '{{ .NetworkSettings.IPAddress }}' <container-ID> // 查看所有容器的IP do
            cker inspect --format='{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAd
            dress}}{{end}}' $(docker ps -aq) 默认docker0的段是：172.17.0.1/16作者注： 我的文章都很片面，
            是我按着自己的理解记录的，很可能有错误喔
            ~ 请谨慎参考！请谨慎参考！请谨慎参考！ 也非常非常希望您在发现错误了之后联系我, qq
            :281127500 注：以下快捷键都是在命令模式下操作的，而非编辑模式。 1.跳到行首 ^ (shift+6) 2.跳到行尾 $`,
            startTime: '2019-03-04',
            endTime: '2019-05-06',
            position: '后端开发工程师'
          }
        ],
        projectInfo: `每一组全匹配里面的 分组匹配 的每一组匹配(略微有点绕口哈~你品你细品)都只匹配一次。这个不是
        嵌套分组，感觉可能没那么明显，那么下面来一组嵌套分组的例子 可以看到，正则里面有三个分组（那个(?i:)结构
        是不区分大小写的意思，不要误认为是分组），其`,
        projectList: [
          {
            title: '理解 regexp',
            project: ``
          },
          {
            title: '完整性约束',
            project: `类似于安卓中的彩蛋flappybird弹跳游戏，画风更为简洁，当然难度也会小一点了。小心避开叶子与木杆，让小鸟可以顺畅的通过。 希望这个游戏可以让你获得轻松。
我的职责
完全自己开发，已经在百度手机助手，豌豆荚上线
可在百度应用商店搜索木与叶`
          },
          {
            title: '执行顺序',
            project: `由于公司服务器访问过高，将原有LAMP置换成LNMP，通过Xcache加速器替换ZendGardLoader
                数据库前端加入多台memcache缓存服务器，缓解mysql压力，多台web节点间利用rsync实现数据同步，并采用了SVN代码管理系统，进行web代码管理`
          },
          {
            title: '构建容器',
            project: `如果在没有第三次握手的前提下由于公司服务器访问过高，将原有LAMP置换成LNMP，通过Xcache加速器替换ZendGardLoader
                数据库前端加入多如果在没有第三次握手的前提下台memcache缓存服务器，缓解mysql压力，多台web节点间利用rsync实现数据同步，并采用了SVN代码
                管理系统，`
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
        ],
        prizeList: [
          {
            name: 'ACM校一等奖'
          },
          {
            name: '数学建模2等奖'
          },
          {
            name: '三好学生'
          },
          {
            name: '一等奖学金'
          }
        ]
      },
      colors: [
        {color: '#e6a23c', percentage: 25,text: '了解'},
        {color: '#5cb87a', percentage: 50,text: '掌握'},
        {color: '#1989fa', percentage: 75,text: '熟练'},
        {color: '#6f7ad3', percentage: 100,text: '精通'}
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
  width: 100%;
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
  border-bottom: 5px solid #E4E4E4;
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
      margin-bottom: .1rem;
    }
    li>p{
      text-align: left;
      padding-bottom: .05rem;
      text-indent: 1em;
      font-weight: bold;
    }
  }
  .prize{
    width: 50%;
    ul{
      margin-top: .5rem;
    }
    li{
      margin-bottom: .2rem;
      text-align: left;
      padding-left: .5rem;
    }
  }
  .progress{
    display: flex;
  }
  /deep/ .el-progress{
    width: 70%;
    margin-right: .2rem;
  }
}
</style>