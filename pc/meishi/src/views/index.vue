<template>
<div>
  <!-- 头部 -->
  <myheader></myheader>
  <!-- 导航 -->
  <loginnav></loginnav>
  <!-- 轮播图 -->
  <carousel></carousel>

  <!-- 标签页开始 -->
    <div>
      <h3 class="bbtitles">
        五月，养心健脾，清热祛湿
      </h3>
    </div>
    <div class="index_sc_w">
      <dl class="clearfix">
        <!-- 水果 -->
        <dd class="index_sc_dd" :class='c_c1' @mouseenter="add_c1">
          <a href="javascript:;" class='link'>水果</a>
          <div class="index_sc_con">
            <div class="c">
              <a href="javascript:;" v-for='(item,index) of imgsg' :key='index'>
                <img :src='item'>
                <span class="name pngFix">
                  <em class="notz"></em><strong>芒果</strong>
                </span>
              </a>
            </div>
				  </div>
        </dd>
        <!-- 蔬菜 -->
        <dd class="index_sc_dd" :class='c_c2' @mouseenter="add_c2">
          <a href="javascript:;" class='link'>蔬菜</a>
          <div class="index_sc_con" >
            <div class="c">
              <a href="javascript:;" v-for='(item,index) of imgsc' :key='index'>
                <img :src='item'>
                <span class="name pngFix">
                  <em class="notz"></em><strong>黄瓜</strong>
                </span>
              </a>
            </div>
				  </div>
        </dd>
      </dl>

    </div>
  <!-- 标签页结束 -->

  <!-- 动态轮播图开始 -->
    <h4 class='woxiang'>
      掳爱来看看圣诞节开始考虑的精髓
    </h4>
    <cadt></cadt>
  <!-- 动态轮播图结束 -->

  <!-- 新闻部分开始 -->
    <h3 class="bbtitles">
      健康新闻
    </h3>
    <div class="index_health clearfix">
      <!-- 动态加载数据 -->
      <div class="index_health_di" v-for='(item,index) of data' :key='index'>
        <router-link :to='`/details/${item.id}`'>
				<img :src='item.image' style='float:left;    border-radius: 20px;overflow: hidden;'>
        <div class='index_health_di_sub'>{{item.subject}}</div>
        </router-link>
			</div>
      <!-- 动态加载数据 -->
    </div>
  <!-- 新闻部分结束 -->

  <!-- 脚步 -->
  <myfooter></myfooter>
