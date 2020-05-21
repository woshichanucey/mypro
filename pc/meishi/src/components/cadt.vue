<template>
  <div class="container">
    <div id="demoo" class="carousel" data-ride="carousel">
      <!-- 要轮播的图片 -->
      <div class="carousel-inner outLine">
        <!-- 第一张大图片 -->
        <div class="carousel-item active">
          <div class=' bigimage'>
          <!-- 一张小图片 -->
          <div v-for='(item,index) of image' :key='index' class="smallimage">
            <img :src="item" class='iimagee'>
            <!-- 评论部分 -->
            <div>
              <h5>啦啦啦啦</h5>
              <p>评论数</p>
            </div>
          </div>
          <!-- 最后一栏 -->
          <div class='smallimage'>
            <!--  -->
            <h3>热门栏目推荐</h3>
            <ul class='cplist'>
              <li><a href="">最新菜谱</a></li>
              <li><a href="">家常菜</a></li>
              <li><a href="">凉菜</a></li>
              <li><a href="">素食</a></li>
              <li><a href="">早餐</a></li>
              <li><a href="">乌发</a></li>
              <li><a href="">高血压</a></li>
              <li><a href="">烘焙</a></li>
              <li><a href="">韩国料理</a></li>
              <li><a href="">川菜</a></li>
              <li><a href="">粤菜</a></li>
              <li><a href="">湘菜</a></li>
              <li><a href="">甜点</a></li>
              <li><a href="" class="hot">进入菜谱大全 &gt;&gt;</a></li>
            </ul>
            <!--  -->
          </div>
          <!-- 一张小图片 -->
        </div>
        </div>
        <!-- 第二张大图片 -->
        <div class="carousel-item">
        <div class=" bigimage">
          <div v-for='(item,index) of imageco' :key='index' class="smallimage">
            <img :src="item" class='iimagee'>
            <!-- 评论部分 -->
            <div>
              <h5>啦啦啦啦</h5>
              <p>评论数</p>
            </div>
          </div>
          <!-- 最后一栏 -->
          <div class='smallimage'>
            <!--  -->
            <h3>热门栏目推荐</h3>
            <ul class='cplistco'>
              <li><a href="">家常菜</a></li>
              <li><a href="">最新菜谱</a></li>
              <li><a href="">烘焙</a></li>
              <li><a href="">素食</a></li>
              <li><a href="">乌发</a></li>
              <li><a href="">凉菜</a></li>
              <li><a href="">川菜</a></li>
              <li><a href="">早餐</a></li>
              <li><a href="">湘菜</a></li>
              <li><a href="">高血压</a></li>
              <li><a href="">甜点</a></li>
              <li><a href="">韩国料理</a></li>
              <li><a href="">粤菜</a></li>
              <li><a href="">进入菜谱大全 &gt;&gt;</a></li>
            </ul>
            <!--  -->
          </div>
        </div>
        </div>
      </div>
      <!-- 左右箭头 -->
      <a data-slide="prev" href="#demoo" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a data-slide="next" href="#demoo" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>
<style>
/* 最外层宽度 */
.outLine{
  width: 990px;
  margin: 0px auto;
  height: 804px;
  background: url('../assets/img/blank.gif') 0px 0px repeat;
  margin-top:50px;
}
/* 没一张图片样式 */
.iimagee{
  width:232px;
  height:232px;
  overflow: hidden;
}
/* 大图片容器弹性 */
.bigimage{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
}
/* 小容器 */
.smallimage{
  width:232px;
  height:332px;
  background: #fff;
  margin-top:20px;
}
.smallimage h3{
  text-align: center;
  margin-top:10px;
}
.cplist{
  list-style: none;
}
.cplist li{
  float: left;
  margin-left: 5px;
  width: 100px;
  height:30px;
  background:cornsilk;
  margin-top:8px;
  line-height: 30px;
  text-align: center;
}
.cplist li a{
  color:darkolivegreen;
  font-size:13px;
  text-decoration: none;
}
.cplist li:hover{
  background:chocolate;
  cursor: pointer;
}


.cplistco{
  list-style: none;
}
.cplistco li{
  float: left;
  margin-left: 5px;
  width: 100px;
  height:30px;
  background:#e8e8e8;
  margin-top:8px;
  line-height: 30px;
  text-align: center;
}
.cplistco li a{
  color:darkslategray;
  font-size:13px;
  text-decoration: none;
}
.cplistco li:hover{
  background:darksalmon;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      image: {
        i0: require("../assets/img/lunbo/df.jpg"),
        i1: require("../assets/img/lunbo/fg.jpg"),
        i2: require("../assets/img/lunbo/jc.jpg"),
        i3: require("../assets/img/lunbo/mt.jpg"),
        i4: require("../assets/img/lunbo/sn.jpg"),
        i5: require("../assets/img/lunbo/zr.jpg"),
        i6: require("../assets/img/lunbo/zs.jpg")
      },
      imageco: {
        i0: require("../assets/img/lunbo/fg.jpg"),
        i1: require("../assets/img/lunbo/df.jpg"),
        i2: require("../assets/img/lunbo/mt.jpg"),
        i3: require("../assets/img/lunbo/jc.jpg"),
        i4: require("../assets/img/lunbo/zr.jpg"),
        i6: require("../assets/img/lunbo/zs.jpg"),
        i5: require("../assets/img/lunbo/sn.jpg")
      },
    };
  },
};
</script>
