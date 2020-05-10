<template>
  <div class="user-info">
    <el-tabs tab-position="left" style="height: 400px;">
      <el-tab-pane label="用户管理">
        <el-form :model="user" ref="basis" label-width="100px" >
          <el-form-item label="昵称">
            <el-input class="basis-name" v-model="user.username"></el-input>
            <el-select class="sexType" v-model="user.sex">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
              <el-option label="保密" value="保密"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="github">
            <el-input v-model="user.github"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" required>
            <el-input disabled type="email" v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitBasisForm">保存</el-button>
            <el-button @click="close">取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="账户隐私">
        修改密码
        </el-tab-pane>
      
    </el-tabs>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '地方大沙发',
        sex: '保密',
        email: 'adadas@qq.com',
        github: 'asdafq'
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.user-info{
  border-radius: 6px;
  border: 1px solid #eee;
  width: 8.2rem;
  padding-bottom: .2rem;
  background: #ffffff;
  padding: .2rem 4px;
  margin: .2rem auto;
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