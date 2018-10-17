// 自定义方法及变量
import GLOBAL from '../global/global'
export default {
  path: '/cate',
  component (resolve) {
    return require(['@/components/main'], resolve)
  },
  children: [
    {
      path: '',
      name: '案例',
      component (resolve) {
        return require(['@/components/case'], resolve)
      },
      meta: {
        title: '案例_'+GLOBAL.TITLE
      }
    },
    {
      path: 'case',
      name: '案例',
      component (resolve) {
        return require(['@/components/case'], resolve)
      },
      meta: {
        title: '案例_'+GLOBAL.TITLE
      }
    },
    {
      path: 'ability',
      name: '技能',
      component (resolve) {
        return require(['@/components/ability'], resolve)
      },
      meta: {
        title: '技能_'+GLOBAL.TITLE
      }
    },
    {
      path: 'career',
      name: '生涯',
      component (resolve) {
        return require(['@/components/career'], resolve)
      },
      meta: {
        title: '生涯_'+GLOBAL.TITLE
      }
    },
    {
      path: 'photography',
      name: '摄影',
      component (resolve) {
        return require(['@/components/photography'], resolve)
      },
      meta: {
        title: '摄影_'+GLOBAL.TITLE
      }
    }
  ]
}