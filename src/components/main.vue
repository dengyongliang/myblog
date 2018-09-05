<template>
  <div>
    <Header></Header>
    <transition name="fold">
      <router-view></router-view>
    </transition>
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
