<template>
	<div>
		<navbar></navbar>
		<div class="cool3"></div>
		<div class="box1" v-for="(data,itemcode) in shoplist" @click="handleClick(data.itemcode)" :key="data.itemcode">
			<div class="cool1">
				<img :src="data.bigimageurl">
			</div>
			<div class="cool2">
				<p class="p1">{{data.name}}</p>
				<p class="p2">￥{{data.yt_price}}</p>
			</div>
		</div>
		<bottom></bottom>

	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import navbar from '@/components/navbar'
import bottom from '@/components/bottom'
import router from "@/router"

import axios from 'axios'
export default {

  name: 'shop',

  data () {
    return {
    	shoplist:[]
    }
  },

   methods:{
  	handleClick(itemcode){
  		router.push({name:"detail",params:{id:itemcode}});
  		// router.push(`/detail/${itemcode}`) // /detail/
  	}
  },
  components:{
    navbar,
    // indexswiper,
    // indexcon,
    bottom
  },
   mounted(){
   	Indicator.open('加载中...');
  	axios.get("/Services/Proxy.ashx?r=201801041502&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A0%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D50004702%22%2C%22keyword%22%3A%22%22%7D").then(res=>{
  		this.shoplist = res.data.data.product_list 
  	 Indicator.close();
  		// console.log(this.shoplist)
  	})
  },
}
</script>

<style lang="css" scoped>

.cool3{
	width: 100%;
	height: 55px;
}

.box1{

	width: 100%;
	height: 142px;	

}

.cool1{

	width: 30%;
	height: 120px;
	float: left;
	margin-left:10px; 
	
}
.cool2{
	width: 60%;
	height: 120px;
	float: right;
	margin-top:10px; 
	margin-right:10px;
	font-size: 16px;	
}
.p1{
	font-size: 16px;
}

.p2{

	color:red;
}
img{
	width: 100%;
	height: 100%;
}
</style>