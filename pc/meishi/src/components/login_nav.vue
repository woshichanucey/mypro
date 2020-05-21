<template>
<div>
  <div class="nav">
	<ul id="main_nav" >
		<li class="current">
      <a href="" class="link pngFix"><strong>首页</strong></a>
    </li>
		<li :class="hasmore1" @mouseenter="add_on1" @mouseleave="remove_on1">
			<a href="" class="link pngFix"><strong>菜谱大全</strong></a>
			<div class="dw clearfix" :style='xs1'>
				<div class="dww clearfix dww_cpdq">
					<div class="dwitem clearfix pngFix"><dl class="clearfix"><dt><a href="">家常菜谱</a></dt>		<dd><a href="">家常菜</a></dd>	<dd><a href="">凉菜</a></dd>	<dd><a href="">素食</a></dd>	<dd><a href="">晚餐</a></dd>	<dd><a href="">私家菜</a></dd>	<dd><a href="">热菜</a></dd>	<dd><a href="">海鲜</a></dd>	<dd><a href="">孕妇</a></dd>	<dd><a href="">早餐</a></dd>	<dd><a href="">午餐</a></dd>	<dd><a href="">甜品点心</a></dd>	<dd><a href="">汤粥</a></dd>	<dd><a href="">宝宝食谱-婴儿食谱</a></dd>	<dd><a href="https://www.meishij.net/chufang/diy/gaodianxiaochi/">糕点主食</a></dd>	<dd><a href="https://www.meishij.net/chufang/diy/weibolucaipu/">微波炉</a></dd></dl></div><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/china-food/caixi/">中华菜系</a></dt><dd><a href="https://www.meishij.net/china-food/caixi/chuancai/">川菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/yuecai/">粤菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/dongbeicai/">东北菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/xiangcai/">湘菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/lucai/">鲁菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/zhecai/">浙菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/hubeicai/">湖北菜</a></dd><dd><a href="https://www.meishij.net/china-food/caixi/qingzhencai/">清真菜</a></dd></dl></div><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/china-food/xiaochi/">各地小吃</a></dt>	<dd><a href="https://www.meishij.net/china-food/xiaochi/sichuan/">四川小吃</a></dd>	<dd><a href="https://www.meishij.net/china-food/xiaochi/guangdong/">广东小吃</a></dd>	<dd><a href="https://www.meishij.net/china-food/xiaochi/beijing/">北京小吃</a></dd>	<dd><a href="https://www.meishij.net/china-food/xiaochi/shanxii/">陕西小吃</a></dd></dl></div><br><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/chufang/diy/guowaicaipu1/">外国菜谱</a></dt><dd><a href="https://www.meishij.net/chufang/diy/guowaicaipu1/hanguo/">韩国料理</a></dd><dd><a href="https://www.meishij.net/chufang/diy/guowaicaipu1/japan/">日本料理</a></dd><dd><a href="https://www.meishij.net/chufang/diy/guowaicaipu1/faguo/">法国菜</a></dd><dd><a href="https://www.meishij.net/chufang/diy/guowaicaipu1/yidali/">意大利餐</a></dd></dl></div><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/hongpei/">烘焙</a></dt><dd><a href="https://www.meishij.net/hongpei/dangaomianbao/">蛋糕面包</a></dd><dd><a href="https://www.meishij.net/hongpei/bingganpeifang/">饼干配方</a></dd><dd><a href="https://www.meishij.net/hongpei/tianpindianxin/">甜品点心</a></dd></dl></div><br><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/pengren/">厨房百科</a></dt><dd><a href="https://www.meishij.net/pengren/baipanzhoubian/">摆盘围边</a></dd><dd><a href="https://www.meishij.net/pengren/jiqiao/">烹饪技巧</a></dd><dd><a href="https://www.meishij.net/pengren/chufangmiaozhao/">生活妙招</a></dd><dd><a href="https://www.meishij.net/pengren/chufang/">美食专题</a></dd></dl></div><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/shicai/">食材百科</a></dt><dd><a href="https://www.meishij.net/shicai/shucai_list">蔬菜</a></dd><dd><a href="https://www.meishij.net/shicai/shuiguo_list">水果</a></dd><dd><a href="https://www.meishij.net/shicai/gulei_list">谷类</a></dd></dl></div><div class="bgitem"></div>
				</div>
			</div>
		</li>
		<li :class="hasmore2" @mouseenter="add_on2" @mouseleave="remove_on2">
      <a href="" class="link pngFix"><strong>饮食健康</strong></a>
			<div class="dw clearfix" :style='xs2'>
				<div class="dww clearfix dww_ysjk">
					<div class="dwitem clearfix pngFix"><dl class="clearfix"><dt><a href="https://www.meishij.net/jiankang/">饮食健康</a></dt><dd><a href="https://www.meishij.net/jiankang/changshi/">饮食小常识</a></dd><dd><a href="https://www.meishij.net/jiankang/meirong/">美容瘦身</a></dd><dd><a href="https://www.meishij.net/jiankang/shipinanquan/">食品安全</a></dd><dd><a href="https://www.meishij.net/jiankang/yangsheng/">养生妙方</a></dd><dd><a href="https://www.meishij.net/jiankang/jinji/">饮食禁忌</a></dd><dd><a href="https://www.meishij.net/jiankang/zhongyi/">中医保健</a></dd><dd><a href="https://www.meishij.net/jiankang/muying/">母婴健康饮食</a></dd><dd><a href="https://www.meishij.net/jiankang/yinshixinwen/">饮食新闻</a></dd></dl></div><div class="dwitem clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/">功能性调理</a></dt><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/qingrequhuo/">清热去火</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/jianfei/">减肥</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/qutan/">祛痰</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/wufa/">乌发</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/ziyinbushen/">滋阴补肾</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/jianpikaiwei/">健脾开胃</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/xiaohuabulang/">消化不良</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/qingrejiedu/">清热解毒</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/buyangzhuangyang/">补阳壮阳</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/gongnengxing/zengfei/">增肥</a></dd></dl></div><br><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/">人群膳食</a></dt><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/yunfu/">孕妇</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/laoren/">老人</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/chanfu/">产妇</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/rumu/">哺乳期</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/qingshaonian/">青少年</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/rouer/">幼儿</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/renqunshanshi/xuelingqi/">学龄期儿童</a></dd></dl></div><div class="dwitem dwitem_half clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/">疾病调理</a></dt><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/tangniaobing/">糖尿病</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/tongfeng/">痛风</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/weiyan/">胃炎</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/zhichuang/">痔疮</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/gengnianqi/">更年期</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/jiakangxian/">甲状腺</a></dd></dl></div><br><div class="dwitem clearfix"><dl class="clearfix"><dt><a href="https://www.meishij.net/yaoshanshiliao/zangfu/">脏腑调理</a></dt><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/ganmao/">感冒</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/shentiaoli/">补肾</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/yangweizaoxie/">阳痿早泄</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/buxue/">补血</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/bianmi/">便秘</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/fuxie/">腹泻</a></dd><dd><a href="https://www.meishij.net/yaoshanshiliao/zangfu/houxuehuayu/">活血化瘀</a></dd></dl></div><div class="bgitem"></div>
				</div>
			</div>
		</li>
		<li class="">
      <a href="" class="link pngFix">
        <strong>美食菜单</strong>
      </a>
    </li>
		<li style="position:relative;z-index:100;" class="">
      <a style="padding:0 11px;" href="" class="link pngFix">
        <strong>家居馆</strong>
      </a>
    </li>
		<li class="">
      <a href="" class="link">
        <strong>美食达人</strong>
        <img src="https://st-cn.meishij.net/p2/20160909/20160909164810_443.png" style="display:inline-block;margin-left:-7px;vertical-align:top;margin-top:8px;">
      </a>
      </li>
				<li class="">
          <a href="" class="link pngFix">
            <strong>菜谱视频</strong>
          </a>
        </li>
				<li class="">
          <a href="" class="link pngFix">
            <strong>产品下载</strong>
          </a>
        </li>
			</ul>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      hasmore1:'hasmore',hasmore2:'hasmore',
      xs1:'',xs2:''
    }
  },
  methods:{
    add_on1(){this.hasmore1='hasmore on';this.xs1='display:block;'},
    add_on2(){this.hasmore2='hasmore on';this.xs2='display:block;'},
    remove_on1(){this.hasmore1='hasmore';this.xs1=''},
    remove_on2(){this.hasmore2='hasmore';this.xs2=''},
  }

}
</script>
<style>
.nav {
    height: 76px;
    width: 100%;
    background: #fff;
    box-shadow: 10px 0px 10px rgba(0,0,0,0.3);
    position: relative;
    z-index: 2000;
}
.nav ul {
    height: 76px;
    width: 990px;
    margin: 0px auto;
}
ol, ul {
    list-style: none;
}
.nav ul li {
    display: inline-block;
    vertical-align: top;
    height: 76px;
}
.nav ul li.hasmore {
    background: url('../assets/img/msj_menuarrow.gif') right center no-repeat;
}
.nav ul li a.link {
    display: inline-block;
    vertical-align: top;
    padding: 0px 24px;
    height: 76px;
    line-height: 76px;
    font-size: 18px;
    color: #444;
    font-family: Microsoft Yahei,黑体;
    font-weight: bold;
    position: relative;
}
a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
.nav ul li.current a strong {
    border-bottom: 4px solid #ff3232;
    height: 72px;
    overflow: hidden;
}
.nav ul li a.link strong {
    font-weight: bold;
    display: inline-block;
    vertical-align: top;
    height: 76px;
}
.nav ul li a.link:hover strong{
  cursor:pointer;
}
.nav ul li span.no{
  display:inline-block;
  vertical-align:top;
  padding:0px 30px;
  height:76px;
  line-height:76px;
  font-size:19px;
  color:#444;
  font-family:Microsoft Yahei,黑体;
  font-weight:bold;
}
.nav ul li .dw {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 76px;
    display: none;
}
.nav ul li span.no strong{
  font-weight:bold;
  display:inline-block;
  vertical-align:top;
  height:76px;
  color:#999;
}
.nav ul li.current a strong{
  border-bottom:4px solid #ff3232;
  height:72px;overflow:hidden;
}
.nav ul li.current span strong{
  border-bottom:4px solid #ff3232;
  height:72px;overflow:hidden;color:#999;
}
.nav ul li.on a.link{background:#fafafa;}
.nav ul li .dw .dww {
    width: 930px;
    margin: 0px auto;
    background: #fafafa;
    position: relative;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    padding: 18px 30px 24px;
}
.clearfix {
    zoom: 1;
}
.nav ul li .dw .dwitem {
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    white-space: nowrap;
    padding: 0px 10px 12px 0px;
}
.nav ul li .dw .dwitem_half {
    width: 330px;
}
.nav ul li .dw .dww_cpdq .bgitem {
    background: url('../assets/img/pangx.png') right bottom no-repeat;
    position: absolute;
    right: -60px;
    bottom: -30px;
    height: 226px;
    width: 406px;
}
.nav ul li .dw .dww_ysjk .bgitem {
    background: url('../assets/img/ysjk.png') right bottom no-repeat;
    position: absolute;
    right: -60px;
    bottom: -30px;
    height: 208px;
    width: 325px;
}
.nav ul li .dw .dwitem dl dt {
    display: block;
    height: 24px;
    line-height: 24px;
}
.nav ul li .dw .dwitem dl dd {
    display: inline-block;
    vertical-align: top;
    height: 24px;
    line-height: 24px;
    padding-right: 14px;
}
.nav ul li .dw .dwitem dl dt a {
    color: #ff3232;
    font-size: 17px;
    font-family: Microsoft Yahei,黑体;
}
.nav ul li .dw .dwitem dl dd a {
    color: #999;
    font-size: 12px;
}
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.nav ul li .dw .dwitem dl a:hover {
  background: #ff3232;
  color: #fff;
}
</style>