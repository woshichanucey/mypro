<template>
  <div>
    <mt-tabbar fixed v-model='cg'>
      <mt-tab-item id='home'>
        <img src="../../assets/images/hongbao.png" slot='icon' v-if='cg=="home"'>
        <img src="../../assets/images/dizhi.png" slot='icon' v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id='cate'>
        <img src="../../assets/images/paobu.png" slot='icon' v-if='cg=="cate"'>
        <img src="../../assets/images/dizhi_1.png" slot='icon' v-else>
        分类
      </mt-tab-item>
      <mt-tab-item id='sc'>
        <img src="../../assets/images/pingjia.png" slot='icon' v-if='cg=="sc"'>
        <img src="../../assets/images/about.png" slot='icon' v-else>
        购物车
      </mt-tab-item>
      <mt-tab-item id='me'>
        <img src="../../assets/images/network.png" slot='icon' v-if='cg=="me"'>
        <img src="../../assets/images/focus.png" slot='icon' v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){return {
    cg:'home'
  }}
}
</script>
<style scoped>

</style>