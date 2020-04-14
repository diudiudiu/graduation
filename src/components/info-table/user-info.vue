<template>
  <div class="user-info">
    <el-tabs tab-position="left" style="height: 200px;">
      <el-tab-pane label="用户管理">
        <el-form :model="user" ref="basis" label-width="100px" >
          <el-form-item label="昵称" prop="nickName" required>
            <el-input class="basis-name" v-model="user.nickName"></el-input>
            <el-select class="sexType" v-model="user.sex">
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="github" prop="github">
            <el-input v-model="user.github"></el-input>
          </el-form-item>
          
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="basis.imageUrl" :src="basis.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          <el-form-item label="手机" prop="phone">
            <el-input v-model="basis.phone"></el-input>
            <el-checkbox :disabled="!basis.phone" class="hideType" v-model="basis.phoneType" label="保密" name="phoneType"></el-checkbox>
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
      <el-tab-pane label="账户隐私">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
      昵称可更改 有用户名限制 邮箱不可更改 密码 忘记密码入口
      男 女
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>