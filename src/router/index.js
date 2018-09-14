import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Case from '@/components/Case'
import Ability from '@/components/Ability'
import Career from '@/components/Career'
import Photography from '@/components/Photography'
Router.prototype.goBack = function () {
　　this.isBack = true
　　window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/cate',
      component: Main,
      children: [
        {
          path: '',
          name: '案例',
          component: Case
        },
        {
          path: 'case',
          name: '案例',
          component: Case
        },
        {
          path: 'ability',
          name: '技能',
          component: Ability
        },
        {
          path: 'career',
          name: '生涯',
          component: Career
        },
        {
          path: 'photography',
          name: '摄影',
          component: Photography
        }
      ]
    }
  ]
})
