<template>
  <div class="contLife">
    <img class="blank" src="../../static/img/build.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    try {
      window.swiperCont.slideTo(0, 300, false)
    }
    catch(err) {
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contLife{
	text-align:center;
}
.contLife img{
	width:80%;
}
</style>

