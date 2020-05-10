<template>
  <div class="main">
    <div class="left-tag">
      <ul>
        <li v-for="item in leftList" :key="`${item.class}index`">
          {{item.class}}
        </li>
      </ul>
    </div>
    <div class="center-tag">
      <run-tag></run-tag>
      <div class="recommend">
        <h4>为你推荐</h4>
        <hr>
        <ul>
          <li v-for="item in reList" :key="item.id">
            <router-link :to="{path:'/article', query:{article: item.id,style: item.style}}" tag="h4">
              <span v-if="item.hot" class="hot"> 荐 </span>
              {{item.title}}
            </router-link>
            <p>{{item.introduce}}</p>
            <div class="author">
              <div class="author-img">
                <img :src="item.author.imgUrl" alt="">
              </div>
              <span>{{item.author.username}}</span>
              <div class="art-group">
                <i class="el-icon-s-opportunity"></i>
                <span>{{item.nice}}</span> |
                <i class="el-icon-view"></i>
                <span>{{item.browse}}</span> |
                <i class="el-icon-chat-dot-square"></i>
                <span>{{item.comment}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-tag">
      <week-list></week-list>
    </div>
  </div>
</template>

<script>
import runTag from '../common/run-tag'
import weekList from '../common/week-list'

export default {
  components:{
    runTag,
    weekList
  },
  data() {
    return {
      list: [
        {
          id: '1',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588873373589&di=05ac02411d21747a674fc8573153404f&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2268908537%2C2815455140%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D719'
        },
        {
          id: '2',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588873373587&di=f4c1ef377577a85ec03d3e51f629cd91&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2857883419%2C1187496708%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D763'
        },
        {
          id: '3',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588873373599&di=0718af3f441291e105b7acc3d325ef3a&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2305809034%2C2214207325%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D512'
        }
      ],
      leftList: [
        {
          class: '前端'
        },
        {
          class: '后端'
        },
        {
          class: '小程序'
        },
        {
          class: '架构'
        },
        {
          class: '安全'
        },
        {
          class: '运维'
        },
        {
          class: '游戏开发'
        },
        {
          class: '移动开发'
        },
        {
          class: 'ios'
        },
      ],
      reList: [
        {
          title: '标题',
          introduce: 'j简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdg',
          author: {
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            username: 'userName'
          },
          nice: 123,
          browse: '19837214',
          comment: '40',
          id: 'asd1',
          hot: true
        },
        {
          title: '标题',
          introduce: 'j简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdgj简介afshdg',
          author: {
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            username: 'userName'
          },
          nice: 123,
          browse: '19837214',
          comment: '40',
          id: 'asd2',
        }
      ]
    }
  },
  props: {
    // list: {
    //   type: Array,
    //   default: ()=>[]
    // }
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  width: 12rem;
  margin: .3rem auto;
  // background: #eee;
  // border-radius: 4px;
  .left-tag{
    width: 1rem;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    margin-right: .2rem;
    height: 100%;
    ul{
      li{
        padding: 5px;
      }
      li:hover{
        background: #eee;
      }
    }
  }
  .center-tag{
    border: 1px solid #eeeeee;
    width: 8rem;
    border-radius: 6px;
    margin-right: .2rem;
    .recommend{
      margin-top: .3rem;
      h4{
        text-align: left;
        font-size: 22px;
        font-weight: 700;
        padding-left: .3rem;
      }
      ul{
        li{
          padding: 18px 24px 13px 24px;
          background: #fff;
          border-bottom: 1px solid #f4f4f4;
          position: relative;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
          h4{
            padding-left: 0;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            height: 24px;
            margin-bottom: 4px;
            white-space: nowrap;
            cursor: pointer;
            .hot{
              display: inline-block;
              font-size: 18px;
              border: 2px solid red;
              padding: 0 2px;
              color: red;
              border-radius: 4px;
            }
          }
          h4:hover{
            color: red;
          }
          p{
            margin-bottom: 4px;
            color: #8a8a8a;
            font-size: 14px;
            line-height: 24px;
            text-align: left;
          }
          .author{
            display: flex;
            position: relative;
            .author-img{
              width: 24px;
              height: 24px;
              border-radius: 50%;
              overflow: hidden;
              margin-right: 6px;
              img{
                width: 24px;
              }
            }
            .art-group{
              position: absolute;
              right: .3rem;
              i{
                color: #6a6a6a;
              }
              i:hover{
                color: #349edf;
              }
              span{
                color: #349edf;
              }
              span:hover i{
                color: #349edf;
              }
            }
          }
        }
      }
    }
  }
}

</style>