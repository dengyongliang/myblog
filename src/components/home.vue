<template>
  <div class="contHome">
    <div class="photo">
      <img src="../../static/img/photo.png" alt="" />
      <div class="cover">邓永亮</div>
    </div>
    <p class="slogan">只有更<br />“心”<br />才能赢得一切<br />……</p>
    <div class="top" id="bgHome"></div>
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
    this.GLOBALS.setBgImgAndDelCover()
    this.GLOBALS.scrollTopEv()
  },
  activated: function(){
    this.GLOBALS.scrollTopEv()
  }
}
</script>