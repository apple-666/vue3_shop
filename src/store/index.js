import { createStore } from 'vuex'
import { login, getinfo } from '~/api/manager.js'
import {setToken} from '~/composables/auth.js'


// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      user:{}
    }
  },
  mutations: {
    SET_USERINFO(state,user){
      state.user = user
    }
  },
  actions:{
    // 登录
    login({commit},{username,password}){
      return new Promise((resolve,reject)=>{
        login(username,password).then(res=>{
          setToken(res.token)
          resolve(res)
        }).catch(err=>reject(err))
      })
    },
    // 拿用户信息 (为异步操作)
    getinfo({commit}){
      return new Promise((resolve, reject) => {
        getinfo().then(res=>{
          commit("SET_USERINFO",res)
          resolve(res)
        }).catch(err => reject(err));
      })
    }
  }
})

export default store