<template>
	<div>

    <div class="top">
      <ul>
        <li class="list1"><span>
          <router-link to="/shop" tag="i" class="iconfont">&#xe607;</router-link>
        </span></li>
        <li class="list2"><span>商品详情</span></li>
        <li class="list3"><span> <i class="iconfont">&#xe501;</i></span></li>
      </ul>
    </div>
    
    <div class="div1"></div>
    
    <div class="div2"> 
      <swipe class="my-swipe">
      <swipe-item v-for="data in detaillist1">
      <img :src="data" class="imgswiper">
      </swipe-item>
      </swipe>
    </div>


    <div class="div3">
      <div class="div31">
        <p>
    {{detaillist2.name}}
        </p>
      </div>
  <div class="div32">
    <ul>
      <li class="lispan1"><span class="span1">￥{{detaillist2.ytprice}}</span></li>
  <li class="lispan2"><span class="span2">原价￥{{detaillist2.marketprice}}</span></li>
      <li class="lispan3"><p class="span3">商品编号{{detaillist2.itemcode}}</p></li>
    </ul>
      </div>
    </div>

    <div class="div4">
      图文介绍
    </div>

      <div class="div5">
      <iframe :src="detaillist3" class="ifr"></iframe>
      </div>

      <div class="div6">
        <ul>
          <li class="div61"><img src="./images/img6.png">
            <p>购物车</p></li>
          <li class="div62">加入购物车</li>
          <li class="div63">立即购买</li>
        </ul>
        
      </div>
		
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Vue from 'vue'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
export default {

  name: 'detail',

  data () {
    return {

      detaillist1:[],
      detaillist2:[],
      detaillist3:[]

    }
  },
  mounted(){
    Indicator.open('加载中...');
 	console.log(this.$route.params.id);
  	axios.get(`/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22${this.$route.params.id}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20180104189`).then(res=>{
  		  console.log(res.data); // 后端响应数据的位置 
    this.detaillist3=res.data.data.productparamsurl
    this.detaillist2=res.data.data.products[0]
    this.detaillist1=res.data.data.products[0].superlargeimgurls
        console.log(this.detaillist3)

        Indicator.close();
  	})
  },

  compontent:{
   "swipe":Swipe,
    "swipe-item":SwipeItem
  },
//    computed:{
//     swiper:function(){
//       var dataRest = [];
//       this.detaillist1.forEach(function(item,index){
//         dataRest=[...dataRest,...item.items
// ];
//       })
//       console.log(dataRest);
//       return dataRest;
//     }
//   }

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
.div2{
  width: 100%;
  height: 356px;
}
.imgswiper{
  width: 60%;
  height: 100%;
  margin-left: 20%
}
.div3{
  width: 100%;
  height: 98px;
  font-size: 12px;
}
.div31{
   width: 100%;
  height: 45px;
}
.div31 p{
 font-size: 16px;
 display: block;
 width: 80%;
 margin: 0 auto;
}
.div32{
  width: 100%;
  height: 45px;
}
.div32 ul{
  width: 100%;
  height: 100%;
  list-style: none;
}
.div32 ul li{
  width:33%;
  height: 100%;
  float: left;
}
.lispan1{
   margin-top:8px; 
   color: #e5004f;
   padding-left: 3px;
}
.lispan2{
   margin-top:15px;
}
.lispan3{
   margin-top:23px;
}
.span1{
  font-size: 20px;
}
.span2{
  font-size: 10px;
}
.span3{
  font-size: 10px;
}

.div4{
  width: 100%;
  height: 40px;
  text-align: center;
}

.div5{
   width: 100%;
  height: 9200px;

}
.ifr{
  height: 100%;
  width: 99%;
}
.div6{
  width: 100%;
  height: 42px;
  background: #fff;
  position: fixed;
  bottom: 0px;
}

.div6 ul{
  width: 100%;
  height: 100%
}
.div6 ul li{
  height: 100%;
  float: left;
  list-style: none;
  text-align: center;
  line-height: 42px;
  font-size: 14px;
}

.div61{

  width: 20%;
  height: 100%;
  position: relative;
}
.div61 img{

  width: 30%;
  height: 50%;
}

.div61 p{
 font-size: 12px;
  position: absolute;
  top: 30%;
  left: 30%;
}

.div62{

  width: 40%;
  height: 100%;
  background: #e5004f;
}
.div63{

  width: 40%;
  height: 100%;
  background: #FF7039
}



</style>