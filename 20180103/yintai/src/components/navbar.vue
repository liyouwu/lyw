<template>
	<div class="all">
		<div class="left">			
		</div>
		<div class="middle">			
			<div class="mint-searchbar">
				<div>
					<input type="search" placeholder="搜索" class="mint-searchbar-core">
				</div> 
				<a class="mint-searchbar-cancel" style="display: none;">取消</a>
			</div>
		</div>
		<div class="right">
	
			  <router-link to="/login" tag="i" class="iconfont">&#xe501;</router-link>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'

import { Search } from 'mint-ui';

Vue.component(Search.name, Search);

export default {
  name: 'navbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

*{
	font-size: 20px;
}
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
  font-size:35px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

	.all{
		width: 100%;
		height: 55px;
		z-index: 10;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		background: #fff;
	}
	.left{
		width: 0.75rem;
		height: 42.5px;
		margin-top: 6px;
		float: left;
		background:url(images/newlogo.png) no-repeat;
		background-size: cover;
	}
	.right{
		width: 0.54rem;
		height: 42.5px;		
		margin-top: 6px;
		float: right;
		/*background:url(images/home-user.png) no-repeat;
		background-size: cover;*/
	}
	.img1{
		width: 0.3rem;
		height: 32.5px;
		position: absolute;
		top: 17%;
		right: 3%;
	}
	.middle{
		width: 2.4rem;
		height: 42.5px;		
		float: left;
		margin-top: 6px;
	}
	.mint-searchbar-core{
		height: 42.5px;
		border-radius: 4px;
		width: 100%;
		border: 1px solid #ccc
	}
	.mint-searchbar{

		background: #fff;
		height: 42.5px;

	}
	input{

		width: 100%;
	}



</style>