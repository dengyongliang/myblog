import Vue from 'vue'
import Router from 'vue-router'
import cate from '@/router/cate.js'
import NProgress from 'nprogress'
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
      component (resolve) {
        return require(['@/components/component404'], resolve)
      },
      meta: {
        title: '404_'+GLOBAL.TITLE
      }
    },
    {
      path: '/',
      name: '首页',
      component (resolve) {
        return require(['@/components/home'], resolve)
      },
      meta: {
        title: GLOBAL.TITLE
      }
    },
    cate
  ],
  base: '/',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
RouterMain.beforeEach((to,from,next) => {
  NProgress.start();
  window.document.title=to.meta.title
  next()
})
RouterMain.afterEach(transition => {
  NProgress.done();
});
export default RouterMain