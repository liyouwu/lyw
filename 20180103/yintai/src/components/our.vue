<template>
	<div>
		 <div class="top">
      <ul>
        <li class="list1"><span>
          <router-link to="/" tag="i" class="iconfont">&#xe607;</router-link>
        </span></li>
        <li class="list2"><span>我的银泰</span></li>
        <li class="list3"><span> <i class="iconfont">&#xe501;</i></span></li>
      </ul>
    </div>

     <div class="div1"></div>
    	<div class="mid">
		<router-link to="/login" tag="div" class="box1">登录</router-link>
		<router-link to="/register" tag="div" class="box2">注册</router-link>
	</div>

	<div class="cig">
		<ul>
			<li>帮助中心 <span>></span></li>
			<li>意见反馈 <span>></span></li>
			<li>关于银泰 <span>></span></li>
			<li>客服电话 <span>></span></li>
		</ul>
	</div>
	</div>
</template>

<script>
export default {

  name: 'our',

  data () {
    return {

    }
  },
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
.div1{
  height:40px;
  width: 100%; 
}

.mid{
	width: 100%;
	height: 200px;
	background: pink
}
	.box1{
		width: 40%;
		height: 50px;
		float: left;
		margin-left:5%;
		margin-top: 20%;
		text-align: center;
		line-height: 50px;
		border-radius: 15px;
		color: #fff;
		border:1px solid #fff;
	}
	.box2{
		width: 40%;
		height: 50px;
		float: left;
		margin-top: 20%;
		text-align: center;
		line-height: 50px;
		margin-left: 10%;
		border-radius: 15px;
		color: #fff;
		border:1px solid #fff;
	}

	.cig li{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border: 1px solid #ccc;
	}
	.cig li span{

		float: right;
	}
</style>