<template>
<div>
  <!-- 头bu -->
    <mt-header title="帖子详情" fixed class='de_header'>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>

  <!-- 用户 -->
    <div class="ahah">
      <div class="tou_user">
        <div class="tou_userimg">
          <img src="../assets/tx/atm.jpg">
        </div>
        <div>
          <p>我是段Duang</p>
          <p class='tou_user_content'>昨天{{sstime}}</p>
        </div>
      </div>
      <!-- 右边 -->
      <div class="tou_gz">
        <button @click='cy' :style='ys'>+关注</button>
      </div>
    </div>
  <!-- 内容 -->
    <div class="de_content">
      <!-- 图片 -->
      <div class="tvi">
        <img :src="image" v-if='isPic'>
        <div v-else>
          <video :src="image" @click='pauseVideo'></video>
          <p class='bfsp'  @click='startPlay'><img src="../assets/icon/ppf.png"></p>
        </div>
      </div>
      <!-- 内容描述 -->
      <p class='c'>{{des}}</p>
    </div>



  <!-- 评论头部 -->
    <div class="comment">
      <p>评论</p>
      <p @click="zuixin"><img src="../assets/icon/sx.png">最新</p>
    </div>
  <!-- 评论内容 -->
    <div class="ct_c">

      <!-- 一个小模块 -->
      <div class="ct_item" v-for="(item,index) of plzxq" :key='index'>
        <!-- 评论头像 -->
        <div class="tou_user">
          <div class="tou_userimg"><img :src="lalal[index]">
          </div>
          <div><p>{{item.name}}</p>
          <p class='tou_user_content'>昨天{{sstime}}</p>
          </div>
        </div>
        <div class='pl_dzs'>
          <p>{{item.dzsnum}}
          <img src="../assets/icon/zanza.png" @click="dianzan">
          </p>
        </div>
        <!-- 评论内容 -->
        <div class="ct-pl">
          <p>{{item.sdsm}}</p>
        </div>
      </div>
      <!-- 一个小模块 -->
    
      






    </div>

  <!-- 发表评论 -->
    <div class="fbpl">
      <mt-field placeholder="发表评论" v-model="shuru">
      </mt-field>
      <div class="xuanzezp" @click='selPic'>
        <input type="file" id='filee'><img src="../assets/icon/app.png">
      </div>
      <mt-button @click='shpl'>发表</mt-button>
      <mt-actionsheet :actions="actions" v-model="sheetVisible">
      </mt-actionsheet>
    </div>
    <div class='ylpic' v-if='isDis'>
      <div class='ylrq'>
        <img src="../assets/images/gg3.jpg" alt="">
      </div>
      <span @click='isDis=false'>×</span>
    </div>




</div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  computed:{
    ...mapState([
      'id','username','headimg'
    ])
  },
  data(){
    return {
      des:'',
      image:'',
      sub:'',
      ys:'',
      sstime:new Date().getHours().toLocaleString()+':00',
      isPic:true,
      playState:false,
      plzxq:[
        {name:'我是老A',dzsnum:100,sdsm:'这个视频不错嘛'},
        {name:'我是老B',dzsnum:20,sdsm:'一楼是睿智'},
        {name:'我是老C',dzsnum:1,sdsm:'赶紧发后续'},
        {name:'我是老D',dzsnum:454,sdsm:'你是什么鬼'},
        {name:'我是老E',dzsnum:160,sdsm:'我笑了'},
        {name:'我是老V',dzsnum:60,sdsm:'你这个不行的'},
        {name:'我是老M',dzsnum:222,sdsm:'我不想和你吵架'},
        {name:'我是老K',dzsnum:5,sdsm:'世界大会上结合实际'},
      ],
      lalal:[require('../assets/tx/bnz.jpg'),require('../assets/tx/atm.jpg'),require('../assets/tx/ddm.jpg'),require('../assets/tx/ddm3.jpg'),require('../assets/tx/atm.jpg'),require('../assets/tx/xl.jpg'),require('../assets/tx/ld.jpg'),require('../assets/tx/tz.jpg')],
      shuru:'',
      isDz:false,
      sheetVisible:false,
      actions:[{name:'预览图片',method:()=>{this.getPic()}}],
      isDis:false,
      ylImg:''
    }
  },
  methods:{
    // 改变关注颜色
    cy(){
      if(this.ys==''){
        this.ys='background:#00a1ed';
        this.$toast({message:'关注成功',duration:1000});
      }else{
        this.ys='';
        this.$toast({message:'取消关注成功',duration:1000});
      }
    },
    // 更新成功
    zuixin(){
      location.reload();
      this.$toast({message:'已是最新',duration:1000});
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
    // 发表评论
    shpl(){
      // 获取输入的评论
      let input=this.shuru;
      let reg=/[(我|wo)][(草|c)]/;
      if(input==''){
        this.$toast('输入不能为空');
        return;
      }else if(reg.test(input)){
        this.$toast('您发表的评论包含敏感词');
        return;
      }
      //获取当前用户头像
      let uname=this.username;
      let hi=this.headimg;
      // console.log(hi);
      if(hi==0){
        this.$messagebox.confirm('是否立即登录','发表失败',{
          cancelButtonText:'再看看',
        }).then(action=>{
          this.$router.push('/login?path=%2Fxx');
        }).catch(action=>{})
        return;
      }
      let num=Math.floor(Math.random()*100);
      //插入用户数组中
      this.plzxq.push(
        {name:uname,dzsnum:num,sdsm:input}
      );
      //插入用户头像
      this.lalal.push(require('../assets/tx/'+hi));
      this.$toast('发表评论成功,快来围观吧');
    },
    dianzan(e){
      if(!this.isDz){
        let num=e.target.parentNode.innerHTML.split(' ')[0];
        this.plzxq.forEach(item => {
          if(item.dzsnum==num){
            item.dzsnum++;
            this.isDz=true;
          }
        });
      }else{
        this.$toast('只能点赞一次哦');
        this.isDz=false;

      }

    },
    // 选择图片
    selPic(){this.sheetVisible=true},
    getPic(){
      this.isDis=true;
      let img=document.getElementById('filee').value;
      this.ylImg=''+img;
      console.log(this.ylImg);
    }



  },
  mounted(){
    // 获取地址中点击的id号
    var id=this.$route.params.id;
    // 根据id号发送请求拿到数据
    this.axios.get('/article/'+id).then(res=>{
      this.sub=res.data.article.sub;
      this.des=res.data.article.description;
      var image=res.data.article.image;
      if(image.split('.')[1]=='jpg'){
        this.isPic=true;
        this.image=require(`../assets/video/${image}`);
      }else{
        this.isPic=false;
        this.image=require(`../assets/video/${image}`);
      }
    });
  }
}
</script>

