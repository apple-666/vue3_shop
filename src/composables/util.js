import {
  ElNotification,
  ElMessage,
  ElMessageBox
} from 'element-plus'
import nprogress from 'nprogress'


// 封装提示组件: 消息组件
function toast(message, type = "success") {
  ElNotification({
    message,
    type,
    duration: 3000
  })
}

// 提示弹框组件
function showModel(content ="内容",type="info",title="Info"){
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: type,  
    }
  )
}


function showFullLoading(){
  nprogress.start()
}

function hideFullLoading(){
  nprogress.done()
}


export {
  toast,showModel,showFullLoading,hideFullLoading
}