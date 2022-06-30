import { NavBar, Tabbar, TabbarItem, Cell, Grid, GridItem, icon } from 'vant'
const elements = [NavBar, Tabbar, TabbarItem, Cell, Grid, GridItem, icon]
export default function (Vue) {
  elements.forEach((el) => Vue.use(el))
}
