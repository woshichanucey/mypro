<template>

<!-- 轮播图开始 -->
<div class="index_zzw container">
  <!-- 轮播图片 -->
  <div class="index_zzw_main " style="left:-1980px;">
    <div class="zzw_item zzw_item_3">
      <h3 class="bbtitles bbtitles_zzw" style="display:block">
        {{context}}
      </h3>
      <!-- 轮播图片 -->
      <div class="carousel" id='demo' data-ride='carousel'>
      <div class="carousel-inner">
      <!-- 晚餐 -->
      <ul class="clearfix carousel-item active">
          <!-- 豆芽 -->
          <li>
              <a href="" title="葱油鸡丝豆芽" class="img">
              <img alt="葱油鸡丝豆芽" src="../assets/img/cy.jpg">
            </a>
            <div class="c pngFixb">
              <h2>
                <a href="" title="葱油鸡丝豆芽">葱油鸡丝豆芽</a>
              </h2>
              <strong>美味又低卡，减肥者最爱</strong>
            </div>
          </li>
          <!-- 凉拌面 -->
          <li>
            <a href="" title="酱拌凉拌面" class="img">
              <img alt="酱拌凉拌面" src="../assets/img/jb.jpg">
            </a>
            <div class="c pngFixb">
              <h2>
                <a href="" title="酱拌凉拌面">酱拌凉拌面</a>
              </h2>
              <strong>筋道爽滑，鲜香麻辣</strong>
            </div>
          </li>
          <!--凉拌菜 -->
          <li>
            <a href="" title="家常凉拌菜" class="img">
              <img alt="家常凉拌菜" src="../assets/img/fq.jpg">
            </a>
            <div class="c pngFixb">
              <h2>
                <a href="" title="家常凉拌菜">家常凉拌菜</a>
              </h2>
              <strong>爽口开胃，解腻下饭</strong>
            </div>
          </li>
      </ul>
      <!-- 中餐 -->
      <ul class="clearfix carousel-item">
        <!-- 毛豆 -->
        <li class=''>
          <a href="" title="陈皮毛豆" class="img">
            <img alt="陈皮毛豆" src="../assets/img/md.jpg">
          </a>
          <div class="c pngFixb">
            <h2>
              <a href="" title="陈皮毛豆">陈皮毛豆</a>
            </h2>
            <strong>颜色青翠，美味诱人</strong>
          </div>
        </li>
        <!-- 牛肉 -->
        <li class=''>
          <a href="" title="卤牛肉" class="img">
              <img alt="卤牛肉" src="../assets/img/nr.jpg">
            </a>
            <div class="c pngFixb">
              <h2>
                <a href="" title="卤牛肉">卤牛肉</a>
              </h2>
              <strong>香卤入味，下酒极佳</strong>
            </div>
        </li>
        <!-- 排骨汤 -->
        <li class=''>
            <a href="" title="玉米排骨汤" class="img">
              <img alt="玉米排骨汤" src="../assets/img/ym.jpg">
            </a>
            <div class="c pngFixb">
              <h2>
                <a href="" title="玉米排骨汤">玉米排骨汤</a>
              </h2>
              <strong>滋补靓汤，美容又养颜</strong>
            </div>
        </li>
      </ul>
      <!-- 早餐 -->
      <ul class="clearfix carousel-item">
        <!-- 剁椒鱼头 -->
        <li>
          <a href="" title="剁椒鱼头" class="img">
            <img alt="剁椒鱼头" src="../assets/img/yt.jpg">
          </a>
          <div class="c pngFixb">
            <h2>
              <a href="" title="剁椒鱼头">剁椒鱼头</a>
            </h2>
            <strong>鲜嫩美味，辣爽过瘾</strong>
          </div>
        </li>
        <!-- 黑芝麻酱烙饼 -->
        <li>
          <a href="" title="黑芝麻酱烙饼" class="img">
            <img alt="黑芝麻酱烙饼" src="../assets/img/hzm.jpg">
          </a>
          <div class="c pngFixb">
            <h2>
              <a href="" title="黑芝麻酱烙饼">黑芝麻酱烙饼</a>
            </h2>
            <strong>鲜嫩美味，辣爽过瘾</strong>
          </div>
        </li>
        <!-- 香葱火腿花卷 -->
        <li>
          <a href="" title="香葱火腿花卷" class="img">
            <img alt="香葱火腿花卷" src="../assets/img/xc.jpg">
          </a>
          <div class="c pngFixb">
            <h2>
              <a href="" title="香葱火腿花卷">香葱火腿花卷</a>
            </h2>
            <strong>口感松软，葱香美味</strong>
          </div>
        </li>  
      </ul>
      </div>
      <!-- 左右箭头 -->
      <a data-slide='prev' href="#demo" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a data-slide='next' href="#demo" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
      <!-- 轮播指示器 -->
      <ul class="carousel-indicators">
        <li data-target='#demo' data-slide-to='0'  class="active"></li>
        <li data-target='#demo' data-slide-to='1' ></li>
        <li data-target='#demo' data-slide-to='2' ></li>
      </ul>
      </div>
    </div>
  </div>
</div>
<!-- 轮播图结束 -->

</template>
<style>
a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    background: transparent;
}
.index_zzw {
    height: 382px;
    width: 990px;
    margin: 0px auto;
    position: relative;
    margin-top: 120px;
}
.index_zzw_main {
    width: 5000px;
    position: absolute;
    height: 330px;
}
.zzw_item {
    width: 990px;
    height: 330px;
    position: absolute;
}

.zzw_item_3 {
    left: 1980px;
    top: 0px;
}

.bbtitles_zzw {
    position: absolute;
    top: -120px;
    width: 990px;
    z-index: 200;
}
.bbtitles {
    height: 120px;
    line-height: 120px;
    font-size: 24px;
    color: #222;
    text-align: center;
    font-family: Microsoft Yahei;
}
.clearfix {
    zoom: 1;
}
ol, ul {
    list-style: none;
}
.zzw_item ul li {
    float: left;
    height: 330px;
    width: 330px;
    overflow: hidden;
    position: relative;
}
.zzw_item ul li a.img {
    display: block;
    height: 330px;
    width: 330px;
}
img{border:0}
.zzw_item ul li div.c {
    position: absolute;
    height: 78px;
    width: 330px;
    left: 0px;
    bottom: 0px;
}
.zzw_item ul li div.c h2 {
    height: 36px;
    line-height: 36px;
    padding-top: 12px;
    text-indent: 20px;
}
.zzw_item ul li div.c h2 a {
    color:blanchedalmond;
    font-size: 24px;
    font-family: Microsoft Yahei;
    text-decoration: none;
}

.zzw_item ul li div.c strong {
    line-height: 18px;
    color:burlywood;
    padding-left: 20px;
}

.carousel-control-prev,.carousel-control-next{
  width:4%;height:20%;
  background:#069;
  top:40%;border-radius: 5px;

}
.carousel-control-prev{left:5px;}
.carousel-control-next{right:5px;}
.zzw_item .carousel-indicators li{
  width:0.8rem;
  height:0.8rem;
  border-radius:50%;
  margin:0 0.6rem;
  cursor: pointer;
}
.carousel-indicators .active{
  background: #0aa1ed;
}
.pngFixb{
  background: #666;
  opacity: 0.8;
}


</style>

<script>
export default {
  data(){
    return {
      context:'今日午餐推荐：快手凉拌菜，美味又省时',
    }
  }
}
</script>