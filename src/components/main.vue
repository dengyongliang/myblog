<template>
  <div>
    <Header></Header>
    <div class="contMain">
      <transition name="fold">
        <router-view></router-view>
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
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
