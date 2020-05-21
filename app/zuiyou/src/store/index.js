import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用户id
    id:sessionStorage.getItem('id')?sessionStorage.getItem('id'):0,
    //存储用户名
    username:sessionStorage.getItem('username')?sessionStorage.getItem('username'):'',
    //用户是否登录
    isLogin:sessionStorage.getItem('isLogin')?sessionStorage.getItem('isLogin'):false,
    //用户头像
    headimg:sessionStorage.getItem('headimg')?sessionStorage.getItem('headimg'):0
  },
  getters:{
    
  },
  mutations: {
    logined(state,payload){
      state.id=payload.id;
      state.username=payload.username;
      state.hradimg=payload.headimg;
      state.isLogin=true;
    },
    loginout(state){
      state.id=0;
      state.username='';
      state.headimg='';
      state.isLogin=false;

      sessionStorage.removeItem('id');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('headimg');
      sessionStorage.removeItem('isLogin');
    }
  },
  actions: {
  },
  modules: {
  }
})
