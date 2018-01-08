<template>
	<div class="both">
		<navbar></navbar>
		<indexswiper></indexswiper>


  

		<div class="box1">
			<ul class="ul1">
				<li class="li1" v-for="data in datalist">
					<img :src="data.imgurl" class="img4">
					<p class="p1">{{data.imgname}}</p>
				</li>
			</ul>
		</div>
		<div class="box2" v-for="data in datalist1">
			<img :src="data.imgurl" class="img5">
		</div>
	
		<div class="box3">
			<div class="box31" v-for="data in datalist3">
				<img :src="data.imgurl" class="img5">
			</div>			
			<div class="box32">
				<ul>
					<li v-for="data in datalist4">
						<img :src="data.imgurl" class="img5">
					</li>
					<li v-for="data in datalist5">
						<img :src="data.imgurl" class="img5">
					</li>				
				</ul>
			</div>
		</div>

		<div class="box5" v-for="data in datalist7 ">
			<img :src="data.imgurl" class="img5">
		</div>
		<div class="box4">
			<ul  v-infinite-scroll="loadMore"infinite-scroll-disabled="loading"infinite-scroll-distance="10">
				<li v-for="data in change">
					<img :src="data.imgurl" class="img7">
					<p class="p1">{{data.extra.productdetail.name}}</p>
				</li>
			</ul>
		</div>
	

		<bottom></bottom>
	</div>
</template>

<script>
import Vue from 'vue'

import navbar from '@/components/navbar'

import { Indicator } from 'mint-ui';

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import bottom from '@/components/bottom'
import indexswiper from '@/components/indexswiper'

import axios from 'axios'
export default {

  name: 'indexcon',

  data () {
    return {
    	datalist:[],
    	datalist1:[],
    	datalist3:[],
    	datalist4:[],
    	datalist5:[],
    	datalist6:[],
    	datalist7:[],
    	loading:false
    }
  },
  components:{
    indexswiper, 
    navbar, 
    bottom   
  },
 methods:{
 loadMore() {
 	console.log("底部了")
}},
  mounted(){

  	Indicator.open('加载中...');
  	axios.get("/Services/Proxy.ashx?r=201801031832&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1").then(res=>{
  		 // console.log(res.data); // 后端响应数据的位置     
  		// this.barlist = res.data.data.templatelist;
  		this.datalist = res.data.data.templatelist[0].items;
  		this.datalist1 = res.data.data.templatelist[1].items;
  		this.datalist3 = res.data.data.templatelist[3].items;
  		this.datalist4 = res.data.data.templatelist[4].items;
  		this.datalist5 = res.data.data.templatelist[5].items;
  		this.datalist6 = res.data.data.templatelist.splice(36,78);
  		this.datalist7 = res.data.data.templatelist[33].items;
  		Indicator.close();
  		// this.datalist7 = this.datalist6[].items;
  		//console.log(this.datalist6)
  	})
  },
  computed:{
  	change:function(){
  		var dataRest = [];
  		this.datalist6.forEach(function(item,index){
  			dataRest=[...dataRest,...item.items];
  		})
  		console.log(dataRest);
  		return dataRest;
  	}
  }
}
</script>



<style lang="css" scoped>
.both{
	width: 100%;
	height: 100%;
}	

.box1{
	width: 100%;
	height: 82px;	
}
.ul1{
	width: 100%;
	height: 100%;
	list-style: none;
}
.li1{
	width: 25%;
	float: left;
	height: 100%;	
}
.img3{
	width: 104px;
	height: 56px;
}
.p1{
	font-size: 14px;
	height: 16px;
    text-align: center;
    overflow: hidden;
}
.img4{
	width:100%;
	height: 100%; 
	margin-top:-10px;
}

.box2{
	width: 100%;
	height: 58px;
	margin-top:10px; 
}
.img5{

	width: 100%;
	height: 100%;
}

.box3{
	width: 100%;
	height: 260px;
}

.box31{
	width: 100%;
	height: 50px;

}

.box32{
	width: 100%;
	height: 210px;
}

.box32 ul{
	width: 100%;
	height: 210px;

}

.box32 ul li{
	width: 50%;
	height: 105px;

	float: left;
	list-style: none;
}

.box4{

	width: 100%;
	height: 100%;

}


.box4 ul{
	width: 100%;
	height: 325px;

}


.box4 ul li{
	width: 50%;
	height: 325px;

	float: left;
	list-style: none;
}

.img7{
	width: 100%;
	height: 80%;
}
.p1{
	width: 100%;
	height: 20%;
	font-size: 12px;	
}

.box5{
	width: 100%;
	height: 50px;
}





</style>