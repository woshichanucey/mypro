<template>
  <div>
    <ul infinite-scroll-distance='10' v-infinite-scroll='loadMore' infinite-scroll-disabled='busy'>
      <li v-for='(item,index) of list' :key='index'>
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){return {
    list:50,busy:false
  }},
  methods:{
    loadMore(){
      this.busy=true;
      setTimeout(()=>{
        this.list+=30;
        this.busy=false;
      },1000)
    }
  }
}
</script>