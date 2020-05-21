<template>
  <div class='footer'>
    <!-- 上 -->
    <div class="footer_1">
      <!-- 左边logo -->
      <div class="logo">
        <a href=""></a>
      </div>
      <!-- 右边列表 -->
      <div class="link">
        <ul class="clearfix">
          <li class="xl">
            <a href="" class='img'>
              <span>关注:49万</span>
            </a>
            <p>
              <a href="">
                点击静茹<br>美食街微博
              </a>
            </p>
          </li>
          <li class="tx">
            <a href="" class='img'>
              <span>关注:49万</span>
            </a>
            <p>
              <a href="">
                点击进入<br>美食街空间
              </a>
            </p>
          </li>
          <li class="wx">
            <a href="" class='img'>
              <span>关注:49万</span>
            </a>
            <p>
              <a href="">
                点击静茹<br>美食街微信
              </a>
            </p>
          </li>
          <li class="xz">
            <a href="" class='img'>
              <span>关注:49万</span>
            </a>
            <p>
              <a href="">
                点击静茹<br>美食街虾藻
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 中 -->
    <div class="footer_2">
      <dl class="link_2 clearfix">
        <dt>友情链接</dt>
        <dd><a href="">美食</a></dd>
        <dd><a href="">体质测试</a></dd>
        <dd><a href="">伊特</a></dd>
        <dd><a href="">9哭音乐网</a></dd>
        <dd><a href="">365音乐网</a></dd>
        <dd><a href="">网吧</a></dd>
        <dd><a href="">汽车论坛</a></dd>
        <dd><a href="">将康影视</a></dd>
        <dd><a href="">QQ下载</a></dd>
        <dd><a href="">家居网</a></dd>
        <dd><a href="">实践活动</a></dd>
        <dd><a href="">书点啥</a></dd>
        <dd><a href="">地方</a></dd>
        <dd><a href="">为</a></dd>
        <dd><a href="">润体乳</a></dd>
        <dd><a href="">二三线</a></dd>
        <dd><a href="">美书点</a></dd>
      </dl>
    </div>
    <!-- 下 -->
    <div class="footer_3">
      <ul class="clearfix">
        <li><a href="">公司简介</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">产品下载</a></li>
        <li><a href="">加入我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">商务合作</a></li>
        <li><a href="">隐私政策</a></li>
        <li><a href="">网站地图</a></li>
        <li><a href="">友情链接</a></li>
      </ul>
      <p>
        <a href="" class="gray_a">京ICP备14030359号</a>
        <a href="" class="gray_a"><img src="../assets/icon/gh.svg">京公网安备11010802026928</a>
         Copyright © 2003-2020 MEISHIJ CO.,LTD.
      </p>
    </div>
  </div>
</template>
<style scoped>
.footer{
  width: 100%;
  background:url('../assets/img/black75.png') repeat;
  padding-bottom: 60px;
  margin-top: 40px;
}
.footer_1{
  width: 990px;
  margin: 0px auto;
  position: relative;
}
.footer_2{
  width: 990px;
  margin: 0px auto;
}
.footer_3{
  width: 990px;
  margin: 0px auto;
  border-top: 1px solid #444;
  text-align: center;
  padding: 10px 0px 30px 0px
}
.logo{
  height: 196px;
  width: 600px;
  background: url('../assets/img/footer.png') left center no-repeat;
  background-size: 70% auto;
}
.logo>a{
  height: 100%;
  width: 200px;
  display: block;
}
a{
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
.link{
  position: absolute;
  right: 0px;
  top: 30px;
}
.link ul li p a:hover{
  color:blanchedalmond;
}
div.link ul{
  list-style: none;
}
div.link ul li{
  position: relative;
  display: inline-block;
  vertical-align: top;
  background: url('../assets/img/footerlinks.png') no-repeat;
  width: 105px;
  margin-left: 20px;
  height: 160px;
}
div.link ul li p{
  position: absolute;
  z-index: 50;
  bottom: 0px;
  left: 0px;
  width: 105px;
  color: #999;
  line-height: 18px;
  height: 36px;
  padding: 9px 0px;
  text-align: center;
}
div.link ul li p a,.link_2 dd a{color: #999;}
div.link ul li.xl{background-position: 0px 0px;}
div.link ul li.tx{background-position: -105px 0px;}
div.link ul li.wx{background-position: -315px 0px;}
div.link ul li.xz{background-position: -210px 0px;}
.img{
  display: block;
  height: 105px;
  width: 105px;
}
.img span{
  height: 26px;
  line-height: 26px;
  display: block;
  width: 105px;
  color: #fff;
  text-align: center;
  padding-top: 79px;
}
.clearfix:after{
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.link_2{
  padding: 10px 0px;
}
.link_2 dt{
  font-size: 14px;
  color: #fff;
  height: 40px;
  border-bottom: 1px solid #444;
  line-height: 40px;
  float: left;
  display: block;
  width: 990px;
  margin-bottom: 8px;
}
.link_2 dd{
  float: left;
  height: 25px;
  line-height: 25px;
  color: #fff;
  width: 99px;
}
.link_2 dd a:hover{
  color:bisque
}
.footer_3 ul{
  display: inline-block;
  vertical-align: top;
  list-style: none;
}
.footer_3 ul li{float: left;}
.footer_3 ul li a{
  display: inline-block;
  vertical-align: top;
  color: #999;
  padding: 0px 10px;
  line-height: 24px;
  height: 24px;
}
.footer_3 ul li a:hover{
  background:#b00;
}
.footer_3 p{
  height: 24px;
  line-height: 24px;
  color: #666;
}
.gray_a {
  color: #666666;
}
</style>