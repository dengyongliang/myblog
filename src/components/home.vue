<template>
  <div class="contHome">
    <div class="photo"><img src="../../static/img/photo.png" alt="" /></div>
    <p class="slogan">只有更<br />“心”<br />才能赢得一切<br />……</p>
    <div class="top"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    try {
      window.swiperCont.slideTo(0, 300, false)
      $(".btnTop").hide()
      $('.swiper-slide-main.content').addClass("swiper-no-swiping")
    }
    catch(err) {
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
