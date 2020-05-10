<template>
  <div class="photo-style">
    <div class="left-port">
      <div class="photo">
        <img src="../../assets/img/5.jpg" alt="">
      </div>
      <div class="name">测试专用</div>
      <div class="position">web前端工程师</div>
      <div class="country">
        <i class="el-icon-location-information"></i>
        <span>沈阳</span>
      </div>
      <div class="sign">
        听说努力永远都不会晚。
      </div>
    </div>
    <div class="right-port">
      <div class="right-header">
        <div class="mask-bg"></div>
        <p class="bolg-sign">人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。——法国：道罗曼·罗兰</p>
      </div>
      <ul class="blog-list">
          <li class="blog-item" v-for="(item,index) in list" :key="`${item.id}${index}`">
            <router-link 
              class="title" 
              :to="{path:'/article', query:{id: item.id} }" 
              tag="h5">{{item.title}}</router-link>
            <p class="introduce">{{item.introduce}}</p>
            <div class="tag">
              <span class="time"><i class="el-icon-timer"></i>{{item.time}}</span>
            </div>
            <hr>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      // imgUrl: '',
      list:[
        {
          title: 'asfasdas',
          introduce: `家庭作业，并通过大量的胡萝卜consequat
           elitr运行开始的痛恨。室外足球层本身。对于还甚至的奥迪奥tincidu
           nt ELIT足球仇恨的作者。保护者LOREM和电视，只是最大的资产，运行的球员。但没有人从箭袋
           排球任何疼痛。整数LOREM仇恨，性能沙拉和胡萝卜，融资酱直径。`,
           id: '15612351',
           time: '2020-01-07'
        },
        {
          title: 'asfasdas',
          introduce: `家庭作业，并通过大量的胡萝卜consequat
           elitr运行开始的痛恨。室外足球层本身。对于还甚至的奥迪奥tincidu
           nt ELIT足球仇恨的作者。保护者LOREM和电视，只是最大的资产，运行的球员。但没有人从箭袋
           排球任何疼痛。整数LOREM仇恨，性能沙拉和胡萝卜，融资酱直径。`,
           id: '15612351',
           time: '2020-02-04'
        },{
          title: 'asfasdas',
          introduce: `家庭作业，并通过大量的胡萝卜consequat
           elitr运行开始的痛恨。室外足球层本身。对于还甚至的奥迪奥tincidu
           nt ELIT足球仇恨的作者。保护者LOREM和电视，只是最大的资产，运行的球员。但没有人从箭袋
           排球任何疼痛。整数LOREM仇恨，性能沙拉和胡萝卜，融资酱直径。`,
           id: '15612351',
           time: '2020-05-20'
        }
      ]
    }
  },
  methods: {
  
  }
}
</script>

<style lang="scss" scoped>
.photo-style{
  display: flex;
  width: 100%;
  .left-port{
    width: 3.3rem;
    height: 100%;
    position: fixed;
    background-color: #5f6d7e;
    color: white;
    overflow-y: hidden;
    .photo{
      margin:40px;
      width: 150px;
      height: 150px;
      border: 4px solid white;
      border-radius: 75px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .name{
      margin-bottom: 5px;
      color: white;
      font-size: 18px;
      font-family: 'robotobold';
      margin-left: 40px;
      text-align: left;
      font-weight: 700;
    }
    .position,.country,.sign{
      margin-bottom: 5px;
      color: white;
      font-size: 16px;
      font-family: 'robotobold';
      margin-left: 40px;
      text-align: left;
      font-weight: 700;
    }
    .sign{
      margin-top: .4rem;
    }
  }
  .right-port{
    margin-left: 3.3rem;
    width: calc(100% - 3.3rem);
    .right-header{
      padding: 260px 80px;
      position: relative;
      background: url(../../assets/img/7.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 2;
    }
    .mask-bg{
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(95, 109, 126, 0.4);
      top: 0;
      left: 0;
      z-index: 3;
    }
    
    .bolg-sign{
      font-size: 22px;
      color: white;
      z-index: 4;
      position: relative;
    }
    .blog-list{
      padding: 0 .8rem;
      margin-bottom: .8rem;
      .blog-item{
        padding-top: .8rem;
        .title{
          font-size: 16px;
          font-family: 'robotobold';
          text-transform: uppercase;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .title:hover{
          color: red;
          text-decoration: underline;
        }
        hr{
          position: relative;
          outline: 0;
          border: 0;
          width: 100%;
          height: 4px;
          background: #dddddd;
          margin-top: 40px;
          margin-bottom: 0;
        }
        p{
          text-align: left;
        }
        .tag{
          text-align: left;
          margin-top: .2rem;
          color: #606266;
          margin-left: .2rem;
        }
      }
    }
  }
}
</style>