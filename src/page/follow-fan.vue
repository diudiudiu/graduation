<template>
    <follow
      :type="type"></follow>
</template>

<script>
import follow from '../components/info-table/follow'

export default {
  components: {
    follow
  },
  data() {
    return {
      type: 'follow'
    }
  },
  props: {
   
  },
  mounted(){
    this.type = this.$route.query.type
  },
  
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>