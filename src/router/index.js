import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Case from '@/components/Case'
import Ability from '@/components/Ability'
import Career from '@/components/Career'
import Photography from '@/components/Photography'
import component404 from '@/components/component404'
// 自定义方法及变量
import GLOBAL from '../global/global'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

const RouterMain = new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: component404,
      meta: {
        title: '404_'+GLOBAL.TITLE
      }
    },
    {
      path: '/',
      name: '首页',
      component: Home,
      meta: {
        title: GLOBAL.TITLE
      }
    },
    {
      path: '/cate',
      component: Main,
      children: [
        {
          path: '',
          name: '案例',
          component: Case,
          meta: {
            title: '案例_'+GLOBAL.TITLE
          }
        },
        {
          path: 'case',
          name: '案例',
          component: Case,
          meta: {
            title: '案例_'+GLOBAL.TITLE
          }
        },
        {
          path: 'ability',
          name: '技能',
          component: Ability,
          meta: {
            title: '技能_'+GLOBAL.TITLE
          }
        },
        {
          path: 'career',
          name: '生涯',
          component: Career,
          meta: {
            title: '生涯_'+GLOBAL.TITLE
          }
        },
        {
          path: 'photography',
          name: '摄影',
          component: Photography,
          meta: {
            title: '摄影_'+GLOBAL.TITLE
          }
        }
      ]
    }
  ]
})
RouterMain.beforeEach((to,from,next) => {
  window.document.title=to.meta.title
  next()
})
export default RouterMain