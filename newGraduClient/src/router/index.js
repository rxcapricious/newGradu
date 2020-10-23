import Vue from 'vue'
import Router from 'vue-router'
import page from './pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/login',
      component: page.login.index,
      meta: {
        title: '登录首页'
      }
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: page.entrance.index,
      meta: {
        title: '首页入口'
      },
      children: [
        {
          path: 'welcome',
          name: '主页',
          component: page.entrance.welcome
        },
        {
          path: 'order',
          name: '订单',
          component: page.entrance.order.index
        },
        {
          path: 'order/detail',
          name: '订单详情',
          component: page.entrance.order.detail
        }
      ]
    }
  ]
})
