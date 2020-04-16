<template>
  <div class="mask">
    <div class="cv-group">
      <div class="title">
        <span v-if="type === 'basis'">基础信息</span>
        <span v-if="type === 'word'">工作经历</span>
        <span v-if="type === 'skill'">技能掌握</span>
        <span v-if="type === 'project'">项目经历</span>
        <span v-if="type === 'aboutMe'">个人评价</span>
        <span v-if="type === 'prize'">获奖经历</span>
        <span v-if="type === 'article'">发表文章</span>
        <i class="close el-icon-close" @click="close"></i>
      </div>
      <div class="form-info">
        <!-- 基础信息 -->
        <el-form v-if="type === 'basis'" :model="basis" ref="basis" label-width="100px" >
          <el-form-item label="姓名" prop="name" required>
            <el-input class="basis-name" v-model="basis.name"></el-input>
            <el-select class="sexType" v-model="basis.sex">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="github" prop="github">
            <el-input v-model="basis.github"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="basis.phone"></el-input>
            <el-checkbox :disabled="!basis.phone" class="hideType" v-model="basis.phoneType" label="保密" name="phoneType"></el-checkbox>
          </el-form-item>
          <el-form-item label="毕业院校" prop="school" required>
            <el-input v-model="basis.school"></el-input>
          </el-form-item>
          <el-form-item label="意向岗位" prop="position" required>
            <el-input v-model="basis.position"></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="weChat">
            <el-input v-model="basis.weChat"></el-input>
            <el-checkbox :disabled="!basis.weChat" class="hideType" v-model="basis.weChatType" label="保密" name="phoneType"></el-checkbox>
          </el-form-item>
          <el-form-item label="QQ" prop="QQ">
            <el-input v-model="basis.qq"></el-input>
            <el-checkbox :disabled="!basis.qq" class="hideType" v-model="basis.qqType" label="保密" name="phoneType"></el-checkbox>
          </el-form-item>
          <el-form-item label="最高学历" prop="grade" required>
            <el-select v-model="basis.grade" placeholder="请选择最高学历">
              <el-option label="小学" value="小学"></el-option>
              <el-option label="初中" value="初中"></el-option>
              <el-option label="高中" value="高中"></el-option>
              <el-option label="专科" value="专科"></el-option>
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
              <el-option label="博士后" value="博士后"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" required>
            <el-input type="email" v-model="basis.email"></el-input>
          </el-form-item>
          <el-form-item label="毕业时间" prop="gradeDate" required>
            <el-date-picker 
              type="date" 
              placeholder="选择日期" 
              v-model="basis.gradeDate" 
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <!-- 工作经历 -->
        <el-form v-if="type === 'word'" ref="word" label-width="100px" >
          <div v-for="(item,i) in wordList" :key="i">
            <el-form-item label="公司名称" prop="name" required>
              <el-input class="basis-name" v-model="item.name"></el-input>
              <span class="delete" v-if="wordList.length>1" @click="deleteItem(i)">删除</span>
            </el-form-item>
            <el-form-item label="职位" prop="position" required>
              <el-input v-model="item.position"></el-input>
            </el-form-item>
            <el-form-item label="任职时间" prop="wordDate" required>
              <el-date-picker v-model="item.wordDate" type="monthrange" range-separator="至" 
                start-placeholder="开始月份"
                end-placeholder="结束月份">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="描述" prop="describe">
              <el-input type="textarea"  :rows="6" placeholder="请输入内容" v-model="item.describe"></el-input>
            </el-form-item>
            <div v-if="wordList.length>1 && i<wordList.length-1" class="line-item"></div>
          </div>
          <el-form-item>
            <el-button type="success" @click="addItem">+添加工作经历</el-button>
          </el-form-item>
        </el-form>
        <!-- 技能掌握 -->
        <el-form v-if="type === 'skill'" ref="skill" label-width="100px" >
          <div v-for="(item,i) in skillList" :key="i">
            <el-form-item label="技能掌握" prop="skill" >
              <el-input class="skill-name" v-model="item.name" ></el-input>
              <el-select :disabled="!item.name" v-model="item.degree" placeholder="程度">
                <el-option label="了解" value="0"></el-option>
                <el-option label="掌握" value="1"></el-option>
                <el-option label="熟悉" value="2"></el-option>
                <el-option label="精通" value="3"></el-option>
              </el-select>
              <span class="delete-float" v-if="skillList.length>1" @click="deleteItem(i)">删除</span>
            </el-form-item>
            <div v-if="skillList.length>1 && i<skillList.length-1" class="line-item"></div>
          </div>
          <el-form-item>
            <el-button type="success" @click="addItem">+添加技能</el-button>
          </el-form-item>
        </el-form>
        <!-- 项目经历 -->
        <el-form v-if="type === 'project'" ref="project" label-width="100px" >
          <div v-for="(item,i) in projectList" :key="i">
            <el-form-item label="项目名称" prop="title" required>
              <el-input class="skill-name" v-model="item.title" ></el-input>
              <span class="delete" v-if="projectList.length>1" @click="deleteItem(i)">删除</span>
            </el-form-item>
            <el-form-item label="项目描述" prop="describe" required>
              <el-input type="textarea"  :rows="6" placeholder="请输入内容" v-model="item.describe"></el-input>
            </el-form-item>
            <div v-if="projectList.length>1 && i<projectList.length-1" class="line-item"></div>
          </div>
          <el-form-item>
            <el-button type="success" @click="addItem">+添加项目经历</el-button>
          </el-form-item>
        </el-form>
        <!-- 关于我 -->
        <el-form v-if="type === 'aboutMe'" ref="aboutMe" label-width="100px" >
          <el-form-item label="个人评价">
            <el-input type="textarea"  :rows="6" placeholder="请输入内容" v-model="aboutMe"></el-input>
          </el-form-item>
        </el-form>
        <!-- 获奖信息 -->
        <el-form v-if="type === 'prize'" ref="aboutMe" label-width="100px" >
          <div v-for="(item,i) in prizeList" :key="i">
            <el-form-item label="获奖经历">
              <el-input class="skill-name" v-model="item.name" ></el-input>
              <span class="delete" v-if="prizeList.length>1" @click="deleteItem(i)">删除</span>
            </el-form-item>
            <div v-if="prizeList.length>1 && i<prizeList.length-1" class="line-item"></div>
          </div>
          <el-form-item>
            <el-button type="success" @click="addItem">+添加奖项</el-button>
          </el-form-item>
        </el-form>
        <!-- 发表论文 -->
        <el-form v-if="type === 'article'" ref="article" label-width="100px" >
          <el-form-item label="发表文章">
            <el-input type="textarea"  :rows="6" placeholder="请输入内容" v-model="article"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-save">
            <el-button type="primary" @click="submitBasisForm">保存</el-button>
            <el-button @click="close">取消</el-button>
        </div>
      </div>
      <div class="bottom-space"></div>    
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      wordList: [
        {
          name: '',
          position: '',
          wordDate: '',
          describe: ''
        }
      ],
      skillList:[
        {
          name: '',
          degree: '0'
        }
      ],
      aboutMe: '',
      prizeList: [
        {
          name:''
        }
      ],
      projectList: [
        {title: '', describe: ''}
      ],
      article: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'basis'
    },
    basis: {
      type: Object,
      default: ()=>{}
    }
    
  },
  computed: {

  },
  methods: {
    submitBasisForm(){
      if(!this.basis.name || !this.basis.email || !this.basis.grade || !this.basis.gradeDate){
        this.$message.error('请填写必填项')
      }
      console.error(this.basis)
    },
    close(){
      this.$emit('close')
    },
    addItem(){
      if(this.type ==='prize'){
        this.prizeList.push({name:''})
      }
      if(this.type ==='project'){
        this.projectList.push({title: '', describe: ''})
      }
      if(this.type ==='skill'){
        this.skillList.push({name:'',degree:'0'})
      }
      if(this.type ==='word'){
        this.wordList.push({ name: '', position: '', wordDate: '', describe: '' })
      }
    },
    deleteItem(index){
      if(this.type ==='prize'){
        this.prizeList.splice(index,1)
      }
      if(this.type ==='project'){
        this.projectList.splice(index,1)
      }
      if(this.type ==='skill'){
        this.skillList.splice(index,1)
      }
      if(this.type ==='word'){
        this.wordList.splice(index,1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.mask{
  background-color: rgba(0, 0, 0, .6);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 101;
  overflow: auto;
  overflow-x: hidden;
}
.cv-group{
  width: 8.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .title{
    text-align: left;
    font-size: .24rem;
    height: .3rem;
    background: #f0f0f0;
    padding: .1rem 0 ;
    span{
      margin-left: .3rem;
    }
    .close{
      float: right;
      font-size: .3rem;
      color: #8c939d;
      cursor: pointer;
      margin-right: .3rem;
    }
  }
  .bottom-space{
    position: absolute;
    bottom: -.2rem;
    height: .2rem;
    width: 100%;
    background: #ffffff;
  }
}

.form-info{
  width: 8.2rem;
  padding-bottom: .2rem;
  background: #ffffff;
  max-height: 5.22rem;
  overflow: scroll;
  .el-input{
    width: 3rem;
  }
  .el-form{
    padding: .5rem 1rem 0;
    .delete{
      display: inline-block;
      margin-left: 2rem;
      cursor: pointer;
      font-weight: 700;
      color: #bd5e5e;
    }
    .delete-float{
      display: inline-block;
      margin-left: .25rem;
      cursor: pointer;
      font-weight: 700;
      color: #bd5e5e;
    }
    .delete-float:hover{
      color: #f56c6c;
    }
    .delete:hover{
      color: #f56c6c;
    }
    .line-item{
      border: 1px dashed #8c939d;
      margin-bottom: .2rem;

    }
  }
  
  .el-form-item{
    /deep/ .el-form-item__content{
      padding-left: .4rem;
      text-align: left;
    }
  }
  .basis-name{
    width: 2rem;
  }
  .skill-name{
    width: 2rem;
    margin-right: .3rem;
  }
  .sexType{
    width: 1rem;
    margin-left: .5rem;
  }
  .hideType{
    margin-left: .3rem;
  }
}

</style>