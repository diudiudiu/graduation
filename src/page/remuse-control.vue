<template>
  <div>
    <cv-form></cv-form>
  </div>
</template>

<script>
import cvForm from '../components/remuss-form/cv-form'

export default {
  components: {
    cvForm

  },
  name: 'remuseControl',
  data() {
    return {
      // style: 'color',
    }
  },
  props: {
   
  },
  mounted(){
    // this.style = this.$route.query.style
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>