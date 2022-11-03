<template>
  <p>hello apple 后台首页{{ a }}</p>
  <div>{{ b }}</div>
  <div>{{ c }}</div>
  <div>
    <el-button @click="addCount">{{ count }}</el-button>
    <el-button type="primary" @click="addCount">{{ cc.count }}</el-button>
  </div>
</template>

<script setup>
import { ref,reactive } from "vue"
const a = '111'

let b = '222'

var c = '444'

var count = ref(1)

const cc = reactive({
  count:2
})

function addCount() {
  console.log(count.value)
  count.value++
}
</script>