<template>
  <div>
    <mt-tabbar fixed v-model='active'>
      <mt-tab-item id='home'>
        <img src="../assets/images/hongbao.png" slot='icon' v-if='active=="home"'>
        <img src="../assets/images/dizhi.png" slot='icon' v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id='cate'>
        <img src="../assets/images/paobu.png" slot='icon' v-if='active=="cate"'>
        <img src="../assets/images/dizhi_1.png" slot='icon' v-else>
        分类
      </mt-tab-item>
      <mt-tab-item id='sc'>
        <img src="../assets/images/pingjia.png" slot='icon' v-if='active=="sc"'>
        <img src="../assets/images/about.png" slot='icon' v-else>
        购物车
      </mt-tab-item>
      <mt-tab-item id='me'>
        <img src="../assets/images/network.png" slot='icon' v-if='active=="me"'>
        <img src="../assets/images/focus.png" slot='icon' v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  props:['cg'],
  data(){return {
    active:this.cg
  }},
  watch:{
    active(value){
      if(value=='home'){
        this.$router.push('/');
      }else if(value=='me'){
        this.$router.push('/me');
      }
      console.log(value);
    }
  }
}
</script>
<style scoped>

</style>