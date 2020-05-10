<template>
  <div class="week-list">
    <h4>博客排行榜</h4>
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="photo">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="info">
          <h5>{{item.username}}</h5>
          <h6>获赞 {{item.nice}}</h6>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      list: [
        {
          id: 'asd1',
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          username: 'userName',
          nice: '34567890'
        },
        {
          id: 'asd2',
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          username: 'userName',
          nice: '34567890'
        },
        {
          id: 'asd3',
          imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          username: 'userName',
          nice: '34567890'
        },
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
  .week-list{
    border: 1px solid #eee;
    border-radius: 4px;
    h4{
      font-size: 16px;
      font-weight: bold;
      border-left: 4px solid red;
      margin-left: .1rem;
      text-align: left;
      padding-left: .1rem;
    }
    li{
      padding: .1rem .5rem .1rem .1rem;
      display: flex;
      border-bottom: 1px solid #eee;
      
      .photo{
        width: 46px;
        height: 46px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: .1rem;
        img{
          width: 46px;
        }
      }
      .info{
        text-align: left;
        h5{
          font-size: 14px;
          font-weight: bold;
          padding-bottom: .1rem;
        }
        h6{
          font-size: 12px;
          color: #1a1a1a;
        }
      }
    }
  }
</style>