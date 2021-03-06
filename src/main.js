import Vue from 'vue'
import App from './App.vue'
import vant from './plugins/vant'
import router from './routers'
import '@/styles/reset.css'
Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
