<template>
  <div class="cont404">
    <h3>404</h3>
    <p>肯定是你对我做了什么</p>
    <p>否则不会看到这些内容</p>
    <p>你要对我负责</p>
    <p>...</p>
    <p>除非你多看我几眼</p>
    <p>我才能放过你</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
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