<template>
  <div>
    <json-style v-if="style == 'json'"></json-style>
    <photo-style v-if="style == 'photo'"></photo-style>
  </div>
</template>

<script>

import photoStyle from '../components/blog-list/photo-style'
import jsonStyle from '../components/blog-list/json-style'


export default {
  components: {
    photoStyle,
    jsonStyle
  },
  name: 'blogList',
  data() {
    return {
      style: 'json',
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