<template>
<div>
  <!-- 头部区域开始 -->
  <mt-header title="有问题，上知乎">
    <!-- 用户未登录 -->
    <div slot="right" v-if='!$store.state.isLogin'>
      <router-link to="/register">
        <mt-button id="bf1">注册</mt-button>
      </router-link>
      <router-link to="/login">
        <mt-button id="bf2">登录</mt-button>
      </router-link>
    </div>
    <!-- 用户已登录 -->
    <mt-button slot='right' v-else @click='loginout'>
      <img src="../assets/lol.png" slot='icon'>
    </mt-button>
  </mt-header>
  <!-- 头部区域结束 -->
     
  <!-- 顶部选项卡开始 -->
  <div class="navbar">
    <mt-navbar v-model="selected" :fixed='fixed' class='top-navbar'>
      <mt-tab-item v-for='(category,index) of category' :key='index' :id="category.category_info">{{category.category_name}}</mt-tab-item>
    </mt-navbar>
  </div>

  <!-- 无限滚动 -->
  <div infinite-scroll-distance='10' v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' :infinite-scroll-immediate-check='true' class='main'>
    <!-- 面板区域开始 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item  v-for='(category,index) of category' :key='index' :id="category.category_info">
        <!-- 标题 -->
        <div class="infoItem" v-for="(item,index) in data" :key="index">
          <div class="infoItemHead">
            <router-link :to='`/article/${item.id}`'>
              {{item.subject}}
            </router-link>
          </div>
          <!--正文开始-->
          <div class="infoItemContent">
            <router-link :to='`/article/${item.id}`'>
            <img v-lazy="item.image" class="infoItemImg" v-if='item.image!=null'>
            </router-link>

            <div class="infoItemDes">
              {{item.description}}
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  <!-- 底部选项卡 -->
  <div>
    <tabbar :cg='cg'></tabbar>
  </div>
  <!-- 底部选项卡 -->
</div>
</template>
<style  scoped> 

.infoItem {
    padding: 15px 0 14px;
    margin: 0 15px;
    border-bottom: .5px solid #d3d3d3;
}
.infoItemHead{
	font-weight: 600;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 22px;
}
.infoItemContent {
    display: -ms-flexbox;
    display: flex;
    padding-top: 11px;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}

.infoItemImg{
    width: 112px;

    border-radius: 5px;

    padding-right: 15px;
}
.infoItemDes{
    font-size: 15px;
    overflow: hidden;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 21px;
    letter-spacing: normal;
    color: #444;
    margin-right: 4px 15px;
    -webkit-box-orient: vertical;
    height: 65px; 
}
.main{
  margin-bottom:55px;
}
#bf1,#bf2{
  color:aliceblue;
  margin-right:5px;
}
</style>
<script>
import {mapMutations} from 'vuex';
import tabbar from '../components/mytabbar'
export default {
  //注册子组件
  components:{
    tabbar
  },
  //变量
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
        fixed:false
    }
  },
  methods:{
    ...mapMutations({
      'lo':'loginout'
    }),
    //封装ajax请求
    loadData(type,page){
      this.$indicator.open('加载中');
      this.axios.get(`/articles?type=${type}&page=${page}`)
      .then(res=>{
        //获取总页数
        this.pagecount=res.data.pagecount;
        //完成图像的动态加载
        var data=res.data.results;
        data.forEach(item=>{
          if(item.image!=null)
          item.image=require(`../assets/images/zhihu/${item.image}`);
          this.data.push(item);
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
    //注销事件
    loginout(){
      this.lo();
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
  //监听当前selected属性变化
  watch:{ 
    selected(){
      this.data=[];
      this.page=1;
      this.loadData(this.selected,this.page);
    }
  },
  //挂载阶段
  mounted(){
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