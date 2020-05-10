<template>
  <div class="blog-control">
    <div class="con">
      <div class="left-control">
        <style-choose></style-choose>
        <style-list-choose></style-list-choose>
      </div>
      <div class="right-control">
        <blog-con></blog-con>
      </div>
    </div>
    
  </div>
</template>

<script>
import blogCon from '../components/blog/blog-con'
import styleChoose from '../components/blog/style-choose'
import styleListChoose from '../components/blog/liststyle-choose'


export default {
  components: {
    blogCon,
    styleChoose,
    styleListChoose
  },
  name: 'blogControl',
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
.blog-control{
  .con{
    display: flex;
    margin: .2rem 0 0 2rem;
    // width: 12rem;
  }
  .left-control{
    height: 100%;
  }
}
</style>