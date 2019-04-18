import Vue from 'vue'
import Router from 'vue-router'
// 五个页面组件
import Home from './views/index/home.vue'
import Index from './views/index/index.vue'
import Shopping from './views/shopping/shopping.vue'
import Login from './views/login/login.vue'
import List from './views/list/list.vue'
import Message from './views/message/message.vue'
import Redirect from './views/login/redirect_login/redirect_login.vue'
import Register from './views/login/redirect_login/register.vue'
// 搜suo组件
import Search from './views/search/search.vue'

// 首页nav组件
import Shoujikuaixiu from './views/index/nav/shoujikuaixiu.vue'
import Toutiao from './views/index/nav/toutiao.vue'
import Tuijina from './views/index/nav/tuijina.vue'
import Xianshigou from './views/index/nav/xianshigou.vue'
import Yijiuhuanxin from './views/index/nav/yijiuhuanxin.vue'

Vue.use(Router)
// 定义路由

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 搜索下方导航组件
      children: [
        {
          path: '/',
          name: 'index',
          component: Index,
          children: [
            {
              path: '/',
              name: 'aa',
              component: Tuijina
            },
            {
              path: 'tabs1',
              name: 'aaaa',
              component: Xianshigou
            },
            {
              path: 'tabs2',
              name: 'ass',
              component: Yijiuhuanxin
            },
            {
              path: 'tabs3',
              name: 'aas',
              component: Shoujikuaixiu
            },
            {
              path: 'tabs4',
              name: 'a',
              component: Toutiao
            }
          ]
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: Shopping
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/redirect_login',
          name: 'redirect',
          component: Redirect
        },
        {
          path: '/message',
          name: 'message',
          component: Message
        },
        {
          path: '/list',
          name: 'list',
          component: List
        },
        {
          path: '/search',
          name: 'list',
          component: Search
        }
      ]
    }
  ]
})
