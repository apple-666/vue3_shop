<template>
  <ElRow style="min-height:100vh;" class="bg-indigo-500">
    <ElCol :span="16" class="flex items-center justify-center">
      <div>
        <div class="font-bold" style="font-size:10vh; color:white;">欢迎光临</div>
        <div style="font-size:3vh; color:white;">此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
      </div>
    </ElCol>
    <ElCol :span="8" class="flex items-center justify-center bg-light-50">
      <el-form :model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </ElCol>
  </ElRow>
</template>



<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username:'',
  password:''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
