<template>
  <div>{{ $store.state.user.username }}</div>

  <el-button @click="handleLogout">退出</el-button>
</template>

<script setup>

import { ElMessage, ElMessageBox } from 'element-plus'
import { toast, showModel } from '~/composables/util.js'
import { logout } from '~/api/manager.js'
import { useRouter } from 'vue-router'
import {useStore} from  'vuex'

const router = useRouter()
const store = useStore()
function handleLogout() {
  showModel("确定退出用户？")
  .then(res =>
      logout().finally(() => {
        // del token
        // del user state
        store.dispatch('logout')
        // to login.page
        router.push("/login")
        // success msg
        toast("退出登录")
      })
    )
  .catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出',
    })
  })
}
</script>