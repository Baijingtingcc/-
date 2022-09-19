<template>
  <div>
    <van-cell title="推荐歌单" class="Cell-van" />
    <!-- 推荐歌单列表 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in singleTable"
        :key="item.id"
        :icon="item.picUrl"
        :text="item.name"
      />
    </van-grid>
    <!-- 最新音乐 -->
    <van-cell title="最新音乐" class="Cell-van" />
    <songItem
      v-for="item in newSongList"
      :key="item.id"
      :title="item.name"
      :label="item.song.artists[0].name + '----' + item.name"
    ></songItem>
  </div>
</template>


<script>
import { getPlaylist, getNewSongs } from '@/api'
import songItem from '@/components/songItem.vue'
export default {
  name: 'home',
  components: { songItem },
  data() {
    return {
      singleTable: [],
      newSongList: []
    }
  },
  created() {
    this.playList()
    this.getNewSongs()
  },
  methods: {
    async playList() {
      const res = await getPlaylist(6)
      this.singleTable = res.data.result
    },
    async getNewSongs() {
      const res = await getNewSongs()
      this.newSongList = res.data.result
    }
  }
}
</script>

<style scoped lang="less">
.Cell-van {
  background-color: #eee;
  margin: 5px 0 10px;
}
/deep/.van-icon__image {
  width: 121px;
  height: 100px;
}
/deep/.van-grid-item__content {
  padding: 0;
}
/deep/.van-grid-item__text {
  height: 36px;
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
// 调整盒子内边距
.van-grid-item__content {
  padding: 2px;
}
/deep/.van-grid-item {
  // 调整图片宽高
  // object-fit属性是 图片如何适应父容器
  // background-size 是背景图如何适应父容器
  .van-icon__image {
    width: 121px;
    height: 100px;
    object-fit: cover;
  }
}
</style>
