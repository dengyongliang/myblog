<template>
  <div class="contCareer">
    <timeline v-for="item in timeArray">
      <timeline-title>{{ item.time }}</timeline-title>
      <timeline-item bg-color="#fff" class="itemTime">{{ item.title }}</timeline-item>
      <timeline-item bg-color="#fff" class="itemCont" v-if="item.itemsText.length > 0" >
        <p v-for="text in item.itemsText">
          {{ text }}
        </p>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  name: 'Career',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  updated: function () {
    console.log('监听到了career更新完成')
    try {
      window.swiperCont.slideTo(0, 300, false)
      $(".btnTop").hide()
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
      timeArray: []
    }
  },
  methods: {
    // 获取case数据
    getData: function () {
      this.$http.get('../../static/data/career.js').then(
        function (res) {
          // window.datass = res.bodyText
          this.timeArray = eval('(' + res.bodyText + ')')
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
    'timeArray': {
      handler: function (val, oldVal) {
        console.log('监听到了case数据变化')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline{
  margin:0px;
  padding:20px 25px;
}
.timeline .timeline-title{
  font-size:18px;
}
.timeline .itemCont{
  padding:5px;
  border-radius:5px;
  font-size:12px;
  line-height:20px;
  background:#f28c8c;
  color:#fff!important;
}
.timeline-item{
  border-bottom:none;
}
.timeline-item.itemTime{
  margin-top:0px;
  margin-bottom:0px;
  padding-bottom:0px;
  font-size:14px;
}
.timeline-item.itemCont {
    margin-top:10px;
}
</style>

