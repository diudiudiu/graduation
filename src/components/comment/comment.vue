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
            :hasReply="true"
            @getReplyName="getReplyName" 
            ></commentInner>
        </li>
      </ul>
    </div>
    <commentArea
      ref="area"
      @comment="comment"
      :placeholder="placeholder"
      :focus="focus"></commentArea> 
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
      placeholder: "",
      focus: false
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
        time: "2020.01.01 13:24"
      }
      // 提交评论
      
      //成功后从新拉取评论
    },

    getReplyName(name, inList){
      //唤出评论栏
      this.placeholder = inList ? '回复' + name : ''
      this.focus = true
      this.$refs.area.$el.children[0].children[0].focus()
      
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  width: 12rem;
  margin: .5rem auto;
  .comment-item{
    border: 1px solid #eee;
    padding:.2rem;
    border-radius: 6px;
  }
}

</style>