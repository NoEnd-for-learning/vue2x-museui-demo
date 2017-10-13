/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: require('../views/index'),
    children: [
      {
        path: 'one',
        component: require('../views/one')
      },
      {
        path: 'two',
        component: require('../views/two')
      },
      {
        path: 'three',
        component: require('../views/three')
      },
      {
        path: 'four',
        component: require('../views/four')
      },
      {
        path: 'axios',
        component: require('../views/axios')
      }
    ]
  }, {
    name: 'playerDetail',
    path: '/playerDetail/:id',
    component: require('../views/three')
  }, {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: require('../views/four')
  }, {
    path: '*', redirect: '/index/one'
  }]
})

export default router
