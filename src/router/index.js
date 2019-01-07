import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Works
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
