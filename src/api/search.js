import axios from '@/utils/request'
export const getHots = () => axios({ url: '/search/hot' })
export const getSearch = (keywords, limit, offset) =>
  axios({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      offset
    }
  })
