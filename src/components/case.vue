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
    this.GLOBALS.scrollTopEv()
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
  activated: function(){
    this.GLOBALS.scrollTopEv()
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