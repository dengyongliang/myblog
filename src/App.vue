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
    <div class="loading animated" id="load">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#8cd0e5" stroke-width="4" stroke-dasharray="2.5658892822265624 2.5658892822265624"><animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate></path></svg>
      <strong>Welcome</strong>
      <p>DengYongliang's Blog</p>
    </div>
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

<style type="text/css">
  .loading{width:100%;height:100%;position:fixed;top:0px;left:0px;background:#003366;z-index:9999;opacity: 1;text-align:center;}
  .loading svg{
    width:30%;
    display:inline-block;
    margin-top:40%;
  }
  .loading strong{
    display:block;
    color:#fff;
    font-size:40px;
  }
  .loading p{
    color:#8cd0e5;
    padding-top:30px;
    font-size:14px;
  }
</style>

<style type="text/css">
  @import "assets/css/base.css";
</style>
<style type="text/css">
  @import "assets/css/pageHome.css";
</style>
