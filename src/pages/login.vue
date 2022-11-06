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
          <el-button type="primary" round class="w-[250px]" @click="onSubmit" :loading="loading">login</el-button>
          <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
      </el-form>
    </ElCol>
  </ElRow>
</template>



<script setup>
import { reactive, ref,onMounted,onBeforeUnmount } from 'vue'  // onmount 生命周期
import * as util from '~/composables/util.js'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const loading = ref(false)
const rules = {
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 20, message: 'Length should be 1 to 20', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 20, message: 'Length should be 1 to 20', trigger: 'blur' },
  ]
}

const formRef = ref(null)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    // console.log('submit')
    if (!valid) {
      return false
    }
    loading.value = true

    store.dispatch("login", form).then(() => {
      util.toast('登录成功', 'success')
      router.push('/')
    }).finally(() => {
      loading.value = false
    })
  })
}

// 回车登录
function onKeyUp(e){
  let key = e.key
  if(key == "Enter") onSubmit()
}

onMounted(()=>{
  document.addEventListener("keyup", onKeyUp)
})

onBeforeUnmount(()=>{
  document.removeEventListener("keyup", onKeyUp)
})

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