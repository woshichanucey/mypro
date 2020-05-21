import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//导入store
import store from '../store';

// 
import me from '../views/me'
import xx from '../views/xx'
import article from '../views/article'
import login from '../views/login'
import setting from '../views/setting'




Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/me',
    component: me,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/setting',
    component: setting,
  },
  {
    path: '/xx',
    component: xx,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/article/:id',
    component: article
  },
  {
    path: '/login',
    component:login
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局的前置守卫
router.beforeEach((to,from,next)=>{
  if(to.matched.some(r=>r.meta.requireAuth)){
    // 进行检测,store中有没有isLogin
    // sessionStorage中有没有isLogin
    if(store.state.isLogin==false || sessionStorage.getItem('isLogin')==false){
      router.push({path:'/login',query:{path:to.fullPath}});
    }else{
      next();
    }
  }else{
    //必须要写next()
    next();
  }
});

export default router
