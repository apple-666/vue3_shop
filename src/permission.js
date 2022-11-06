import router from '~/router'
import {
  getToken
} from '~/composables/auth.js'
import {
  toast,
  showFullLoading,
  hideFullLoading
} from '~/composables/util.js'
import store from './store'



// 前置守卫： 有请求和跳转时做监控
// BAD
router.beforeEach(async (to, from, next) => {
  showFullLoading()
  // console.log("apple")
  // console.log(to, from)
  const token = getToken()

  if (!token && to.path != "/login") {
    toast('未登录', 'error')
    return next({
      path: "/login"
    })
  }

  if (token && to.path == "/login") {
    toast('已登录，不需要重复登录', 'warning')
    return next({
      path: from.path ? from.path : '/'
    })
  }

  // 用户信息存在 全局的vuex中
  if (token) {
    await store.dispatch("getinfo")
  }


  let title = (to.meta.title ? to.meta.title : "未定义页面") + "-Parker的练习后台"
  document.title = title
  next() // 放行
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // // 如果用户未能验证身份，则 `next` 会被调用两次
  // next()
})

router.afterEach((to, from) => hideFullLoading())