<template>
<div class='clearfix main'>
  <!-- 上方导航栏 -->
  <div class="login_nav">
    <div class="navw">
      <a href="" class="logo"></a>
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">菜谱大全</a></li>
        <li><a href="">因是蒋康</a></li>
        <li><a href="">美食菜单</a></li>
        <li><a href="">美食达人</a></li>
        <li><a href="">视频下载</a></li>
        <li><a href="">菜谱视频</a></li>
      </ul>
    </div>
  </div>
  <!-- 中间标题 -->
  <div class="login_title">欢迎来到美食杰</div>

  <!-- 登录界面 -->
  <div class="loginpage">

    <!-- 登录模块 -->
    <div class="loginbox" id='dl' v-show='show1'>
      <!-- 登录框头部 -->
      <div class="loginbox_title">
        <a href="">账号密码登录</a>
      </div>
      <!-- 登录框输入框 -->
      <div class="loginbox_body">
        <!-- 账号密码登录 -->
        <div class="login_b1">
          
          <!-- 手机号 -->
          <div class="litem">
            <input type="text" placeholder="请输入用户名" class='text' v-model='username' @blur="check">
          </div>
          <!-- 密码 -->
          <div class="litem">
            <input type="text" placeholder="请输入密码" class='text yzm' v-model='password' @blur="check">
            <a href="" class="lbutton">{{isNone}}</a>
          </div>
          <!-- 多选框 -->
          <div class="litem" style='height:20px;line-height:20px'>
            <label>
              <input type="checkbox">
              <span style='margin-right:60px'>下次自动登录</span>       
              <a href="">忘记密码?</a>
            </label>
          </div>
          <!-- 登录按钮 -->
          <div class="litem" style="text-align:center">
            <input type="submit" class="submit" value="登 录" @click='login'>
          </div>
 
        </div>
      </div>
    </div>

    <!-- 注册模块 -->
    <div class="nl_more_zc" id='zc' v-show='show2'>
      <div class="nl_loginbox_www">
        <div class="nl_loginbox_ww">
        <!-- 头部信息 -->
        <div class="loginbox_title">
          <span class="current">注册美食杰</span>
        </div>

        <div class="nl_loginbox_w" style="float:left;">
          <div class="litem">
            <input type="text" v-model="reg_name" class="text forcheck pn_forcheck"  placeholder="请输入用户名" @blur="check2">
          </div>

          <div class="litem">
            <input type="text" class="text forcheck pyzm_forcheck1 yzm" placeholder="请输入密码" v-model='reg_pwd' @blur="check2">
            <a href="javascript:;" class="phone_yzmbtn" id="phone_yzmbtn1">{{issNone}}</a>
          </div>

          <div class="litem" style="height:20px;line-height:20px;">
            <label class="label2"><input type="checkbox" class="checkbox" checked="1" id="xianyi">
              我已阅读并且同意美食杰<a href="" target="_blank">《用户协议</a>和<a href="" target="_blank">《隐私政策》</a>
            </label>
          </div>

          <div class="litem" style="text-align:center;">
            <input type="submit" class="submit register_submit" id="reg_but" value="注 册"  @click='register'>
          </div>

        </div>
        </div>
      </div>
    </div>
    <!-- 注册模块 -->

    <!-- 登录注册切换 -->
    <a href="javascript:;" class='golink' @click='change'>{{tt}}</a>
    <div class="nl_or">————————　使用第三方登录　————————</div>
    <!-- 模块底部 -->
    <div class="nl_dsf_w">
      <div class="nl_dsf_w1">
        <a href="" class="a1">
          <span class="icon"></span>微信登录
        </a>
        <a href="" class="a2">
          <span class="icon"></span>QQ登录
        </a>
        <a href="" class="a3"><span class="icon"></span>微博登录</a>
      </div>
      <a href="" class="golink1">更多第三方登录方式</a>
    </div>

  </div>

  <!-- 脚步 -->
  <div class="login_footer"></div>