</div>
</template>
<script>
export default {
  data(){
    return {
      // 标签页水果图片
      imgsg:{
        f1:require('../assets/img/tabbar/ht.jpg'),
        f2:require('../assets/img/tabbar/hlg.jpg'),
        f3:require('../assets/img/tabbar/mg.jpg'),
        f4:require('../assets/img/tabbar/xg.jpg'),
        f5:require('../assets/img/tabbar/tg.jpg'),
        f6:require('../assets/img/tabbar/xj.jpg'),
        f7:require('../assets/img/tabbar/youtiao.jpg'),
        f8:require('../assets/img/tabbar/mg.jpg')
      },
      // 标签页蔬菜图片
      imgsc:{
        f1:require('../assets/img/tabbar/hg.jpg'),
        f2:require('../assets/img/tabbar/mogu.jpg'),
        f3:require('../assets/img/tabbar/sg.jpg'),
        f4:require('../assets/img/tabbar/jd.jpg'),
        f5:require('../assets/img/tabbar/jxc.jpg'),
        f6:require('../assets/img/tabbar/xhs.jpg'),
        f7:require('../assets/img/tabbar/kg.jpg'),
        f8:require('../assets/img/tabbar/qz.jpg')
      },
      // 标签页变换属性
      c_c1:'index_sc_dd_c',
      c_c2:'',
      // 新闻数组
      data:[],
      type:['recommend','life']
    }
  },
  methods:{
    // 标签页变换
    add_c1(){
      this.c_c2='';
      this.c_c1='index_sc_dd_c';
    },
    add_c2(){
      this.c_c1='';
      this.c_c2='index_sc_dd_c';
    }
  },
  mounted(){
    //向WEB服务器发送AJAX请求，以获取数据
    for(var key of this.type){
      this.axios.get(`/articles?type=${key}`)
      .then(res=>{
        //完成图像的动态加载
        var data=res.data.results;
        data.forEach(item=>{
          if(item.image!=null)
          item.image=require(`../assets/img/xinwen/${item.image}`);
          this.data.push(item);
        });
      });
      console.log(this.data);
    }
    
  }
}
</script>
<style>
/* 标签页部分 */
  .bbtitles {
      height: 120px;
      line-height: 120px;
      font-size: 24px;
      color: #222;
      text-align: center;
      font-family: Microsoft Yahei;
      position: relative;
      display: block;
  }
  .bbtitles span.paixu {
      line-height: 48px;
      position: absolute;
      right: 0px;
      top: 36px;
      display: block;
      height: 48px;
      font-size: 12px;
      font-family: 宋体;
      color: #666;
  }
  .bbtitles span.paixu a {
      color: #666;
  }
  a {
      text-decoration: none;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      background: transparent;
  }
  .index_sc_w{
    width: 990px;
    background: #fff;
    position: relative;
    height: 193px;
    margin:0 auto;
  }
  .index_sc_w dl{
    padding: 0px 20px;
    border-bottom: 0px solid #eee;
    list-style: none;
  }
  .index_sc_dd_c{
    background: #ff3232;
    height: 30px;
    margin-top: 15px;
  }
  .index_sc_dd {
    float: left;
    display: inline-block;
    vertical-align: top;
    line-height: 60px;
    color: #333;
    font-size: 14px;
  }
  .index_sc_dd a.link {
    color: #666;
    float: left;
    display: inline-block;
    vertical-align: top;
    height: 60px;
    line-height: 60px;
    padding: 0px 15px;
  }
  .index_sc_dd_c a.link {
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
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
  .index_sc_dd .index_sc_con {
    display: none;
  }
  .index_sc_dd_c .index_sc_con {
    display: block;
  }
  .index_sc_con {
    height: 117px;
    width: 990px;
    background: #fff;
    position: absolute;
    left: 0px;
    top: 60px;
    padding: 0px 0px 15px 20px;
  }
  .index_sc_con div.c {
    height: 117px;
  }
  .index_sc_con div.c a {
    display: block;
    height: 117px;
    width: 117px;
    float: left;
    margin-right: 2px;
    position: relative;
    overflow: hidden;
  }
  .index_sc_con div.c a img {
    display: block;
    height: 117px;
    width: 117px;
  }
  img {
    border: 0;
  }
  .index_sc_con div.c a span.name {
    width: 117px;
    height: 28px;
    line-height: 28px;
    background: url('../assets/img/white70.png') repeat;
    position: absolute;
    left: 0px;
    top: 89px;
    color: #333;
    display: inline-block;
    vertical-align: top;
    *display: inline;
    *zoom: 1;
  }
  .index_sc_con div.c em.notz {
    background: #999;
    height: 10px;
    width: 10px;
    overflow: hidden;
    margin: 9px;
    display: inline-block;
    vertical-align: top;
  }
  .index_sc_con div.c a span.name strong {
    display: inline-block;
    vertical-align: top;
    color: #333;
  }
/* 标签页部分 */

/* 动态轮播图部分 */
  .woxiang{
    text-align: center;
    padding-top:60px;
  }
/* 动态轮播图部分 */

/* 新闻部分 */
  .index_health {
    width: 990px;
    display:flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    align-content: center;
  }
  .index_health_di{
    flex:40%;
    margin:10px 5px;
    float: left;
    transition:1s;
  }
  .index_health_di:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
  .index_health_di_sub{
    float: left;
    font-size:12px;
    margin-top:50px;
    margin-left:10px;
  }
/* 新闻部分 */

.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.clearfix {
    zoom: 1;
}
</style>
