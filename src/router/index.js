import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import Databinding from '@/components/Databinding'
import Directive01 from '@/components/Directive01'
import Directive02 from '@/components/Directive02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/databinding',
      name: 'databinding',
      component: Databinding
    },
    {
      path: '/Directive01',
      name: 'Directive01',
      component: Directive01
    },
    {
      path: '/Directive02',
      name: 'Directive02',
      component: Directive02
    }
  ]
})
