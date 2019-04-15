import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/iconfont.css'
Vue.use(Vant)
Vue.config.productionTip = false
// 往app中注入路由
new Vue({
  // 属性和属性值相同时简写
  router,
  store,
  render: h => h(App)
}).$mount('#app')
