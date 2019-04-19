import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/iconfont.css'
import './style/bese.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.use(VueAxios, axios)
Vue.use(Vant)
Vue.config.productionTip = false
// 往app中注入路由
new Vue({
  // 属性和属性值相同时简写
  router,
  store,
  render: h => h(App)
}).$mount('#app')