<style>
.ylpic{
  width:100%;
  height:100px;
  background: #e8e8e8;
  position: fixed;
  bottom:48px;
  display: flex;
  align-items: center;
}
.ylrq{
  width:100px;
  height: 90px;
  overflow: hidden;
  margin-left: 10px;
}
.ylrq img{
  height: 100%;
}
.ylpic span{
  position: absolute;
  top:5px;right: 10px;
}


.xuanzezp{
  height: 25px;
  width: 25px;
  position: relative;
  overflow: hidden;
}
.xuanzezp input{
  width:25px;
  position: absolute;
  top:0;left:0;
  opacity: 0;
}
.xuanzezp img{
  position:absolute;
  z-index: -1000;
}
.fbpl p{
  position: absolute;
  top:5px;left:242px;
}
.fbpl .mint-field-clear{
  display: block !important;
}
.ct-pl{
  width:95%;
  margin-top:10px;
  border-top:1px dotted slategrey;
  padding:5px;
  line-height: 20px;
  font-size: 13px;
}
.pl_dzs{
  position: absolute;
  top:10%;right:5%;
  font-size: 14px;
}
.ct_item{
  width:95%;
  border-bottom:1px solid slategrey;
  margin:5px auto;
  position: relative;
}
.fbpl{
  width:100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.fbpl button{
  width:62px;
}
.fbpl .mint-field .mint-cell-value {
  flex: 1;
}
.fbpl .mint-field-state.is-default {
    margin-left: 50px;
}
.bfsp{
  position: absolute;
  top:43%;
  left:42%;
}
header.mint-header.de_header{
  background: rgba(214, 32, 190, 0.8);
}
.ahah{
  width: 100%;
  margin-top:45px;
  position: relative;
  border-bottom: 2px solid silver;
}
.tou_user{
  margin-bottom: 5px;
  height:50px;
  display: flex;
  width:50%;
  justify-content: space-around;
  line-height:20px ;
}
.tou_userimg{
  width:50px;
  height: 50px;
  overflow: hidden;
  border:1px solid rgb(21, 72, 105);
  border-radius: 50%;
}
.tou_userimg img{
  width:100%;
}
.tou_user_content{
  color:rosybrown;
  font-size: 12px;
}
.tou_gz{
  position:absolute;
  right:5%;
  top:20%;
}
.tou_gz button{
  border-radius: 5px;
  outline: 0;
  border:0;
  padding: 5px 15px;
  font-size: 14px;
  background: silver;
}
.comment{
  color:slategrey;
  width: 88%;
  margin:5px auto;
  display:flex;
  justify-content: space-between;
}
.ct_c{
  border-top:1px solid silver;
  width:95%;
  margin-bottom: 40px;
  padding: 5px;
}
.de_content{
  width:90%;
  padding:10px;
}
.de_content p.c{
  width: 89%;
  padding: 10px;
  border:1px solid #f00;
  margin-top:10px;
  color:rgb(6, 68, 119);
  background: rgb(247, 243, 243);
  border-radius: 10px;
  overflow: hidden;
  line-height: 20px;
}
.tvi{
  height:250px;
  overflow: hidden;
  position: relative;
}
.tvi img{
  width:90%;
}
.tvi video{
  width:95%;
  margin-top:-213px;
}
</style>






