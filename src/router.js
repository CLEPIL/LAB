import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/App.vue'
import Res from './components/_res.vue'
import Form from './components/_form1.vue'
import Comp from './components/_complete.vue'
import edi from './components/_edi.vue'
//
// 他のコンポーネントは省略
//

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に # が含まれる.
  // URL から hash を取り除くには mode:history を指定する
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path:'/res',
        name:'res',
        component: Res

  
    },
    {
      path:'/form',
      name:'form',
      component: Form
    },
    {
      path:'/comp',
      name:'comp',
      component: Comp
    },
    {
      path:'/edi',
      name:'edi',
      component:edi
    }
  ]
})