import axios from '@/utils/request'
export const getPlaylist = (limit) =>
  axios({
    url: '/personalized',
    params: {
      limit
    }
  })
export const getNewSongs = (limit) =>
  axios({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
