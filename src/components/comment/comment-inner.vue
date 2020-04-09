
<template>
  <div class="comment-inner">
    <div class="avatar">
      <el-avatar size="large" :src="circleUrl"></el-avatar>
    </div>
    <div class="info">
      <div class="info-talk">
        <div 
          class="inner">
          <span class="name">{{ name }}</span>
          <span v-if="isReply"> 回复 <span class="name">{{ replyName }}</span> </span>
          :
          <span class="talk">{{ talk }}</span>
        </div>
        <span class="time">
          {{time}}
          <i 
            class="el-icon-s-comment"
            @click="getReplyName(name,true)"
            ></i>
        </span>
      </div>
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
            :hasReply="false"
            @getReplyName="getReplyName" 
            >
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
    getReplyName(name, inList){
      this.$emit('getReplyName', name, inList)
    }
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
      .el-icon-s-comment{
        display: none;
      }
      .el-icon-s-comment：hover{
        color: cornflowerblue;
      }
    }
  }
    
  .info-talk:hover  .time>.el-icon-s-comment{
      display: inline-block;
      margin-left: .2rem;
      cursor: pointer;
  }
}

</style>