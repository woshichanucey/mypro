import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

//引入组件myheader
import myheader from './components/myheader.vue'
//引入组件myfooter
import myfooter from './components/myfooter.vue'
//引入导航组件
import loginnav from './components/login_nav.vue'
//引入轮播图组件
import carousel from './components/carousel.vue'
//引入轮播图组件
import cadt from './components/cadt.vue'


//将myheader做成全局组件
Vue.component('myheader',myheader);
//将myfooter做成全局组件
Vue.component('myfooter',myfooter);
//将导航做成全局组件
Vue.component('loginnav',loginnav);
//将轮播图做成全局组件
Vue.component('carousel',carousel);
//将轮播图做成全局组件
Vue.component('cadt',cadt);


axios.defaults.baseURL = 'http://127.0.0.1:5000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
