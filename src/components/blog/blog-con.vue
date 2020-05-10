<template>
  <div class="blog-con">
    <h4 class="metitle">博客管理</h4>
    <hr>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <div class="item-top">
          <div class="left-item">
            <h4 class="title">{{item.title}}</h4>
            <p class="introduce">{{item.introduce}}</p>
          </div>
          <div class="right-item">
            <div class="show">
              <el-switch
                class="switch"
                v-model="item.show"
                active-color="#13ce66"
                inactive-color="#7d7e7f">
              </el-switch>
              <span v-if="item.show">展示</span>
              <span v-else>隐藏</span>
            </div>
            <el-button class="del-btn" type="danger" plain>删除</el-button>
          </div>
        </div>
        
        <div class="item-bot">
          <div class="time">{{item.time}}</div>
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
</template>

<script>



export default {
  components: {
  },
  name: 'infoCenter',
  data() {
    return {
      style: 'color',
      list: [
        {
          id: 'asd1',
          title: '标题',
          introduce: 'sdfghjkl',
          time: '2020',
          nice: '222',
          browse: '22',
          comment: '22',
          show: true
        },
        {
          id: 'asd2',
          title: '标题',
          introduce: '介绍sdfghjkl',
          time: '2020',
          nice: '222',
          browse: '22',
          comment: '22',
          show: true
        },
        {
          id: 'asd3',
          title: '标题',
          introduce: '介绍sdfghjk介绍sdfghjk介绍sdfghjk介绍sdfghjk介绍sdfghjk',
          time: '2020',
          nice: '222',
          browse: '22',
          comment: '22',
          show: false
        }
      ]
    }
  },
  props: {
   
  },
  mounted(){
    this.style = this.$route.query.style
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.blog-con{
  width: 8rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: .3rem auto;
  .metitle{
    text-align: left;
    padding-left: .4rem;
    font-size: 18px;
    font-weight: bold;
    margin-top: .2rem;
  }
  .list{
    margin: .3rem;
    padding: 0 .2rem;
    li{
      border-bottom: 1px solid #eee;
      margin-top: .1rem;
      padding-bottom: .1rem;
      text-align: left;
      .item-top{
        display: flex;
        .left-item{
          width: 70%;
          h4{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 4px;
          }
          p{
            color: #7d7e7f;
            font-size: 14px;
            word-wrap: none;
          }
        }
        .right-item{
          display: flex;
          .show{
            margin: .2rem .2rem 0 0;
          }
          .switch{
            margin-right: .05rem;
            margin-top: -5px;
          }
          .del-btn{
            padding:10px;
            height: 35px;
            margin-top: .15rem;
          }
        }
      }
      .item-bot{
        display: flex;
        margin-right: .8rem;
        justify-content: space-between;
        margin-top: .1rem;
        .time{
          color: #e68ddf;
        }
        .art-group{
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
</style>