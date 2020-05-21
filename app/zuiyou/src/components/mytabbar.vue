<template>
  <div class='dibu'>
    <mt-tabbar fixed v-model='active'>
      <mt-tab-item id='home'>
        <img src="../assets/icon/zy.png" slot='icon' v-if='active=="home"'>
        <img src="../assets/icon/zyyyy.png" slot='icon' v-else>

        首页
      </mt-tab-item>
      <mt-tab-item id='xx'>
        <img src="../assets/icon/xix.png" slot='icon' v-if='active=="xx"'>
        <img src="../assets/icon/xixx.png" slot='icon' v-else>
        消息
      </mt-tab-item>
      <mt-tab-item id='me'>
        <img src="../assets/icon/wdd.png" slot='icon' v-if='active=="me"' @click='bybc'>
        <img src="../assets/icon/wd.png" slot='icon' v-else>
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
  methods:{
    bybc(){
      location.reload();

    }
  },
  watch:{
    active(value){
      if(value=='home'){
        this.$router.push('/');
      }else if(value=='me'){
        this.$router.push('/me');
      }else if(value=='xx'){
        this.$router.push('/xx');
      }
    }
  }
}
</script>
<style>
.dibu{
  margin-bottom:60px;
}
.mint-tabbar .mint-tab-item.is-selected{
  transform: scale(1.1);
  animation:fadeIn 1s ;
}

</style>