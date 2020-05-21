<template>
<div>

    <input type="file" id='file'>
<button @click='sss'>看看</button>
</div>
</template>
<script>
export default {
  data(){
    return{
      value:"document.getElementById('file').value"
    }
  },
  methods:{
    sss(){
      // this.value=document.getElementById('file').value
      console.log(this.value);
    }
  }
}
</script>




<style>



</style>