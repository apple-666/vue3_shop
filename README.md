# 项目目录
- 根路径下的文件
  vite.config.js 为路径取别名， 为url做proxy
- src 目录
  - 文件
    1. App.vue 初始主页面
    2. axios.js 请求，响应拦截器
    3. main.js 导入各个模块的入口（app.use(etc..)）
    1. permission.js 前置（后置）守卫，处理跳转
  - 文件夹
    1. api: 未请求接口做封装
    2. assets: 静态资源
    3. components:组件
    4. composables: 公共工具
    5. pages: 页面
    6. router:路由（请求路径和页面的映射）
    1. store:存储状态信息（管理用户token等信息）