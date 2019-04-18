import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/home.vue'
import Index from './views/index/index.vue'
import Shopping from './views/shopping/shopping.vue'
import Login from './views/login/login.vue'
import List from './views/list/list.vue'
import Message from './views/message/message.vue'
import Redirect from './views/login/redirect_login/redirect_login.vue'
import Register from './views/login/redirect_login/register.vue'
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
          component: Login,
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
        }
      ]
    }

  ]
})
