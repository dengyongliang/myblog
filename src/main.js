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

Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  error: './static/img/error.jpg',
  loading: './static/img/loading.gif',
  attempt: 2
})
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

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
    this.$nextTick(function () {
      // 去除遮罩
      setTimeout(function () {
        //document.getElementById('load').className = ' fadeOutLeft'
        $('#load').addClass('fadeOutDown')
        // window.swiperCont.resize.resizeHandler()
        window.swiperCont.resize.resizeHandler()
      }, 3000)
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
      if ($('.swiper-container-main').length) {
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
      };
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
      // 返回顶部
      $('.btnTop').click(function () {
        window.swiperCont.slideTo(0, 300, false) // 切换到第一个slide，速度为1秒
      })
    })
  }
})

// window.vm.$router.afterEach((to, from) => {
//   window.vm.path = to.fullPath
// })
// window.vm.$watch(window.vm.$data.path, function (val) {
//   window.vm.$nextTick(function () {
//     alert(111)
//   })
// })
