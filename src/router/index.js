import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import Databinding from '@/components/Databinding'
import Directive from '@/components/Directive'

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
      path: '/Directive',
      name: 'Directive',
      component: Directive
    }
  ]
})
