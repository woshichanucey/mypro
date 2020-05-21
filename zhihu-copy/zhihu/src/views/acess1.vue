<template>
  <div>
    <h1>{{$store.state.username}}</h1>
    <h1>员工工资:{{$store.state.salary}}</h1>
    <hr>
    <h2>库存中有{{this.$store.getters.getnum}}件商品，列表如下</h2>
    <p v-for='(item,index) of $store.state.product' :key='index'>
      商品id:{{index+=1}}
      商品名称:{{item.proname}}
      商品价格:{{item.price}}
    </p>
  </div>
</template>