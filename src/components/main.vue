<template>
  <div>
    <Header></Header>
    <div class="contMain">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="routerView2"></router-view>
        </keep-alive>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
export default {
  components: { Header, Footer },
  name: 'Main',
  mounted: function () {
    this.$nextTick(function () {
      // 设置屏幕可用区域高度
      $('.contMain').css('min-height', ($(window).height() - $('header').height() - $('footer').height()))
      $('.swiper-slide-main.content').removeClass("swiper-no-swiping")
    })
  },
  data () {
    return {
      transitionName: 'fold'  // 默认动态路由变化为slide-right
    }
  }
  // ,
  // watch: {
  //   '$route' (to, from) {
  //     let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
  //     if(isBack) {
  //       this.transitionName = 'slide-right'
  //     } else {
  //       this.transitionName = 'slide-left'
  //     }
  //     this.$router.isBack = false
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
