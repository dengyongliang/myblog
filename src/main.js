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
window.vm = new Vue({
  el: '#app',
  data: {
    path: ''
  },
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    var vue_this = this
    this.$nextTick(function () {
      // 去除遮罩
      // 等待首页背景图创建完毕
      // 背景图1-5张随机
      var image = new Image()
      image.src = this.GLOBALS.HOME_IMG_SRC
      image.onload = function () {
        vue_this.GLOBALS.setBgImgAndDelCover()
      }
      // 判断是否首页
      if(this.$route.name == 'Home'){
        $('.swiper-slide-main.content').addClass("swiper-no-swiping")
      }
      // 缩放
      // var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      var clientWidth = document.documentElement.clientWidth
      if (!clientWidth) return
      document.documentElement.style.fontSize = 100 * (clientWidth / 1080) + 'px'
      // swiper
      var menuButton = document.querySelector('.menu-button')
      window.swiper = new Swiper('.swiper-container-main', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: false,
        swipeHandler: '.swipe-handler',
        on: {
          init: function () {
            var slider = this
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
            var clientWidth = $(document).width()
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
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        mousewheel: true,
        on: {
          init: function () {
          },
          transitionEnd: function (swiper) {
            if (Math.abs(window.swiperCont.getTranslate()) > $(document).height()) {
              $('.btnTop').show()
            } else {
              $('.btnTop').hide()
            }
          }
        }
      })
      // 模拟hover事件
      $(document).on('touchstart', '.action:not(.disable)', function (e) {
        var $this = $(this)
        var flag = true
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