<template>
<div>
  <!-- 顶部选项卡 -->
  <div class="navbar">
    <mt-navbar v-model="selected" :fixed='fixed'>
      <mt-tab-item v-for='(category,index) of category' :key='index' :id="category.category_info">{{category.category_name}}</mt-tab-item>
    </mt-navbar>
  </div>


  <!-- 面板区域开始 -->
  <!-- 下来刷新 -->
  <mt-loadmore :top-method="loadTop" ref="loadmore"  @top-status-change="handleTopChange">
  <!-- 无限滚动 -->
  <div infinite-scroll-distance='10' v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' :infinite-scroll-immediate-check='true' class='main'>
    <!-- 面板区域开始 -->
    <mt-tab-container v-model="selected" class='top-navbar'>
      <mt-tab-container-item  v-for='(category,index) of category' :key='index' :id="category.category_info">

        <!-- 主体 -->
        <div class="cell" v-for="(item,index) in data" :key="index">
            <!-- 随机用户 -->
            <div class="cellUser">
              <!-- 用户头像 -->
              <div class="userimg">
                <img :src="users[index].image">
              </div>
              <!-- 用户姓名 -->
              <div>{{users[index].username}}</div>
              <!-- 删除相关推荐 -->
              <div @click='del'>×</div>
            </div>

            <!-- 标题 -->
            <div class="cellHead">
              <router-link :to='`/article/${item.id}`'>
                {{item.sub}}
              </router-link>
            </div>
            <!--正文开始-->
            <div class="cellContent" id='contentContainer'>
              <!-- 视频，图片 -->
              <router-link :to='`/article/${item.id}`'>
              <div  class='mediaContent'>
                <img v-lazy="item.image" class="cellImg" v-if='item.video==null'>
                <div v-else>
                  <video :src="item.video"  class="cellVideo" preload="metadata" width='500' :poster="item.poster" @click='pauseVideo'>
                  </video>

                  <p class='bfsp' @click='startPlay'><img src="../assets/icon/bf.png"></p>
                </div>
              </div>
              </router-link>
              <!-- 评论，内容 -->
              <div class="cellDes">
                <span>{{item.description}}</span>
              </div>
              <!-- 点赞部分 -->
              <div class="cellzan">
                <ul>
                  <li><router-link slot="icon" to='/'><img src="../assets/icon/fx.png"></router-link></li>
                  <li><router-link slot="icon" to='/'><img src="../assets/icon/pl.png"></router-link></li>
                  <li @click='churl'><img src="../assets/icon/zan.png"></li>
                  <li>{{dzs[index]}}</li>
                  <li @click='churl2'><img src="../assets/icon/cai.png"></li>
                </ul>
              </div>
            </div>
        </div>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  <!-- 下拉刷新提示文本 -->
  <div slot="top" class="mint-loadmore-top">
    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉刷新</span>
    <span v-show="topStatus === 'loading'">加载中...</span>
  </div>
  <!-- 下来刷新 -->
  </mt-loadmore>



  <!-- 底部选项卡 -->
  <div @click='totop'><tabbar :cg='cg'></tabbar></div>
