import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/components/Works'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'work',
      component: Works
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
