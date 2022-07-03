import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Grid,
  GridItem,
  icon,
  Search,
  Button,
  List
} from 'vant'
const elements = [
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Grid,
  GridItem,
  icon,
  Search,
  Button,
  List
]
export default function (Vue) {
  elements.forEach((el) => Vue.use(el))
}
