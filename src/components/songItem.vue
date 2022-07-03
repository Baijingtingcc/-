<template>
  <van-cell
    :title="title"
    :label="label"
    center
    class="new-song"
    @click="goPlay"
    ><van-icon name="play-circle-o"
  /></van-cell>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    goPlay() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.new-song {
  .van-cell__title {
    flex: 4;
  }
}
</style>
