import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Case from '@/components/Case'
import Ability from '@/components/Ability'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cate',
      component: Main,
      children: [
        {
          path: '',
          name: 'Case',
          component: Case
        },
        {
          path: 'case',
          name: 'Case',
          component: Case
        },
        {
          path: 'ability',
          name: 'Ability',
          component: Ability
        }
      ]
    }
  ]
})
