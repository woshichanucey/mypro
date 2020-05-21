<template>
<div>
  <mt-header title="快速登录" fixed>
		<router-link to="/" slot="left">
			<mt-button icon="back"></mt-button>
		</router-link>
	</mt-header>

  <!-- 登录区域 -->
  <div class="login_area">
		<mt-field type="text" label="用户名：" v-model="uname" :placeholder="tishi" :state='iserr'>
		</mt-field>

		<mt-field type="password" label="密码：" v-model="upwd" :placeholder="tishi2" :state='iserr2'>
		</mt-field>

    <mt-button type="primary" size="large" @click="login">快速登录</mt-button>


  </div>


</div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  data(){
    return {
      uname:'',
      upwd:'',
      iserr:'',
      tishi:'请输入用户名',
      iserr2:'',
      tishi2:'请输入密码'
    }
  },
  methods:{  
    ...mapMutations([
      'logined'
		]),
    login(){
      //检测
      if(this.uname.trim()==''){
        this.iserr='error';
        this.tishi='用户名不能为空'  
      }else if(this.upwd.trim()==''){
        this.iserr2='warning';
        this.tishi2='密码不能为空'
      }else{
        // 发送
        this.axios.post('/login',`username=${this.uname}&password=${this.upwd}`)
        .then(res=>{
        	var code=res.data.code;
        //登陆成功
        	if(code==1){
            this.$messagebox('登录提示','登陆成功').then(action=>{
              location.reload();
            });
            var res=res.data.result[0];

            // 存储到storage里面
            this.logined({id:res.id,username:res.username,headimg:res.headimg});

            //  将id和username存储到web Storage中
					  sessionStorage.setItem('id',res.id);
					  sessionStorage.setItem('username',res.username);
					  sessionStorage.setItem('headimg',res.headimg);
					  sessionStorage.setItem('isLogin',true);

            // 如果登陆成功，跳转路镜
            this.$router.push(this.$route.query.path)
            .catch(err=>{err});
            
        //登录失败
        	}else{
        		this.$messagebox.confirm('用户名或密码错误，是否重新登录？','登录失败',{
        			confirmButtonText:'是',
        			cancelButtonText:'否'
        		})
        		.then(action=>{
        			this.$router.push('/login').catch(err=>{err})
        		})
        		.catch(err=>{
        			this.$router.push('/').catch(err=>{err})
        		});
        	}
        });
      }
    }
  }
}
</script>
<style>
.login_area{
  width: 100%;
  margin-top:60px;
}
</style>