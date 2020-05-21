<template>
<div>
  <myheader></myheader>
  <!-- 商品详情 -->
  <div class='zhengwen'>
    <!-- 标题 -->
    <h3>{{title}}</h3>
    <!-- 内容 -->
    <div v-html='content'></div>
  </div>
  <!-- 商品详情 -->
  <div></div>
  <myfooter></myfooter>
</div>
</template>
<style>
.zhengwen{
  width: 900px;
  height:900px;
}
</style>
<script>
export default {
  data(){
    return {
      title:'',
      content:''
    }
  },
  mounted(){
    var id=this.$route.params.id;
    this.axios.get('/details/'+id).then(res=>{
      this.title=res.data.details.subject;
      this.content=res.data.details.content;
    });
  }
}
</script>