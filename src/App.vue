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
              <router-link to="/">
                首页
              </router-link>
            </li>
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
              <router-link to="/cate/life">
                生活
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
    <div class="btnTop"></div>
    <div class="loading animated" id="load">
      <div class="shaft-load4">
        <div class="shaft1"></div>
        <div class="shaft2"></div>
        <div class="shaft3"></div>
        <div class="shaft4"></div>
        <div class="shaft5"></div>
        <div class="shaft6"></div>
        <div class="shaft7"></div>
        <div class="shaft8"></div>
        <div class="shaft9"></div>
        <div class="shaft10"></div>
      </div>
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
  }
}
</script>

<style type="text/css">
  .loading{width:100%;height:100%;position:fixed;top:0px;left:0px;background:#003366;z-index:9999;opacity: 1;}
  /* Shaft 4 */
[class^="shaft-load"] {
  margin: 50px auto;
  width: 60px;
  height: 30px;
}
[class^="shaft-load"] > div {
  float: left;
  background: #893878;
  height: 100%;
  width: 5px;
  margin-right: 1px;
  display: inline-block;
}
[class^="shaft-load"] .shaft1 {
  -webkit-animation-delay: 0.05s;
  -moz-animation-delay: 0.05s;
  -o-animation-delay: 0.05s;
  animation-delay: 0.05s;
}
[class^="shaft-load"] .shaft2 {
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -o-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
[class^="shaft-load"] .shaft3 {
  -webkit-animation-delay: 0.15s;
  -moz-animation-delay: 0.15s;
  -o-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
[class^="shaft-load"] .shaft4 {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
[class^="shaft-load"] .shaft5 {
  -webkit-animation-delay: 0.25s;
  -moz-animation-delay: 0.25s;
  -o-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
[class^="shaft-load"] .shaft6 {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  -o-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
[class^="shaft-load"] .shaft7 {
  -webkit-animation-delay: 0.35s;
  -moz-animation-delay: 0.35s;
  -o-animation-delay: 0.35s;
  animation-delay: 0.35s;
}
[class^="shaft-load"] .shaft8 {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
[class^="shaft-load"] .shaft9 {
  -webkit-animation-delay: 0.45s;
  -moz-animation-delay: 0.45s;
  -o-animation-delay: 0.45s;
  animation-delay: 0.45s;
}
[class^="shaft-load"] .shaft10 {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  -o-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
  .shaft-load4 {
    margin-top: 30vh;
    width: 80px;
  }
  .shaft-load4 > div {
    background-color: #739ba9;
    margin-right: 0;
    -webkit-animation: loading4 1.5s infinite ease-in-out;
    -moz-animation: loading4 1.5s infinite ease-in-out;
    -o-animation: loading4 1.5s infinite ease-in-out;
    animation: loading4 1.5s infinite ease-in-out;
    width: 8px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: scaleY(0.1);
    -moz-transform: scaleY(0.1);
    -ms-transform: scaleY(0.1);
    -o-transform: scaleY(0.1);
    transform: scaleY(0.1);
  }

  @-webkit-keyframes loading4 {
    50% {
      -webkit-transform: scaleY(1.5);
      -moz-transform: scaleY(1.5);
      -ms-transform: scaleY(1.5);
      -o-transform: scaleY(1.5);
      transform: scaleY(1.5);
      background: #739ba9;
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
  @-moz-keyframes loading4 {
    50% {
      -webkit-transform: scaleY(1.5);
      -moz-transform: scaleY(1.5);
      -ms-transform: scaleY(1.5);
      -o-transform: scaleY(1.5);
      transform: scaleY(1.5);
      background: #739ba9;
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
  @-o-keyframes loading4 {
    50% {
      -webkit-transform: scaleY(1.5);
      -moz-transform: scaleY(1.5);
      -ms-transform: scaleY(1.5);
      -o-transform: scaleY(1.5);
      transform: scaleY(1.5);
      background: #739ba9;
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
  @keyframes loading4 {
    50% {
      -webkit-transform: scaleY(1.5);
      -moz-transform: scaleY(1.5);
      -ms-transform: scaleY(1.5);
      -o-transform: scaleY(1.5);
      transform: scaleY(1.5);
      background: #739ba9;
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }


</style>

<style type="text/css">
  @import "assets/css/base.css";
</style>
<style type="text/css">
  @import "assets/css/pageHome.css";
</style>
