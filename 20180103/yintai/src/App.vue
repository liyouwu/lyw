<template>
  <div>
  <!-- <navbar></navbar> -->

  
  <!-- <indexswiper></indexswiper> -->
  <!-- <indexcon></indexcon> -->

  <router-view></router-view>  
  <!-- <bottom></bottom> -->
  </div>
</template>

<script>
import navbar from '@/components/navbar'
// import indexswiper from '@/components/indexswiper'
// import indexcon from '@/components/indexcon'
import bottom from '@/components/bottom'
export default {
  name: 'app',
  data(){
    return{}
  },
  components:{
    // navbar,
    // indexswiper,
    // indexcon,
    // bottom
  }
}
</script>

<style>
body{

  width: 100%;
  height: 100%;
}
*{
  padding: 0px;
  margin: 0px;
  font-size: 20px;
}
</style>
