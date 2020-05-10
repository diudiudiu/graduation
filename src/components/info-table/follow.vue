<template>
  <div class="user-follow">
    <div class="follow-top">
      <userTop></userTop>
    </div>
    
    <div class="follow-body">
      <el-tabs tab-position="left" v-model="text">
        <el-tab-pane class="follow" name="follow" label="我的关注">
          <div class="follow-title">全部关注</div>
          <ul>
            <li v-for="(item,index) in followList" :key="item.id">
              <div class="follow-img">
                <img :src="item.imgUrl">
              </div>
              <div class="follow-info">
                <h5 class="follow-name">{{item.userName}}</h5>
                <h5 class="follow-sign">{{item.sign}}</h5>
              </div>
              <div class="follow-btn">
                <el-dropdown :hide-on-click="false"  @command="delFollow">
                  <el-button class="follow" type="info" plain>
                    已关注<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="index">取消关注</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane class="follow" name="collect" label="我的收藏">
          <div class="follow-title">全部收藏</div>
          <ul>
            <li v-for="(item,index) in articleList" :key="item.id">
              <div class="article">
                <h5 class="follow-name">{{item.title}}</h5>
                <h5 class="follow-sign">{{item.time}}</h5>
              </div>
              <div class="article-btn">
                <el-dropdown :hide-on-click="false"  @command="delarticle">
                  <el-button class="follow" type="info" plain>
                    已收藏<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="index">取消收藏</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane class="follow" name="fans" label="我的粉丝">
          <div class="follow-title">全部粉丝</div>
          <ul>
            <li v-for="item in fansList" :key="item.id">
              <div class="follow-img">
                <img :src="item.imgUrl">
              </div>
              <div class="follow-info">
                <h5 class="follow-name">{{item.userName}}</h5>
                <h5 class="follow-sign">{{item.sign}}</h5>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    
      
  </div>
</template>

<script>
import userTop from '../common/user-top'

export default {
  components: {
    userTop
  },
  data() {
    return {
      followList: [
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '1',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '2',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '3',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '4',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '5',
          userName: 'asdfasd',
          sign: 'sadfasd'
        }
      ],
      articleList: [
        {
          title: 'asdfghjkxcvbnmfghjkl',
          id:'1',
          time: '2020-01-07'
        },
        {
          title: 'asdfghjkxcvbnmfghjkl',
          id: '2',
          time: '2020-01-07'
        },
        {
          title: 'asdfghjkxcvbnmfghjkl',
          id: '3',
          time: '2020-01-07'
        },
        {
          title: 'asdfghjkxcvbnmfghjkl',
          id: '4',
          time: '2020-01-07'
        },
        {
          title: 'asdfghjkxcvbnmfghjkl',
          id: '5',
          time: '2020-01-07'
        }
      ],
      fansList: [
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '1',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '2',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '3',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '4',
          userName: 'asdfasd',
          sign: 'sadfasd'
        },
        {
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          id: '5',
          userName: 'asdfasd',
          sign: 'sadfasd'
        }
      ],
      text:'follow'
    }
  },
  props: {
    type: {
      type: String,
      default: 'follow'
    },
  },
  watch: {
    type(val) {
      this.text = val;
    },
    $route(){
      this.text = this.$route.query.type
    },
  },
  methods: {
    delFollow(index){
      console.error(index)
      this.followList.splice(index,1)
    },
    delarticle(index){
      this.articleList.splice(index,1)
    }
  },
  mounted(){
    // this.type = this.$route.query.type
    // console.error(this.$route.query.type)
  }
}
</script>

<style lang="scss" scoped>
.follow-body{
  margin: .4rem auto 0 auto;
  width: 12rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: .3rem;
}
.el-tabs__header{
  border: 1px solid #eee;
}
/deep/ .el-tabs__content{
  border-left: 1px solid #eee;
}
.follow{
  margin-bottom: .2rem;
  ul>li{
    display: flex;
    border-top: 1px solid #eeeeee;
    position: relative;
    .follow-img{
      width: 58px;
      height: 58px;
      border-radius: 58px;
      overflow: hidden;
      margin: .1rem .3rem;
      img{
        width: 58px;
      }
    }
  }
  ul>li:last-child{
    border-bottom: 1px solid #eeeeee;
  }
  .follow-info{
    .follow-name{
      margin-top: .2rem;
      margin-bottom: .02rem;
      font-size: .16rem;
      text-align: left;
      color: #000;
      font-weight: 700;
    }
    .follow-sign{
      color: #aaa;
      text-align: left;
    }
  }
  .article{
    display: flex;
      margin-top: .2rem;
      margin-bottom: .1rem;
    .follow-name{
      font-size: .16rem;
      text-align: left;
      color: #000;
      margin-left: .4rem;
    }
    .follow-sign{
      color: #aaa;
      text-align: left;
      font-size: 14px;
      margin-left: .5rem;
    }
  }
  .follow{
    width: .8rem;
    height: .32rem;
    padding: 0;
    position: relative;
  }
  .follow-btn{
    position: absolute;
    right: 1rem;
    top: .18rem;
  }
}
.article-btn{
  position: absolute;
  right: 1rem;
  top: .11rem;
}
.follow-title{
  font-size: 20px;
  color: #000;
  text-align: left;
  margin-left: .5rem;
  margin-top: .1rem;
  margin-bottom: .2rem;
}
// /deep/ .el-dropdown-menu{
//   position: absolute;
//   top: 0;
// }
/deep/ .el-tabs__nav {
  width: 1.2rem;
}
/deep/ .el-tabs__item{
  text-align: center;
}
</style>