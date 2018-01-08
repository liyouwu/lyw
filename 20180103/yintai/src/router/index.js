import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import indexcon from '@/components/indexcon.vue'
import listpage from '@/components/list.vue'
import shopcon from '@/components/shop.vue'
import detailcon from '@/components/detail.vue'
import register from '@/components/register.vue'
import login from '@/components/login.vue'
import ourcon from '@/components/our.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {
     path: '/',
     redirect:'/indexcon'

    },
    {
      path: '/indexcon',
      component: indexcon
    },
    {
      path: '/list',
      component: listpage
    },
     
    {
      path: '/shop',
      component: shopcon
    },

    {
      path: '/detail:id',
       name:"detail",
      component: detailcon
    },
    {
      path: '/login',
      component: login
    },
     {
      path: '/register',
      component: register
    },
    {
      path: '/our',
      component: ourcon
    }
    
  ]
})
