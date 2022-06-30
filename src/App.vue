<template>
  <div>
    你好vue
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import axios from '@/utils/request'
export default {
  created() {
    console.log(axios.defaults)
  }
}
</script>

<style></style>
