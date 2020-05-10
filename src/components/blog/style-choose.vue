<template>
  <div class="style-choose">
    <h4>博客style:</h4>
    <ul>
      <li v-for="item in styleList" :key="item.name">
        <el-radio v-model="style" :label="item.name">
          {{ item.name }}
        </el-radio>
        <div class="review">
            <i class="el-icon-view"></i> <span>预览</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  components: {
  },
  name: 'styleChoose',
  data() {
    return{
      styleList: [
        {
          name: 'photo'
        },
        {
          name: 'json'
        }
      ],
      style: 'json'
    }
  },
  props: {
   
  },
  mounted(){
    console.error(this.style)

  },
  watch: {
    style(val){
      console.error(val)
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.style-choose{
  width: 1.5rem;
  margin-right: .2rem;
  text-align: left;
  border: 1px solid #eee;
  height: 100%;
  padding: 10px 40px;
  border-radius: 4px;
  margin-top: .3rem;
  h4{
    font-size: 18px;
    padding-left: .2rem;
    font-weight: bold;
    margin-bottom: .1rem;
  }
  ul{
    li{
      display: flex;
      margin-top: .1rem;      
      position: relative;
      .review{
        position: absolute;
        right: 0;
        top: -5px;
        cursor: pointer;
      }
    }
  }
}
</style>