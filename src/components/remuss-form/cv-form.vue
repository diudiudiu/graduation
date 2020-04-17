<template>
  <div class="cv-form" >
    <div class="basis" @click.self="openCard('basis')">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="basis.imageUrl" :src="basis.imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="basis-info">
        <div v-if="basis.name" class="name">{{basis.name}}</div>
        <div class="info">
          <span v-if="basis.sex">{{basis.sex}}</span>
          <span v-if="basis.grade">{{basis.grade}}</span>
          <span v-if="basis.school">{{basis.school}}</span>
          <span v-if="basis.gradeDate">毕业时间：{{basis.gradeDate}}</span>
        </div>
        <div class="contact">
          <span v-if="basis.phone">联系方式：{{basis.phone | phone(basis.phoneType) }}</span>
          <span v-if="basis.email">邮箱：{{ basis.email }}</span>
          <span v-if="basis.position">意向岗位: {{basis.position}}</span>
        </div>
        <div class="inter-contact">
          <span v-if="basis.qq">qq：{{basis.qq}}</span>
          <span v-if="basis.weChat">微信：{{basis.weChat}}</span>
          <span v-if="basis.github">github：{{basis.github}}</span>
        </div>
      </div>
      <div class="editors"><span @click="openCard('basis')">编辑</span></div>
    </div>
    <ul>
      <li class="list-item" v-for="(item,index) in attrList" :key="index" @click="openCard(item.type)">
        <h5>{{item.title}}</h5>
        <div class="editor-group"><span @click.stop="openCard(item.type)">编辑</span> <span @click.stop="deleteItem(index)">删除</span></div>
        <div v-if="item.type==='word'">
          <ul>
            <li class="word-item" v-for="(itm,i) in wordList" :key="i">
              <div class="word">
                <span>{{itm.name}}</span>
                <span v-if="itm.wordDate.length!==0">{{itm.wordDate[0]}} — {{itm.wordDate[1]}}</span>
                <span>{{itm.position}}</span>
              </div>
              <p v-if="itm.describe">
                {{itm.describe}}
              </p>
            </li>
          </ul>
        </div>
        <div v-if="item.type==='project'">
          <ul>
            <li class="word-item" v-for="(itm,i) in projectList" :key="i">
              <div class="word">
                <span>{{itm.title}}</span>
              </div>
              <p v-if="itm.describe">
                {{itm.describe}}
              </p>
            </li>
          </ul>
        </div>
        <div class="about-me" v-if="item.type==='aboutMe'">
          <p>{{aboutMe}}</p>
        </div>
        <div v-if="item.type==='skill'">
          <ul>
            <li class="word-item" v-for="(itm,i) in skillList" :key="i">
              <div class="word">
                <span>{{itm.name}}</span> 
                <span v-if="itm.name">{{itm.degree}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="item.type==='prize'">
          <ul>
            <li class="word-item" v-for="(itm,i) in prizeList" :key="i">
              <div class="word">
                <span>{{itm.name}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="article" v-if="item.type==='article'">
          <p>
            {{article}}
          </p>
        </div>

      </li>
    </ul>
    <cv-group  
      v-if="cvStatus" 
      :type="cvType" 
      :basis="basis"
      :wordList="wordList"
      :skillList="skillList"
      :aboutMe="aboutMe"
      :prizeList="prizeList"
      :projectList="projectList"
      :article="article"
      @close="closeCard"
      >
    </cv-group>
  </div>
  
</template>

<script>
import cvGroup from '../info-table/cv-group'

export default {
  components: {
    cvGroup
  },
  data() {
    return {
      basis: {
        name: 'mjx',
        sex: '男',
        phone: '1231511124',
        grade: '本科',
        email: '171738749@qq.com',
        gradeDate: '',
        imageUrl: '',
        phoneType: true,
        position: 'web开发',
        weChat: '12355123',
        weChatType: true,
        qq: '123451',
        github: '71123456',
        qqType: true,
        school: '沈阳工业大学'
      },
      wordList: [
        {
          name: '好未来公司',
          position: 'web前端',
          wordDate: [],
          describe: 'hgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;lhgjhkjlk;l'
        }
      ],
      skillList: [
        {
          name: 'javascript',
          degree: '精通'
        }
      ],
      aboutMe: 'sdfghjklmnbvcxxdfghj',
      prizeList: [
        {
          name: '三好学生'
        }
      ],
      projectList: [
        {title: '未来黑板', describe: '是对方过后就看了看见面会脑哥人'}
      ],
      article: '就看了看见面会脑哥人',
      attrList: [
        {title:'工作经历',type:'word'},
        {title:'项目经历',type:'project'},
        {title:'个人评价',type:'aboutMe'},
        {title:'技能掌握',type:'skill'},
        {title:'获奖经历',type:'prize'},
        {title:'发表文章',type:'article'}
      ],
      cvStatus: false,
      cvType: 'basis'
    }
  },
  filters: {
    phone: function (value,phoneType) {
      if(!phoneType){
        return
      }
      return value.replace(value.substring(3,7), "****")
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
        this.basis.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
      return isJPG && isLt2M
    },
    openCard(type){
      this.cvStatus = true
      document.documentElement.style.overflow='hidden'
      this.cvType = type
    },
    closeCard(){
      this.cvStatus = false
      document.documentElement.style.overflow='auto'
    },
    deleteItem(index){
      this.attrList.splice(index,1)
    }
  }
}
</script>

<style lang="scss" scoped>
.cv-form{
  border: 1px solid #f0f0f0;
  width: 8rem;
  margin: 0 auto;
  background: #ffffff;
  padding: .3rem .4rem;
  .basis{
    display: flex;
    position: relative;
    margin-bottom: .2rem;
    padding: .2rem 0;
    .editors{
      font-size: 14px;
      position: absolute;
      right: .1rem;
      top: .05rem;
      text-align: left;
      display: none;
      span{
        display: inline-block;
        color: #25bb9b;
        cursor: pointer;
        margin-right: .22rem;
      }
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader{
      margin-left: .2rem;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 1.2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      border-radius: 1.2rem;
      border: 1px dashed #8c939d;
    }
    .avatar {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
      border-radius: 1.2rem;
    }
    .basis-info{
      margin-left: .2rem;
      .name{
        margin-top: .1rem;
        margin-bottom: .05rem;
        text-align: left;
        font-weight: 700;
        font-size: 22px;
      }
      .info,.contact,.inter-contact{
        text-align: left;
        span{
          display: inline-block;
          margin-right: .2rem;
        }
      }
    }
  }
  .basis:hover .editors{
    display: block;
  }
  .basis:hover{
    background: beige;
  }
  .list-item{
    padding: .2rem .1rem;
    position: relative;
    h5{
      text-align: left;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: .2rem;
    }
    border-bottom: 1px solid #f0f0f0;
  }
  .list-item:last-child{
    border-bottom: none;
  }
  .list-item:hover{
    background: beige;
  }
  .list-item:hover .editor-group{
    display: block;
  }
  .list-item .word-item{
    text-align: left;
    .word{
      margin-bottom: .1rem;
    }
    span{
      margin-right: .2rem;
    }
    p{
      word-break: break-all;
    }
  }
  .article,.about-me{
    text-align: left;
    word-break: break-all;

  }
  .editor-group{
    font-size: 14px;
    position: absolute;
    right: .1rem;
    top: .05rem;
    text-align: left;
    width: 1rem;
    display: none;
    span{
      display: inline-block;
      color: #25bb9b;
      cursor: pointer;
    }
    span:first-child{
      margin-right: .2rem;
    }
  }
}
</style>