<template>
	<div>
		<!-- 头部区域开始 -->
		<mt-header title="有问题，上知乎" fixed>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/" slot="right">
				<mt-button icon="more"></mt-button>
			</router-link>
		</mt-header>
		<!-- 头部区域结束 -->
		<!-- 注册区域开始 -->
		<div class="main">
			<mt-field 
				type="text" 
				label="用户名" 
				v-model="username">
			</mt-field>

			<mt-field type="password" label="密码" v-model="password">

			</mt-field>
			<mt-button type="primary" size="large" @click="login">
				快速登录
			</mt-button>
		</div>
		<!-- 注册区域结束 -->
	</div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
	data(){
		return {
			username:'',
			password:''
		}
	},
	methods:{
		...mapMutations([
			'logined'
		]),
		login(){
			this.axios.post('/login',`username=${this.username}&password=${this.password}`)
			.then(res=>{
				 var code=res.data.code;
				 if(code==1){
					 this.$messagebox('登录提示','登陆成功');
					 //修改state里面的状态
					 this.logined({id:res.data.id,username:res.data.username});
					//  将id和username存储到web Storage中
					sessionStorage.setItem('id',res.data.id);
					sessionStorage.setItem('username',res.data.username);
					sessionStorage.setItem('isLogin',true);

					// 如果登陆成功，跳转路径
					if(this.$route.query.path){
						this.$router.push(this.$route.query.path);
						console.log('111');
					}else{
						// 如果登录失败，调回首页
						this.$router.push('/');
					}

				 }else{
						this.$messagebox.confirm('用户名或密码错误，是否重新登录？','登录失败',{
							confirmButtonText:'是',
							cancelButtonText:'否'
						})
						.then(action=>{
							this.$router.push('/login');
						})
						.catch(err=>{
							this.$router.push('/register');
						});
				 }
			});
		}
	}
}
</script>
<style scoped>
.main{
	margin-top:40px;
}
</style>