</div>
</template>
<style> 
.navbar{
  color:slategray;
  margin-bottom: 0px;
}
/* 每一块样式 */
.cell{
  width:95%;
  margin: 5px auto;
  padding: 5px;
  border-bottom: 5px solid #e8e8e8;
}
/* 用户信息 */
.cellUser{
  width:100%;
  height: 45px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px ridge #e8e8e8;
}
/* 用户头像 */
.userimg{
  width:40px;height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  border:1px solid pink;
  margin-bottom: 5px;
}
.userimg img{
  width:40px;height: 40px;
}
/* 删除按钮 */
.cellUser div:last-child{
  color:pink;
  position: absolute;
  right:5%;
}
/* 文章标题 */
.cellHead{
  font-size:15px;
  margin-bottom: 10px;
}
.cellHead a{
  color:#000;
  text-decoration: none;
}
/* 正文内容 */
.cellContent{
  width:100%;
  height:320px;
}
/* 评论部分 */
.cellDes{
  font-size: 15px;
  width: 95%;
  margin: 0 auto;
  height:68px;
  border:1px solid darkgray;
  margin-top:15px;
  border-radius: 10px;
  line-height: 68px;
  padding-left:10px ;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.cellzan ul{
  height: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.cellzan ul li{
  line-height: 20px;
}
.hidden{
  display: none;
}
/* 媒体容器 */
.mediaContent{
  width:70%;
  height: 200px;
  overflow: hidden;
  margin-left: 5px;
  position: relative;
}
.bfsp{
  position: absolute;
  top:38%;
  left:38%;
}
/* 视屏样式 */
.cellVideo{
  position: absolute;
  top:-79%;
}
/* 图片样式 */
.cellImg{
  height: 200px;
}
/* 刷新面板 */
.mint-loadmore-top{
  background: cadetblue;
}


</style>
<script>
import tabbar from '../components/mytabbar'
export default {
  //注册子组件
  components:{
    tabbar
  },
  data(){
    return {
      selected:'recommend',
      //存储服务器返回的信息
      data:[], 
      category:[],
      busy:false,
      page:1,
      pagecount:0,
      cg:'home',
      fixed:false,
      xs:'',
      yc:'hidden',
      dzs:[22],
      playState:false,
      users:[],
      topStatus:''
    } 
  },
  methods:{
    // 下拉刷新
    loadTop() {
      this.$toast({
        message: '更新成功',
        duration:1000
      });
      location.reload();
      this.$refs.loadmore.onTopLoaded();
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    // 返回顶部
    totop(){
      //速度
      var speed = 100;
      //开启定时器        
      var timer = setInterval(function(){
        //获取滚动条的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //设置滚动的高度
        document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed);
        //清除定时器
        speed += 30;
        if(scrollTop <= 0){
          clearInterval(timer);
          location.reload();
        }
      },30);
      
    },






    // 改变点赞颜色
    churl(e){
      let li=e.target.parentNode.nextElementSibling;
      let content=parseInt(li.innerHTML);
      // console.log(content);

      if(e.target.src==require('../assets/icon/zan.png')){
        e.target.src=require('../assets/icon/zann.png');
        content++;
        li.innerHTML=content;
      }else{
        e.target.src=require('../assets/icon/zan.png');
        content--;
        li.innerHTML=content;
      }
    },
    // 改变踩的颜色
    churl2(e){
      let li=e.target.parentNode.previousElementSibling;
      let content=parseInt(li.innerHTML);

      if(e.target.src==require('../assets/icon/cai.png')){
        e.target.src=require('../assets/icon/caii.png');
        content--;
        li.innerHTML=content;
      }else{
        e.target.src=require('../assets/icon/cai.png');
        content++;
        li.innerHTML=content;
      }
    },
    // 播放事件
    startPlay(e){
      if(!this.playState){
        e.target.parentNode.className='hidden';
        e.target.parentNode.previousElementSibling.play();
        this.playState=true;
      }else{
        e.target.parentNode.previousElementSibling.pause();
        this.playState=false;
      }
    },
    // 暂停时间
    pauseVideo(e){
      e.target.nextElementSibling.className='bfsp';
      e.target.pause();
      this.playState=false;
    },
    //删除
    del(e){ 
      this.$messagebox.confirm('是否减少此类推荐？','提示',{
        confirmButtonText:'是',
        cancelButtonText:'否'
      }).then(action=>{
        e.target.parentNode.parentNode.className='hidden';
      }).catch(err=>{
      })
    },
    // 加载数据
    loadData(type,page){
      this.$indicator.open('加载中');
      this.axios.get(`/articles?type=${type}&page=${page}`)
      .then(res=>{
        //获取总页数
        this.pagecount=res.data.pagecount;
        //完成图像的动态加载
        var data=res.data.results;
        data.forEach(item=>{
          if(item.image.split('.')[1]=='jpg'){
            item.image=require(`../assets/video/${item.image}`);
            this.data.push(item);
          }else{
            item.video=require(`../assets/video/${item.image}`);
            let posurl=item.image.split('.')[0];
            item.poster=require(`../assets/video/${posurl}.jpg`);
            this.data.push(item);
          }

          // 循环随机生成评论数
          this.dzs.push(Math.floor(Math.random()*1000));

        });
        this.$indicator.close();
        this.busy=false;
      });
    },
    // 分页滚动事件
    loadMore(){
      this.busy=true;
      this.page++;
      if(this.page<=this.pagecount)
      this.loadData(this.selected,this.page);
    },
    // 监听滚动行为
    handScroll(){
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      var navbarEle=document.querySelector('.top-navbar');

      if(navbarEle!=null){
        var offsetTop=navbarEle.offsetTop;

        if(offsetTop<scrollTop){
          this.fixed=true;
        }else{
          this.fixed=false;
        }
      }

    }
  },
  watch:{ 
    selected(){
      this.data=[];
      this.page=1;
      this.loadData(this.selected,this.page);
    }
  },
  //挂载阶段
  mounted(){
    // 向服务器发送请求，得到用户信息
    this.axios.get(`/users`).then(res=>{
      let users=res.data.data;
      users.forEach(user=>{
        user.image=require(`../assets/tx/${user.headimg}`);
        this.users.push(user);
      });
    });


   //向WEB服务器发送AJAX请求，以获取分类数据
    this.axios.get(`/category`).then(res=>{
      this.category=res.data.results;
      this.selected=JSON.parse(JSON.stringify(this.category[0].category_info));
    });
    //向WEB服务器发送AJAX请求，以获取数据
    //代表向WEB服务器articles路由发送GET请求
    this.loadData(this.selected,this.page);

    


    //滚动事件监听
    window.addEventListener('scroll',this.handScroll);

    
  }
}
</script>