</div>
</template>
<script>
export default {
  data(){
    return {
      tt:'没有账号?立即注册',
      show1:false,
      show2:true,
      username:'',
      password:'',
      reg_name:'',
      reg_pwd:'',
      isNone:'用户名为空',
      issNone:'用户名为空'
    }
  },
  methods:{
    // 切换注册和登录页面
    change(){
      if(this.show1){
        this.show1=false; 
        this.show2=true;
        this.tt='已有账号?立即登录';
      }else{
        this.show1=true;
        this.show2=false;
        this.tt='没有账号?立即注册';
      }
    },
    // 登录检查输入是否有误
    check(){
      if(this.username==''){
        this.isNone='用户名为空'
      }else if(this.password==''){
        this.isNone='密码为空'
      }else{
        this.isNone='正确'
      }
    },
    check2(){
      if(this.reg_name==''){
        this.issNone='用户名为空'
      }else if(this.reg_pwd==''){
        this.issNone='密码为空'
      }else{
        this.issNone='正确'
      }
    },
    // 登录按钮发送请求
    login(){
      // console.log(this.username,this.password);
			this.axios.post('/login',`username=${this.username}&password=${this.password}`)
			.then(res=>{
         var code=res.data.code;
				 if(code==1){
					 alert('登陆成功');
				 }else{
					 alert('登陆失败');
				 }
			});
    },
    register(){
      //
      this.axios.post('/register',`username=${this.reg_name}&password=${this.reg_pwd}`)
        .then(res=>{
          var code=res.data.code;
            //检测用户名是否存在
            if(code==0){
              alert('对不起，该用户已存在');
            }else{
              alert('用户注册成功，是否立即登录?');
            }
        })
      //
    }
  }
}
</script>
<style>
.main{
  width: 100%;
  background: #fff url('../assets/img/llogin.jpg') center top no-repeat;
  background-size: 1920px auto;
}
.main .login_nav{
    height: 108px;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.08);
}
.login_footer{
  height: 108px;
  width: 100%;
}
.login_nav .navw {
  width: 1200px;
  height: 108px;
  margin: 0px auto;
  position: relative;
}
.login_nav .logo {
  height: 108px;
  display: block;
  background: url('../assets/img/loginn.png') center no-repeat;
  background-size: 75% auto;
  width: 200px;
}
a{
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
.navw ul{
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 0px;
  list-style: none;
}
.navw ul li{
  display: inline-block;
  vertical-align: top;
}
.navw ul li a{
  padding: 0px 20px;
  color: #fff;
  font-size: 18px;
  line-height: 108px;
  display: inline-block;
  vertical-align: top;
  opacity: 0.8;
}
.login_title {
  height: 180px;
  line-height: 180px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 48px;
}

.loginpage{
  width: 600px;
  background: #fff;
  margin: 0px auto 100px;
  padding: 1px 0px 0px;
  border-radius: 24px;
  box-sizing: border-box;
  box-shadow: 0px 0px 100px rgba(0,0,0,0.3);
}
.loginbox{
  width: 480px;
  margin: 0px auto 0px;
  overflow: hidden;
  text-align: left;
}
.loginbox_title{
  width: 100%;
  text-align: center;
  padding-top: 14px;
  height: 84px;
  line-height: 84px;
  font-size: 24px;
  font-weight: 600; 
}
.loginbox_title a{
  color: #999;
}
.loginbox_body{
  margin-left: 0px;
  width: 960px;
  font-size: 0px;
  white-space: nowrap;
  transition: all ease 0.3s;
}
.loginbox_b1{
  width: 480px;
  display: inline-block;
  vertical-align: top;
}
.litem{
  height: 56px;
  width: 480px;
  margin-bottom: 20px;
  position: relative;
}
.litem .text{
  box-sizing: border-box;
  height: 56px;
  width: 480px;
  border: 1px solid #ddd;
  border-radius: 28px;
  line-height: 26px;
  font-size: 18px;
  color: #333;
  padding: 14px 20px;
  font-family: PingFang SC,"Hiragino Sans GB","冬青黑体","Microsoft Yahei","微软雅黑";
}
.lbutton{
  width: 160px;
  float: right;
  background: #8fc31f;
  display: block;
  color: #fff;
  line-height: 56px;
  height: 56px;
  border-radius: 28px;
  font-size: 16px;
  text-align: center;
}
.litem .yzm{
  width: 300px;
}
.litem label{
  color: #999;
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  display: block;
}
.litem label input {
  margin-top: -2px;
  position: relative;
  height: 16px;
  width: 16px;
  outline: none;
  vertical-align: middle;
}
.litem label a{
  display: inline-block;
  vertical-align: top;
  color: #999;
  font-size: 16px;
  height: 20px;
  line-height: 20px;
}
.litem .submit{
  display: inline-block;
  vertical-align: top;
  height: 56px;
  border-radius: 28px;
  line-height: 56px;
  font-size: 24px;
  color: #fff;
  font-family: PingFang SC,"Hiragino Sans GB","冬青黑体","Microsoft Yahei","微软雅黑";
  background: #ea5d4e;
  cursor: pointer;
  border: 0px;
  width: 240px;
}
.golink {
    color: #ea5d4e;
    font-size: 18px;
    display: block;
    text-align: center;
    line-height: 38px;
    height: 38px;
    padding: 0px 0px 20px;
    font-weight: 600;
}
.nl_or {
    height: 40px;
    text-align: center;
    width: 100%;
    font-size: 16px;
    color: #999;
    line-height: 40px;
}
.nl_dsf_w {
    text-align: center;
}
.nl_dsf_w1 {
    text-align: center;
    padding: 18px 0px;
}
.nl_dsf_w1 a {
    display: inline-block;
    vertical-align: top;
    width: 48px;
    height: 48px;
    margin: 0px 35px;
    font-size: 0px;
}
.nl_dsf_w1 .a1 span {
    background-position: 0px 0px;
}
.nl_dsf_w1 a span {
    display: block;
    height: 48px;
    width: 48px;
    background: url('../assets/img/qw.png') no-repeat;
}
.nl_dsf_w1 .a2 span {
    background-position: -48px 0px;
}
.nl_dsf_w1 .a3 span {
    background-position: -96px 0px;
}
.golink1 {
    color: #999;
    font-size: 14px;
    display: block;
    text-align: center;
    line-height: 38px;
    height: 38px;
    padding: 0px 0px 28px;
    font-weight: 400;
}
.nl_more_zc {
    width: 480px;
    text-align: center;
    background: #fff;
    margin: 0px auto;
}
.nl_loginbox_www {
    width: 480px;
    overflow: hidden;
    margin: 0px auto 0px;
}
.nl_loginbox_ww {
    width: 480px;
    margin-left: 0px;
}
.loginbox_title {
    width: 100%;
    text-align: center;
    padding-top: 14px;
    height: 84px;
    line-height: 84px;
    font-size: 24px;
    font-weight: 600;
    color: #999;
}
.nl_loginbox_w {
    width: 480px;
    margin: 0px auto 0px;
    overflow: hidden;
    text-align: left;
}
.login_false_tip {
    height: 44px;
    line-height: 44px;
    color: #fff;
    background: #ea5d4e;
    text-align: center;
    margin: 0px 0px 20px;
    font-size: 16px;
    border-radius: 4px;
}
.nl_loginitem .text {
    box-sizing: border-box;
    height: 56px;
    width: 480px;
    border: 1px solid #ddd;
    border-radius: 28px;
    line-height: 26px;
    font-size: 18px;
    color: #333;
    padding: 14px 20px;
    font-family: PingFang SC,"Hiragino Sans GB","冬青黑体","Microsoft Yahei","微软雅黑";
}
.phone_yzmbtn {
    width: 160px;
    float: right;
    background: #8fc31f;
    display: block;
    color: #fff;
    line-height: 56px;
    height: 56px;
    border-radius: 28px;
    font-size: 16px;
    text-align: center;
}
input:focus{
  outline:0;
}
.clearfix {
    zoom: 1;
}
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
</style>