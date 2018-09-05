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
Vue.use(VueLazyLoad,{
    error:'./static/img/error.jpg',
    loading:'./static/img/loading.gif'
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
      // loading
      var cacheList = [
        [1434407, 'bg_home_top.jpg'],
        [18091, 'blank.png'],
        [98788, 'logo2.png'],
        [1339344, 'photo.jpg']
        // [897104, 'view/view01.png'],
        // [724262, 'view/view02.png'],
        // [849000, 'view/view03.png'],
        // [525490, 'view/view04.png'],
        // [76215, 'view/view05.png'],
        // [1075116, 'view/view06.png'],
        // [1626161, 'view/view07.png'],
        // [1611991, 'view/view08.png'],
        // [1315838, 'view/view09.png'],
        // [1343060, 'view/view10.png'],
        // [422006, 'view/view11.png'],
        // [355325, 'view/view12.png'],
        // [406810, 'view/view13.png'],
        // [764915, 'view/view14.png'],
        // [1768464, 'view/view15.png'],
        // [372553, 'view/view16.png'],
        // [68191, 'view/view17.png'],
        // [1234465, 'view/view18.png'],
        // [1070252, 'view/view19.png'],
        // [606782, 'view/view20.png'],
        // [1495521, 'view/view21.png'],
        // [590872, 'view/view22.png'],
        // [670968, 'view/view23.png']
      ]
      var cacheObj = {
        progress: 0
      }
      function perload () {
        var total = 0
        var item
        var obj = {}
        for (var i = 0; i < cacheList.length; i++) {
          item = cacheList[i]
          total += item[0]
          obj[item[1]] = item[0]
        }
        cacheObj.total = total
        cacheObj.list = obj
      }

      function setProgress (progress) {
        progress = progress > 1 ? 1 : progress < 0 ? 0 : progress
        $('.loading .progress2').css('width', Math.ceil(progress * 100) + '%')
        $('.loading .value').text(Math.ceil(progress * 100) + '%')

        if (Math.ceil(progress * 100) === 100) {
          setTimeout(function () {
            $('.loading').hide()
            document.getElementById('load').remove()
            window.swiperCont.resize.resizeHandler()
            window.swiperCont.resize.resizeHandler()
          }, 800)
        }
      }
      window.setProgress = setProgress

      function loadImage (imgsrc) {
        var image = new Image()
        image.src = imgsrc
        image.onload = function () {
          // console.log(imgsrc.split('static/img/')[1])
          cacheObj.progress += cacheObj.list[imgsrc.split('static/img/')[1]] / cacheObj.total
          setProgress(cacheObj.progress)
          if (cacheList[0]) {
            loadImage('static/img/' + cacheList.pop()[1])
          }
        }
        image.src = imgsrc
      }

      perload()
      loadImage('static/img/' + cacheList.pop()[1])

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
