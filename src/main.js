// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'n-zepto'
import Swiper from 'swiper'
import echarts from 'echarts'
import VueLazyLoad from 'vue-lazyload'

// 自定义方法及变量
import GLOBAL from './global/global'

Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  error: './static/img/error.jpg',
  loading: './static/img/loading.gif',
  attempt: 2
})
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.GLOBALS = GLOBAL

/* eslint-disable no-new */
let vm = new Vue({
  data: {
    path: ''
  },
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    let vue_this = this
    this.$nextTick(function () {
      // 去除遮罩
      // 等待首页背景图创建完毕
      // 背景图1-5张随机
      let image = new Image()
      image.src = this.GLOBALS.HOME_IMG_SRC
      image.onload = () => {
        vue_this.GLOBALS.setBgImgAndDelCover()
      }
      // 判断是否首页
      if(this.$route.name == 'Home'){
        $('.swiper-slide-main.content').addClass("swiper-no-swiping")
      }
      // swiper
      let menuButton = document.querySelector('.menu-button')
      window.swiper = new Swiper('.swiper-container-main', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: false,
        swipeHandler: '.swipe-handler',
        on: {
          init: function () {
            let slider = this
            menuButton.addEventListener('click', function () {
              if ($(menuButton).hasClass('open')) {
                // swiper 滚动条 重置
                window.swiperCont.resize.resizeHandler()
                $(menuButton).removeClass('open cross')
                slider.slideNext()
              } else {
                $(menuButton).addClass('open cross')
                slider.slidePrev()
              }
            }, true)
          },
          resize: function () {
            let clientWidth = $(document).width()
            if (!clientWidth) return
            document.documentElement.style.fontSize = 100 * (clientWidth / 1080) + 'px'
            // swiper.resize.resizeHandler();
            window.swiperCont.resize.resizeHandler()
          }
        }
      })
      window.swiperCont = new Swiper('.swiper-container-cont', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbarHide:true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        mousewheel: true,
        on: {
          init: function () {
          },
          touchStart: function(swiper){
            console.log(swiper)
            scrollEvents(vue_this, window.swiperCont)
          },
          touchMove: function(swiper){
            scrollEvents(vue_this, window.swiperCont)
          },
          touchEnd: function(swiper){
            scrollEvents(vue_this, window.swiperCont)
          },
          scroll: function(swiper){
            scrollEvents(vue_this, window.swiperCont)
          }
        }
      })
      // 模拟hover事件
      $(document).on('touchstart', '.action:not(.disable)', function (e) {
        let $this = $(this)
        let flag = true
        // 遍历子类
        $this.find('*').each(function () {
          // 查看有没有子类触发过active动作
          if ($(this).hasClass('active')) flag = false
        })
        // 如果子类已经触发了active动作，父类则取消active触发操作
        if (flag) $this.addClass('active')
      })
      $(document).on('touchmove', '.action:not(.disable)', function (e) {
        if ($(this).hasClass('active')) $(this).removeClass('active')
      })
      $(document).on('touchend', '.action:not(.disable)', function (e) {
        if ($(this).hasClass('active')) $(this).removeClass('active')
      })
    })
  },
  watch: {
    // 监听路由变化
    '$route': {
      handler: function (newroute,oldroute) {
        console.log('newroute='+newroute+';<br />')
        console.log('oldroute='+oldroute+'<br />')
      },
      immediate: true
    }
  }
})
router.onReady(() => {
  // 开始挂载到dom上
  vm.$mount('#app')
})
// 页面滚动所需处理内容
function scrollEvents(vue_this,swiper_cont){
  if( vue_this.$route.fullPath.indexOf("case")!=-1 || vue_this.$route.fullPath.indexOf("ability")!=-1 || vue_this.$route.fullPath.indexOf("career")!=-1 || vue_this.$route.fullPath.indexOf("photography")!=-1 ){
    // 对摄影栏目高度进行实时计算
    if( vue_this.$route.fullPath.indexOf("photography")!=-1 ){
      $(".scroll").each(function(){
        if($(this).hasClass("open")){
          let h = $(this).find(".wrap").height()
          $(this).css("height",h+'px');
        }else{
          let h = $(this).find("img").eq(0).height()
          $(this).attr("data-height",h).css("height",h+'px');
        }
      })
    }
    // 实时更新滚动条
    swiper_cont.resize.resizeHandler()
  }
  // 实时更新返回顶部按钮的现实/隐藏
  if (Math.abs(swiper_cont.getTranslate()) > $(document).height()) {
    $('.btnTop').show()
  } else {
    $('.btnTop').hide()
  }
}