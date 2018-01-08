<template>
	<div class="all">
		<navbar></navbar>

		<div class="ji"></div>
		<div class="top" v-for="data in listdata1">
			<img :src="data.imgurl">
		</div>

		<div class="box1" v-for="data in listdata2">
			<img :src="data.imgurl">		
		</div>


		<div class="box2">
			<ul>
				<li v-for="data in change">
					<img :src="data.imgurl">
				</li>
			</ul>
		</div>

		<div class="box3" v-for="data in listdata4">
			<img :src="data.imgurl">
		</div>


		<div class="box4">
			<ul>
				<li v-for="data in cool">
					<img :src="data.imgurl">

					<p></p>
				</li>
			</ul>

		</div>

		<bottom></bottom>
	




	</div>
</template>

<script>

import { Indicator } from 'mint-ui';
import navbar from '@/components/navbar'

import bottom from '@/components/bottom'
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
    	listdata1:[],
    	listdata2:[],
    	listdata3:[],
    	listdata4:[],
    	listdata5:[]
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
  	axios.get("/Services/Proxy.ashx?r=201801041404&os=HTML5&client_v=1.0.0&pageid=30000365&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1").then(res=>{
  		  // console.log(res.data); // 后端响应数据的位置
  		  this.listdata1=res.data.data.templatelist[0].items;
  		  this.listdata2=res.data.data.templatelist[1].items;
  		  this.listdata3=res.data.data.templatelist.slice(2,6);
  		  this.listdata4=res.data.data.templatelist[6].items;
  		  this.listdata5=res.data.data.templatelist.slice(7,11);
  	
Indicator.close();
  		   // console.log(this.listdata3)
  	})
  },

  computed:{
  	change:function(){
  		var dataRest = [];
  		this.listdata3.forEach(function(item){
  			dataRest=[...dataRest,...item.items];
  		})
  		console.log(dataRest);
  		return dataRest;
  	},

  	cool:function(){
  		var coolrest = [];
  		this.listdata5.forEach(function(item){
  			coolrest = [...coolrest,...item.items];
  		})
  		return coolrest;
  	}
  },
}
</script>
<style lang="css" scoped>
.ji{
	height: 55px;
	width: 100%;
	
}
.top{
	width: 100%;
	height: 128px;	
}
.box1{
	width: 100%;
	height: 45px;	
}
.box2{
	width: 100%;
	height: 532px;	
}
.box3{
	width: 100%;
	height: 45px;	
}
.box4{
	width: 100%;
	height: 100%;
}
.box4 ul{
	width: 100%;
	height: 100%;	
}
.box4 ul li{
	width: 50%;
	height: 181px;
	float: left;
	list-style: none;
}
img{
	width: 100%;
	height: 100%;
}
</style>