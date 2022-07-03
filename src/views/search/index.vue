<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <div v-if="value.trim() === ''">
      <van-cell title="热门搜索" />
      <van-button
        v-for="(item, index) in hotsList"
        :key="index"
        hairline
        type="info"
        round
        class="btn"
        @click="value = item.first"
        color="linear-gradient(to right, skyblue, pink)"
        >{{ item.first }}</van-button
      >
    </div>
    <div v-else>
      <van-list
        @load="nextPage"
        v-model="loading"
        offset="1"
        :immediate-check="false"
        :finished="isFinished"
        finished-text="没有更多了"
      >
        <songItem
          v-for="(item, index) in CellList"
          :key="index"
          :id="item.id"
          :title="item.al.name"
          :label="item.ar[0].name + '------' + item.al.name"
        ></songItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getHots, getSearch } from '@/api'
import songItem from '@/components/songItem'
export default {
  name: 'search',
  components: { songItem },
  data() {
    return {
      value: '',
      hotsList: [],
      CellList: [],
      limit: 10,
      loading: false,
      page: 1,
      isFinished: false
    }
  },
  created() {
    this.getHots()
  },
  watch: {
    value: 'getSearch'
  },
  methods: {
    async getHots() {
      const { data } = await getHots()
      this.hotsList = data.result.hots
    },
    getSearch() {
      if (this.value.trim() === '') return
      this.page = 1
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        const { data } = await getSearch(this.value, this.limit)
        this.CellList = data.result.songs
      }, 900)
    },
    async nextPage() {
      const { data } = await getSearch(
        this.value,
        this.limit,
        this.page * this.limit
      )
      if (!data.result.songs) {
        this.isFinished = true
        return
      }
      this.CellList.push(...data.result.songs)
      this.page += 1
      this.loading = false
    }
  }
}
</script>

<style scoped lang="less">
.btn {
  margin: 5px 5px;
}
</style>
