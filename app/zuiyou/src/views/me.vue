<template>
<div>
  <!-- 头部区域 -->
  <mt-header title="个人主页">
    <!-- 右侧设置 -->
    <div slot="right" class='setting'>
      <router-link to="/xx">
        <mt-button>设置</mt-button>
      </router-link>
    </div>
  </mt-header>
     
  <!-- 内容开始 -->
    <!-- 个人信息 -->
    <div class="back" :class='changeBjtp'>
      <div class="back_tx">
        <img :src="txImg">
      </div>
      <div class="back_name">{{username}}</div>
      <div class="back_ms" :class="changeZtYs">个人描述 : 这个人很懒~什么都没留下</div>
    </div>

    <!-- 第下内容 -->
    <div class="gr_content">
      <!-- 会员中心 -->
      <div class="hyzx">会员中心<p>了解会员权益</p></div>
      <!-- 轮播图 -->
      <div class="carousel">
        <mt-swipe :auto="3000">
          <mt-swipe-item>
            <img src="../assets/images/gg.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src='../assets/images/gg2.jpg'>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/gg3.jpg">
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <!-- 单元格 -->
      <!-- 个人隐私 -->
      <mt-cell title="个人隐私"> 
        <img src="../assets/icon/yc.png" slot='icon'>
        <mt-button plain size='small' type='primary' @click="inYc" v-if='!isYc'>隐藏自己</mt-button>
        <mt-button plain size='small' type='primary' @click="inXs" v-else>显示自己</mt-button>
        <mt-actionsheet v-model="tc" :actions="actions">
        </mt-actionsheet>
        <mt-actionsheet v-model="tc2" :actions="actions2">
        </mt-actionsheet>
      </mt-cell>

      <!-- 最右商城 -->
      <mt-cell title="商城" is-link to=''>
        <img src="../assets/icon/ccc.png" slot='icon'>
        <span style="color: green;font-size:13px">每天精选限时优惠</span>
      </mt-cell>

      <!-- 帮组与反馈 -->
      <mt-cell title="帮助与反馈" is-link to=''>
        <img src="../assets/icon/notebook.png" slot='icon'>
      </mt-cell>
      
      <!-- 滑动单元格 -->
      <mt-cell-swipe title="右滑退出登录" is-link
        :right="[{
          content: '退出',
          style: { background: 'red', color: '#fff' },
          handler: () => {this.boubao()}
        }]">
        <img src="../assets/icon/tcc.png" slot="icon">
      </mt-cell-swipe>
    </div>
  <!-- 内容结束 -->

  <!-- 底部选项卡 -->
  <div><tabbar :cg='cg'></tabbar></div>
</div>
</template>

<script>
import tabbar from '../components/mytabbar';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  //注册子组件
  components:{
    tabbar
  },
  computed:{
    ...mapState([
      'id','username','headimg'
    ])
  },
  data(){
    return {
      cg:'me',
      tc:false,
      tc2:false,
      isYc:true,
      actions:[{name:'进入隐藏模式',method:()=>{this.isYc=true}}],
      actions2:[{name:'退出隐藏模式',method:()=>{this.isYc=false}}],
      changeBjtp:'',
      changeZtYs:'',
      wdtx:'',
      txImg:''
    }
  },
  methods:{
    ...mapMutations({
      'loginout':'loginout'
    }),
    inYc(){
      this.tc=true;
    },
    inXs(){
      this.tc2=true;
    },
    boubao(){
      console.log('退出成功');
      this.loginout();
      this.$router.push('/login?path=%2Fme');

    }
  },
  watch:{
    // 改变背景图片
    isYc(){
      if(this.isYc){
        this.changeBjtp='';
        this.changeZtYs='';
      }else{
        this.changeZtYs='changeZt';
        this.changeBjtp='changeBj';
      }
    }
  },


  //挂载阶段
  mounted(){
    this.txImg=require('../assets/tx/'+this.headimg);
  },
  
}
</script>

<style> 
/* 单元格 */
.changeBj{
  background: url('../assets/images/bjtp.gif') !important;
}
.changeZt{
  color:ghostwhite !important;
}
/* 其他页面样式 */
header.mint-header{
  background: #00ae1d;
}
.setting a{
  color:#fff;
}
.back{
  width:100%;
  height: 160px;
  background:url('../assets/images/beij.jpg') no-repeat;
  background-position:63% 72%;
  background-size: 100%;
  position: relative;
  font-size: 12px;
}
.gr_content{
  width:100%;
  border-radius:10px 10px 0 0;
  overflow: hidden;
  position: absolute;
  top:28%;
}
.back_tx{
  width: 60px;
  height: 60px;
  border:1px solid rgb(69, 82, 12);
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top:40px;left:20px;
}
.back_tx img{
  width: 100%;
}
.back_name{
  width: 200px;
  height: 30px;
  /* border:1px solid #f00; */
  position: absolute;
  top:33px;left:115px;
  color:rgb(230, 210, 170);
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  font-weight: bold;
}
.back_ms{
  width: 200px;
  height: 80px;
  position: absolute;
  top:65px;left:115px;
  color:rgb(43, 176, 209);
  line-height: 35px;
}
.hyzx{
  width:100%;
  height:30px;
  background:gold;
  line-height: 30px;
  color:olive;
  padding-left:10px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
.hyzx p{
  width:100px;
  float:right;
  margin-right: 27px;
  font-weight:lighter;
  font-size: 14px;
}
.carousel{
  width:90%;
  height:60px;
  border:1px solid #f00;
  margin:5px auto;
  border-radius:10px;
  overflow: hidden;
}
.carousel .mint-swipe-item img{
  width:100%;
  margin-top: -50px;
}
.carousel .mint-swipe-indicator{
  background: #fff;
  opacity: 0.5;
  margin: -6px 3px;
}
.carousel .mint-swipe-indicator.is-active{
  background:coral;
}
</style>


