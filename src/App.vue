<template>
  <div>
    <router-view></router-view>
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
