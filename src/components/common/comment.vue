<template>
  <div class="comment">
    <div class="comment-body">
      <ul class="comment-list">
        <li 
          class="comment-item"
          v-for="(item,index) in commentlist"
          :key="index"
          >
          <commentInner
            :name="item.name"
            :talk="item.talk"
            :time="item.time"
            :isReply="false"
            :replyList="item.replyList"
            :hasReply="true">></commentInner>
        </li>
      </ul>
    </div>
    <commentArea
      :comment="comment"
      :holderplace="holderplace"></commentArea> 
  </div>
</template>

<script>
import commentArea from './comment-area'
import commentInner from './comment-inner'

export default {
  components: {
    commentArea,
    commentInner
  },
  data() {
    return {
      commentlist:[
        {
          name: 'aaaaaaaa',
          time: '2020.01.01 13:22',
          talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
          replyList:[
            {
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            },
            {
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            },{
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            }
          ]
        },
        {
          name: 'aaaaaaaa',
          time: '2020.01.01 13:22',
          talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
          replyList:[
            {
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            },
            {
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            },{
              name: 'aaaaaaaa',
              time: '2020.01.01 13:22',
              talk: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
              replyName: 'bbbbbbbbbbbbbb'
            }
          ]
        }
      ],
      holderpalce: ""
    }
  },
  props: {
    
  },
  mounted(){
  },
  methods: {
    comment(talk, replyName) {
      let com  = {
        name: this.username,
        talk: talk,
        replyName: replyName,
      }
      // 提交评论
      
      //成功后从新拉取评论
    },
    replyName(test){
      test = '回复' + test
      //唤出评论栏
    }
  }
}
</script>

<style lang="scss" scoped>


</style>