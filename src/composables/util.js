import {
  ElNotification
} from 'element-plus'

// 封装提示组件: 消息组件


function toast(message, type = "success") {

  ElNotification({
    message,
    type,
    duration: 3000
  })
}

export {
  toast
}