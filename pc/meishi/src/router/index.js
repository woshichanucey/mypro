import Vue from 'vue'
import VueRouter from 'vue-router'

//登录界面
import login from '../views/login.vue'
//注册界面
import register from '../views/register.vue'
// 首页
import index from '../views/index.vue'
// 详情页
import details from '../views/details.vue'

// 测试
import cadt from '../components/cadt.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/details/:id',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
