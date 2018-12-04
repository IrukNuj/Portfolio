import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'work',
      component: Works
    }
  ]
})
