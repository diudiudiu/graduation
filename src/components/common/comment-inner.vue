
<template>
  <div class="comment-inner">
    <div class="avatar">
      <el-avatar size="large" :src="circleUrl"></el-avatar>
    </div>
    <div class="info">
      <div 
        class="inner"
        @click="replyName"
        >
        <span class="name">{{ name }}</span>
        <span v-if="isReply"> 回复 <span class="name">{{ replyName }}</span> </span>
        :
        <span class="talk">{{ talk }}</span>
      </div>
      <span class="time">
        {{time}}
      </span>
      <ul 
        v-if="replyList.length>0">
        <li
          v-for="(item,index) in replyList"
          :key="index">
          <comment-inner
            :name="item.name"
            :isReply="true"
            :replyName="item.replyName"
            :talk="item.talk"
            :time="item.time"
            :hasReply="false">
          </comment-inner>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commentInner',
  data() {
    return {
      textarea: '',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  props: {
    hasReply:{
      type: Boolean,
      default: true
    },
    time: {
      type: String,
      default: ''
    },
    replyList: {
      type: Array,
      default: () => ([])
    },
    name: {
      type: String,
      default: ''
    },
    talk: {
      type: String,
      default: ''
    },
    replyName: {
      type: String,
      default: ''
    },
    isReply:{
      type: Boolean,
      default: true
    },
    
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.comment-inner{
  display: flex;
  .info{
    margin-left: .1rem;
    text-align: left;
      word-break: break-all;
    .name{
      color: darkkhaki;
    }
    .name:hover{
      text-decoration: underline;
    }
    .time{
      font-size: .12rem;
      color: #797979;
    }
  }
}

</style>