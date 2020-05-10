<template>
  <div>
    <cv-color v-if="style == 'color'"></cv-color>
  </div>
</template>

<script>

import cvColor from '../components/remuse/myCV'


export default {
  components: {
    cvColor
  },
  name: 'remuseShow',
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