<template>
  <div class="contCase">
    <ul class="list clear" >
      <li class="oneImg" v-for="item in caseArray">
        <a v-bind:href="item.href">
          <img class="blank" src="../../static/img/blank.png" alt="" />
          <img v-lazy="item.src" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Case',
  updated: function () {
    console.log('监听到了case更新完成')
    try {
      window.swiperCont.slideTo(0, 300, false)
    }
    catch(err) {
      console.log(err)
    }
    setTimeout(function () {
      window.swiperCont.resize.resizeHandler()
      window.swiperCont.resize.resizeHandler()
    }, 100)
  },
  data () {
    return {
      caseArray: []
    }
  },
  methods: {
    // 获取case数据
    getData: function () {
      this.$http.get('../../static/data/case.js').then(
        function (res) {
          // window.datass = res.bodyText
          this.caseArray = eval('(' + res.bodyText + ')')
        }, function (res) {
          return []
        }
      )
    }
  },
  mounted: function () {
    // 通过getData获取数据
    this.getData()
  },
  watch: {
    'caseArray': {
      handler: function (val, oldVal) {
        console.log('监听到了case数据变化')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
