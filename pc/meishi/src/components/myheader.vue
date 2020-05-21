<template>
<!-- html部分 -->
  <div class="header">
    <div class="header_c">
      <!-- 左边的图片 -->
      <router-link to='/' class='a_logo'>
        <img src="../assets/img/biaoti.png">
      </router-link>
      <!-- 中间的输入框 -->
      <div class='mid'>
        <input type="text" placeholder="请输入菜品/食谱" class='text'>
        <input type="submit" value='搜索' class='submit'>
      </div>
      <!-- 后边的登录按钮 -->
      <div class='uli'>
        <router-link to='/register' class='h_a'>注册</router-link>
        <router-link to='/login' class='h_a'>登录</router-link>
        <router-link to='/' class='h_a'><img src="../assets/icon/weibo.svg">微博登录</router-link>
        <router-link to='/' class='h_a'><img src="../assets/icon/QQ.svg">QQ登录</router-link>    
      </div>
    </div>
  </div>
</template>

<script>
// js部分
export default {
  
}
</script>

<style scoped>
.uli a{
  outline: 0;
}
/* 整个头部样式 */
.header{
  height: 129px;
  background: #c90000 center;
  width: 100%;
  position: relative;
  z-index: 3000;
}
/* header_c样式 */
.header_c{
  width: 990px;
  height: 129px;
  margin: 0px auto;
  position: relative;
  z-index: 3000;
}
/* a标签的样式 */
.header .a_logo{
  display: block;
  height: 129px;
  width: 184px;
  float: left;
}
/* 输入框父元素样式 */
.header .mid{
  height: 129px;
  width: 430px;
  float: left;
  margin-left: 68px;
  position: relative;
  z-index: 1000;
}
/* 输入框样式 */
.header .mid .text{
  height: 36px;
  width: 326px;
  padding: 10px;
  position: absolute;
  top: 46px;
  line-height: 16px;
  overflow: hidden;
  color: #999;
  border: 2px solid #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.header .mid .submit{
    height: 36px;
    width: 80px;
    position: absolute;
    top: 46px;
    line-height: 32px;
    left: 326px;
    border: 2px solid #fff;
    border-left: 0px;
    color: #fff;
    background: #a8000f;
    font-size: 14px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
/* 列表项的布局 */
.header .uli{
  height: 129px;
  float: right;
  display: inline-block;
  vertical-align: top;
  line-height:129px;
}
/* 列表项中router-link标签的样式 */
.header .h_a{
  display: block;
  height: 28px;
  line-height: 35px;
  float: right;
  margin-right: 0px;
  color: #fff;
  margin-top: 50px;
  padding: 0px 10px;
  border-radius: 4px;
  text-decoration: none;
}
.header .h_a:hover{
  cursor: pointer;
  background: pink;
}
</style>