<template>
  <div class="json-list">
    <div class="list-hearder"></div>
    <div class="main-list">
      <div class="json-header">
        // Author：diudiudiu
        <br />// string can be clicked.
      </div>
      <div class="json">
        const blogList = [
        <div v-for="(item,index) in list" :key="index" class="list-item">
          <span class="brackets">{</span>
          <p class="item-title">
            title: "
            <a href="item.id">
              {{ item.title }}
              <span class="text-line"></span>
            </a>
            ",
          </p>
          <p class="item-introduce">
            introduce: "
            <a href="item.id">
              {{ item.introduce }}
              <span class="text-line"></span>
            </a>
            "
          </p>
          <span class="brackets-back">
            }
            <span v-if="index !== list.length-1">,</span>
          </span>
        </div>]
      </div>
      <div v-if="notes.length!==0" class="array">
        const notes = [
        <p v-for="(item,index) in notes" :key="index">
          '{{ item.title }}'
          <span v-if="index !== list.length-1">,</span>
        </p>]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        img: '@img/login-logo.jpg.png'
      },
      list: [
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        },
        {
          title: '文章',
          introduce: '简介'
        }
      ],
      notes: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main-list {
  text-align: left;
  margin-left: 0.3rem;
}
.json {
  margin-bottom: 0.3rem;
}
.json-header {
  line-height: 0.3rem;
  margin-bottom: 0.2rem;
}
.list-item {
  text-indent: 0.33rem;
}
.item-title,
.item-introduce {
  text-indent: 0.6rem;
  a {
    position: relative;
    text-decoration: none;
  }
  .text-line {
    display: inline-block;
    position: absolute;
    top: 0.18rem;
    left: 0;
    border: 0rem solid #000;
    height: 0;
    width: 0;
    transition: width 0.3s ease-in;
  }
  a:hover .text-line {
    // width: calc(100 - .08rem);
    width: 100%;
    border: 0.005rem solid #000;
  }
}
.brackets-back {
  margin-left: 0.33rem;
}
</style>