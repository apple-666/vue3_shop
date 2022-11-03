import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      "~":path.resolve(__dirname, "src")  // 为当前文件（__dirname）/src 的路径 设置别名 为 ~
    }
  },
  plugins: [vue(), WindiCSS()]
})

