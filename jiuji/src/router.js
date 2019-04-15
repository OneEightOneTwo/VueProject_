import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/home.vue'
import Index from './views/index/index.vue'
import Shopping from './views/shopping/shopping.vue'
import Login from './views/login/login.vue'
import List from './views/list/list.vue'
import Message from './views/message/message.vue'

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
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
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
          path: '/message',
          name: 'message',
          component: Message
        },
        {
          path: '/list',
          name: 'list',
          component: List
        }
      ]
    }
  ]
})
