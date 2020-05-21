<template>
  <div>
    <!-- 顶部导航 -->
    <mt-header title='详情页'>
        <router-link to='/' slot='left'>
          <mt-button icon='back'></mt-button>
        </router-link>
    </mt-header>

    <!-- 正文区域 -->
    <div class="qc">
      <div class="qct"> 
        {{subject}}
      </div>
      <div class="qcc" v-html='content'>
      </div>
    </div>

  </div>
</template>
<style scoped>
.qc{
  padding: 15px 10px;
  border-top:0;
}
.qct{
  margin-top:8px;
  font-size: 20px;
  color:#1a1a1a;
  line-height: 1.67;
  text-align: left;
}
.qcc{
  line-height: 1.67;
}
.qcc p{
  margin:1.4em 0;
}
</style>
<script>
export default {
  data(){
    return {
      subject:'',
      content:''
    }
  },
  mounted(){
    var id=this.$route.params.id;
    this.axios.get('/article/'+id).then(res=>{
      this.subject=res.data.article.subject;
      this.content=res.data.article.content;
    });
  }
}
</script>