<template>
	<div class="all">
    <div class="top">
      <ul>
        <li class="list1"><span>
          <router-link to="/" tag="i" class="iconfont">&#xe607;</router-link>
        </span></li>
        <li class="list2"><span>用户登录</span></li>
        <li class="list3"><span> <i class="iconfont">&#xe501;</i></span></li>
      </ul>
    </div>

    <div class="box1"></div>

    <div class="box2">
		<input type="text" v-model="email" placeholder="请输入电子邮箱">
 	</div>

    <div class="box2 box3">
		<input type="password" v-model="password" placeholder="请输入密码">
    </div>

   
    <button @click="login">登录</button>
	</div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {

  name: 'login',

  data () {
    return {
    	email:'',
    	password:''
    }
  },

  methods:{

   	login(){
   		console.log(111111)
	  	
	  	axios.post('/api/login',{email:this.email,password:this.password}).then(res=>{

        if(res.data.result){
          router.push("/")
        }

        else{

          alert("用户名不正确")
        }

	  	console.log(222222)
		console.log(res)
  	})
  	}


  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.eot');
  src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./font/iconfont.woff') format('woff'),
  url('./font/iconfont.ttf') format('truetype'),
  url('./font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.top{
  width: 100%;
  height: 40px;  
  position: relative;
  position: fixed;
  border-bottom: 1px solid #ccc;
  background: #fff;
  z-index: 10
}
.top ul{
  width: 100%;
  height: 40px;
}
.top li{
  float: left;
  list-style: none;
}

.list1{
  width: 25%;
  height: 100%;
}
.list1 span{
  position: absolute;
  top:13%;
  left: 6%;
}
.list2{
  width: 50%;
  height: 100%;
}
.list2 span{
  position: absolute;
  top:13%;
  left: 38%;
}
.list3{
  width: 25%;
  height: 100%;
}
.list3 span{
  position: absolute;
  top:9%;
  right:6%;
}

.box1{
  width: 100%;
  height: 55px;
}

.box2{
  padding-left: 5%;
  height: 60px;
  border-top: 1px solid #ccc
}

input{
  height: 30px;
  font-size: 16px;
  width: 80%;
  border:none;
  margin-top:5%;

}
.box3{
  border-bottom:1px solid #ccc; 
}

button{
  width: 80%;
  height:35px;
  margin-top: 10%;
  margin-left: 10%;
  border: none;
  background: #e5004f;
  font-size: 16px;
  border-radius: 15px;
}
</style>