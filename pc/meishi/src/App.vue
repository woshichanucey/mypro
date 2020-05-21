<template>
  <div id="app">
    <!-- 头部组件 -->
    <!-- <myheader></myheader> -->
    <!-- 网页主图 -->
    <router-view/>
    <!-- 脚部组件 -->
    <!-- <myfooter></myfooter> -->
  </div>
</template>

<style>
*{margin:0;padding:0;}
body{
  background: #fae8c8;
  position: relative;
  overflow-x: hidden;
  font-size:12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

</style>
