<template>
  <div>
    <h1>{{$store.state.salary}}</h1>
    <button @click='inc'>增加</button>
    <button @click='dec'>减少</button>
  </div>
</template>
<script>
export default {
  methods:{
    inc(){
      this.$store.commit('add');
    },
    dec(){
      this.$store.commit('minus');
    }
  }
}
</script>