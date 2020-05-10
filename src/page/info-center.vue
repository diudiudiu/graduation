<template>
  <div>
    个人中心
    
    <userInfo></userInfo>
  </div>
</template>

<script>
import userInfo from "../components/info-table/user-info"


export default {
  components: {
    userInfo
  },
  name: 'infoCenter',
  data() {
    return {
      style: 'color',
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

</style>