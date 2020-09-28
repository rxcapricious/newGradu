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
      component: page.log.login,
      meta: {
        title: '登录首页'
      }
    }
  ]
})
