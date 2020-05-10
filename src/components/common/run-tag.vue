<template>
  <div class="run-tag">
    <el-carousel height="220px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <router-link :to="{path:'/article', query:{article: item.id,style: ''}}" >
          <img :src="item.imgUrl"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>


export default {
  components:{
    // bookmark
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
.user-top{
  border: .01px solid  #eee;
  background: url(../../assets/img/user-top-bg.jpeg)  no-repeat;
  width: 12rem;
  height: 2rem;
  margin: 0 auto;
  position: relative;
  .img-head{
    display: flex;
    position: absolute;
    bottom: .25rem;
    margin-left: .3rem;
    .avater{
      width: 64px;
      height: 64px;
      border: 2px solid hsla(0,0%,100%,.4);
      border-radius: 52px;
      margin-right: .2rem;
    }
    .avatar{
      height: 64px;
      background: #fff;
      border-radius: 48px;
    }
    .info{
      .user-name{
        margin-top: .1rem;
        margin-bottom: .05rem;
        font-size: .18rem;
        text-align: left;
        color: #fff;
        font-weight: 700;
      }
      .sign{
        border: 0;
        background: none;
        font-size: 14px;
        color: #eee;
        width: 3rem;
        padding: .03rem .03rem;
        border-radius: .05rem;
      }
      .sign:hover{
        border: 1px solid #eee;
        background: #fff;
        color: #aaa;
      }
    }
  }
}

</style>