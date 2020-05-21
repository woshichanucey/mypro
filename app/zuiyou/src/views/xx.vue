<template>
<div>
  <!-- 头部区域 -->
  <mt-header title="我的消息" class='wdtb'>
    <!-- 左侧关注 -->
    <div slot="left">
      <mt-button @click="chulai2">提醒</mt-button>
      <!-- 遮罩层 -->
      <mt-popup v-model="popupVisible2" position="top" popup-transition="popup-fade">
        <!-- 矩阵 -->
        <div style='overflow:hidden;position:relative' :style="'width:'+screenWidth+'px;'+'height:'+sH+'px'">
          <div class='tixing'>
            <p>是否打开提醒</p>
            <mt-switch v-model="xuanze"></mt-switch>
          </div>
          <div class='tixing'>
            <p>是否打开定位</p>
            <mt-switch v-model="xuanze2"></mt-switch>
          </div>
          <div class='bjtp'>
            <img src="../assets/tx/hlw.jpg">
            <img src="../assets/tx/kl.jpg">
          </div>
        </div>
      </mt-popup>
    </div>
    <!-- 右侧搜索 -->
    <div slot="right">
      <span @click="chulai"><img src="../assets/icon/ssss.png">搜索</span>
      <!-- modal层 -->
      <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade">
        <!-- 搜索框 -->
        <div style='height:200px;' :style="'width:'+screenWidth+'px'">
          <mt-search v-model="value" autofocus height='30vh'>
          </mt-search>
        </div>
      </mt-popup>
    </div>
  </mt-header>
     
  <!-- 内容开始 -->
  <div class="xx_content">

    <!-- 循环每一个用户 -->
    <div class='xx_content_item' v-for="(item,index) of user" :key=index>
      <!-- 左边的用户信息 -->
      <div class="content_item_left">
        <!-- 头像 -->
        <div class="pl_tx">
          <img v-lazy="item.pic">
        </div>
        <!-- 用户信息 -->
        <div class="pl_xinxi">
          <p ><span style="color:#00a1ed;font-size:12px">@{{item.uname}} </span><span style="font-size:12px;">&nbsp;{{item.zannum==1?'赞了你':'多人赞了你'}}</span></p>
          <p><img src="../assets/icon/za.png"> <span style="color:red"> +{{item.zannum}}</span></p>
          <p class='pl_time'>{{item.time}}</p>
        </div>
      </div>
      <!-- 右边的评论区域 -->
      <div class="content_item_right">
        <div class="right_pl">
          <p>{{item.pl}}</p>
        </div>
      </div>
    </div>

    

  </div>
  <!-- 内容结束 -->

  <!-- 底部选项卡 -->
  <div><tabbar :cg='cg'></tabbar></div>
</div>
</template>
<script>
import tabbar from '../components/mytabbar'
export default {
  //注册子组件
  components:{
    tabbar
  },
  data(){
    return {
      // 头部区域变量
        cg:'xx',
        popupVisible:false,
        popupVisible2:false,
        value:'',
        screenWidth:'367',
        sH:'367',
        xuanze:true,
        xuanze2:false,
      // 内容区域变量
        user:[],
        page:1,
        ssArray:[]
    }
  },
  watch:{
    value(){
      //获取搜索的内容
      let ss=this.value;
      let arr=[];
      //遍历评论数组，查找是否含有关键词
      this.ssArray.forEach((elem,i)=>{
        if(elem.search(ss)==1){
          arr.push(elem);
        }
      });
      console.log(arr);
      // 
    }
  },




  methods:{
    // 头部区域方法
      chulai(){
        this.popupVisible=true;
        this.screenWidth=window.screen.width;
      },
      chulai2(){
        this.popupVisible2=true;
        this.screenWidth=window.screen.width;
        this.sH=(window.screen.height)/2;
      },
    // 内容区域方法

    // 滚动分页
    gundong(){
      //获取滚动条的高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
      if(scrollTop==217){
        // console.log('别在动力');
        this.page++;
        this.getSxData();
      }
    },
    // 发送请求获取分页
    getSxData(){
      //显示加载中
      this.$indicator.open('一大波消息正在赶来');
      // 加载用户信息详情表
      this.axios.get(`/user?page=${this.page}`).then(res=>{
        if(res.data.code==1){
          let user=res.data.result;
          // console.log(user);
          user.forEach(item => {
            item.pic=require(`../assets/tx/${item.pic}`);
            this.ssArray.push(item.pl);
            let day=Math.floor(Math.random()*32);
            if(day<10){
              day='0'+day;
            }
            item.time=item.time.split('-')[1]+'/'+day;
            this.user.push(item);
            //关闭加载中
            this.$indicator.close();

          });
          // console.log(this.user);
        }else{
          this.$toast('加载完成-没有更多了');
        }
      });
    }

  },
  mounted(){



    // 获取数据
    this.getSxData();

    // 监听滚动事件
    window.addEventListener('scroll',this.gundong);
  }
}
</script>

<style> 
div header.wdtb{
  background-color: chocolate;
}
/* 头部样式 */
  .mint-search {
    height:30vh !important;
  }
  .tixing{
    width:100%;
    color:coral;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dotted #f00;
  }
  .tixing p{
    margin-left: 10px;
  }
  .mint-switch{
    margin: 10px;
  }
  .bjtp{
    width:100%;
    height: 160px;
    position: absolute;
    bottom:0;
  }
  .bjtp img{
    width:50%
  }

/* 内容样式 */
.xx_content{
  width:100%;
  border-top:5px solid #e8e8e8;
  margin-top:5px;
}
.xx_content_item{
  width:95%;
  height:70px;
  border-bottom:1px solid rgb(223, 205, 133);
  margin:5px auto;
  padding: 5px;
  position: relative;
}
.content_item_left{
  width:60%;
  /* border:1px solid pink; */
  height:100%;
  position: relative;
}
.content_item_right{
  width:30%;
  /* border:1px solid blue; */
  height:100%;
  position: absolute;
  right:0;
  top:0;
}
.right_pl{
  width: 80%;
  background: #e8e8e8;
  height:90%;
  margin: 0 auto;
  margin-top:5px;
  border-radius: 10px;
}
.pl_tx{
  width:50px;
  height:50px;
  border-radius: 50%;
  position:absolute;
  top:14%;
  left:3%;
  overflow: hidden;
  border:1px solid rgb(50, 100, 5);
}
.pl_tx img{
  width:100%;
}
.pl_xinxi{
  /* border:1px solid #ccf; */
  width:70%;
  height:100%;
  position: absolute;
  right:0;
  font-size: 15px;
  line-height: 24px;
}
.pl_time{
  font-size:10px;
}
.right_pl p{
  padding:5px;
  font-size: 12px;
  line-height:20px;
  height: 80%;
  overflow: hidden;
}


</style>