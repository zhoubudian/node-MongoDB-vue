import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/regLog/Login'
import Register from '@/components/regLog/Register'
import Index from '@/components/shouye/Index'
import Gwuc from '@/components/xianqin/Gwuc'
import Settla from '@/components/xianqin/Settla'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/Login'
    },{
      path:'/Login',
      name:'Login',
      component:Login
    },{
      path:'/Register',
      name:'Register',
      component:Register
    },{
      path:'/Index',
      name:'Index',
      component:Index
    },{
      path:'/Gwuc',
      name:'Gwuc',
      component:Gwuc
    },{
      path:'/Settla',
      name:'Settla',
      component:Settla,
    }
  ]
})
