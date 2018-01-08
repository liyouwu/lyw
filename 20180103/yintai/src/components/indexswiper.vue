<template>
<div>
		<swipe class="my-swipe">
		  <swipe-item v-for="data in datalist">
		  	<img :src="data.imgurl" class="img2">
		  </swipe-item>
		</swipe>
</div>
</template>

<script>

require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import Vue from 'vue';
import axios from 'axios'
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

export default {

  name: 'indexswiper',

  data () {
    return {
    	datalist:[],
    	barlist:[]
    }
  },
  mounted(){
  	axios.get("/Services/Proxy.ashx?r=201801031832&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1").then(res=>{
  		// console.log(res.data); // 后端响应数据的位置     
  		this.datalist = res.data.data.bannerlist;
  		// this.barlist = res.data.data.templatelist;
  	})
  },
  
  compontent:{
   "swipe":Swipe,
    "swipe-item":SwipeItem
  }
}
</script>

<style lang="css" scoped>

.my-swipe{

	width: 100%;
	height: 152px;
  padding-top:55px; 
}

.img2{
	width: 100%;
	height: 100%;
}


</style>