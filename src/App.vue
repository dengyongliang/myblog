<template>
  <div class="mainBody">
    <div class="swiper-container swiper-container-main" id="app">
      <div class="swiper-wrapper swiper-wrapper-main">
        <div class="swiper-slide swiper-slide-main menu">
          <div class="logo">
            <a href="#/"><img src="../static/img/logo2.png" alt="" /></a>
          </div>
          <ul>
            <li class="action">
              <router-link to="/cate/case">
                案例
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/ability">
                技能
              </router-link>
            </li>
              <li class="action">
              <router-link to="/cate/career">
                生涯
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/photography">
                摄影
              </router-link>
            </li>
          </ul>
        </div>
        <div class="swiper-slide swiper-slide-main content">
          <div class="menu-button">
            <div class="barWrap">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="swiper-container swiper-container-cont">
            <div class="swiper-wrapper swiper-wrapper-cont">
              <div class="swiper-slide swiper-slide-cont ">
                <transition name="fold" mode="out-in">
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                </transition>
              </div>
            </div>
            <!-- Add Scroll Bar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnTop" v-on:click="goTop"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  },
  methods:{
    // 返回顶部
    goTop: function () {
      window.swiperCont.slideTo(0, 300, false) // 切换到第一个slide，速度为1秒
    }
  }
}
</script>

<style>
@import 'nprogress/nprogress.css';
#nprogress .bar{
  background: #f00 !important;
}
</style>
