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
                <i class="iconfont icon-iconmingxinganli"></i>案例
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/ability">
                <i class="iconfont icon-caozuogongneng"></i>技能
              </router-link>
            </li>
              <li class="action">
              <router-link to="/cate/career">
                <i class="iconfont icon-mubiao"></i>生涯
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/photography">
                <i class="iconfont icon-xiangji"></i>摄影
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
                  <router-view></router-view>
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
