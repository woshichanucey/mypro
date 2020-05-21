import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 测试案例开始
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Toast from '../components/MintUI/Toast.vue'
import Checklist from '../components/MintUI/Checklist.vue'
import Radio from '../components/MintUI/Radio.vue'
import Switch from '../components/MintUI/Switch.vue'
import Cell from '../components/MintUI/Cell.vue';
import Cellswipe from '../components/MintUI/Cellswipe.vue'
import Messagebox from '../components/MintUI/Messagebox.vue'
import Navbar from '../components/MintUI/Navbar.vue'
import Tabcontainer from '../components/MintUI/Tabcontainer.vue'
import acess from '../views/acess1'
import access from '../views/access2'
import article from '../views/article'

//导入store
import store from '../store';

// 测试案例结束
import Register from '../views/Register';
import Me from '../views/Me';
import About from '../views/About';
import Profile from '../views/Profile';
import Login from '../views/Login';
import infi from '../components/MintUI/infi.vue'
import tb from '../components/MintUI/tabbar.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/field',
    component: Field
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/checklist',
    component: Checklist
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/cell',
    component: Cell
  },
  {
    path: '/cellswipe',
    component: Cellswipe
  },  
  {
    path: '/messagebox',
    component: Messagebox
  }, 
  {
    path: '/navbar',
    component: Navbar
  }, 
  {
    path: '/tabcontainer',
    component: Tabcontainer
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },  
  {
    path: '/me',
    component: Me,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/about',
    component:About,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/infi',
    component:infi
  },
  {
    path: '/tb',
    component:tb
  },
  {
    path: '/acess',
    component:acess
  },
  {
    path: '/article/:id',
    component:article
  },
  {
    path: '/access',
    component:access
  },
  {
    path: '/profile',
    component: Profile,
    // 在路由的头部添加相关信息
    meta:{
      requireAuth:true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局的前置守卫
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
