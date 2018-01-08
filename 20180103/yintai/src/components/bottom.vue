<template>
	<div class="bottom">
		<ul>
		<router-link to="/indexcon" tag="li" activeClass="active"><img src="./images/img1.png"><p>首页</p></router-link>
		<router-link to="/list" tag="li" activeClass="active"><img src="./images/img2.png"><p>活动</p></router-link>
		<router-link to="/shop" tag="li" activeClass="active"><img src="./images/img5.png"><p>商品</p></router-link>
		<router-link to="/our" tag="li" activeClass="active"><img src="./images/img4.png"><p>我的</p></router-link>
			<!-- <li><img src="./images/img1.png"><p>首页</p></li>
			<li><img src="./images/img2.png"><p>抢先</p></li>
			<li><img src="./images/img3.png"><p>购物车</p></li>
			<li><img src="./images/img4.png"><p>我的</p></li>	 -->
		</ul>
	</div>
</template>

<script>
export default {

  name: 'bottom',

  data () {
    return {

    }
  }
}
</script>
<style lang="css" scoped>
	.bottom{
		width: 100%;
		height: 54px;
		background: #fff;
		position: fixed;
		bottom: 0px;
	}
	img{
		width: 24px;
		height: 20px;
	}
	ul{
		width: 100%;
		height: 54px;
	}
	li{
		float: left;
		list-style: none;
		width: 25%;
		height: 54px;
		line-height: 54px;
		text-align: center;
		position: relative;
	}
	p{
		position: absolute;
		top:20px;
		left: 38%;
		font-size: 12px;
		display: block;
	}

</style>