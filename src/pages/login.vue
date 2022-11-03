<template>
  <ElRow style="min-height:100vh;" class="login-container">
    <ElCol :lg="16" :md="12" class="left">
      <div>
        <div class="font1">欢迎光临</div>
        <div class="font2">此站点是vue3 和 element-plus 的 虾季霸高Study</div>

      </div>
    </ElCol>
    <ElCol :lg="8" :md="12" class="right">
      <el-form ref="formRef" :rules="rules" :model="form" label-width="120px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="form.username" placeholder="input name">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input show-password v-model="form.password" placeholder="input pwd">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round class="w-[250px]" @click="onSubmit">login</el-button>
          <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
      </el-form>
    </ElCol>
  </ElRow>
</template>



<script setup>
import { reactive,ref } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]
}

const formRef=ref(null)

const onSubmit = () => {
  formRef.value.validate((valid)=>{
    console.log('submit')
  })
  // console.log('submit!')
}
</script>

<style >
.login-container {
  @apply bg-indigo-500;
}

.login-container .left,
.login-container .right {
  @apply flex items-center justify-center;
}

.login-container .right {
  @apply w-[400px] gap-2 bg-light-50;
}

.font1 {
  font-size: 10vh;
  color: white;
  @apply font-bold;
}

.font2 {
  font-size: 3vh;
  color: white;
}
</style>