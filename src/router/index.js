import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import index from '~/pages/index.vue'
import login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
import Admin from '~/layouts/admin.vue'


// const routes = [{
//   path: "/",
//   component: Admin,
//   children: [{
//     path: "/",
//     component: index,
//     meta: {
//       title: "后台首页"
//     }
//   }]
  const routes = [{
      path: "/",
      component: Admin,
      children:[{
        path: "/",
        component: index,
        meta: {
          title: "后台首页"
      }
      }]
}, {
  path: "/login",
  component: login,
  meta: {
    title: "登录页面"
  }
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: {
    title: "404"
  }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router