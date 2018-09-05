<template>
  <div class="mainBody">
    <div class="swiper-container swiper-container-main" id="app">
      <div class="swiper-wrapper swiper-wrapper-main">
        <div class="swiper-slide swiper-slide-main menu">
          <div class="logo">
            <img src="../static/img/logo2.png" alt="" />
          </div>
          <ul>
            <li class="action">
              <router-link to="/"> <i class="icon"><img src="../static/img/icon/icon_home.png" alt="" />
                <img class="hover" src="../static/img/icon/icon_home2.png" alt="" /></i>
                HOME
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/case"> <i class="icon"><img src="../static/img/icon/icon_work.png" alt="" />
                <img class="hover" src="../static/img/icon/icon_work2.png" alt="" /></i>
                CASE
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/ability">
                <i class="icon">
                  <img src="../static/img/icon/icon_people.png" alt="" />
                  <img class="hover" src="../static/img/icon/icon_people2.png" alt="" />
                </i>
                ABILITY
              </router-link>
            </li>
            <li class="action">
              <router-link to="/cate/life">
                <i class="icon">
                  <img src="../static/img/icon/icon_people.png" alt="" />
                  <img class="hover" src="../static/img/icon/icon_people2.png" alt="" />
                </i>
                LIFE
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
              <div class="swiper-slide swiper-slide-cont">
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
    <div class="btnTop"></div>
    <div class="loading" id="load">
      <div class="progress" id="progress">
        <div class="progress2"></div>
        <span class="value">0%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {

  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
</script>

<style type="text/css">
  .loading{width:100%;height:100%;position:fixed;top:0px;left:0px;background:#58819d;z-index:9999;display: none;}
  .loading img{width:100%;top:20%;left:0px;position:absolute;}
  .loading .progress{width:38%;height:3px;border:1px solid #fff;position: absolute;top: 45%;left: 50%;margin-left: -23%;-webkit-border-radius: 1px;border-radius: 1px;}
  .loading .progress2{background: #fff;width: 0%;height: 100%;}
  .loading .progress .value{display:block;width: 30px;height:26px;line-height:26px;position: absolute;right: -33px;top: -14px;font-size: 14px;color: #fff;}
  .fold-enter-active {
    animation-name: fadeIn;
    animation-duration: .3s;
  }
  .fold-leave-active {
    animation-name: fadeOut;
    animation-duration: .5s;
  }
</style>
<style type="text/css">
  @import "assets/css/swiper.min.css";
</style>
<style type="text/css">
  @import "assets/css/animate.css";
</style>
<style type="text/css">
  @import "assets/css/base.css";
</style>
<style type="text/css">
  @import "assets/css/pageHome.css";
</style>
