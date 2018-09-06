<template>
  <div class="contCareer">
    <timeline v-for="item in timeArray">
      <timeline-title bg-color="#f28c8c">{{ item.title }}</timeline-title>
      <timeline-item bg-color="#9dd8e0" v-for="item2 in item.items">{{ item2 }}</timeline-item>
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
  data () {
    return {
      timeArray: [
        {
          title: 'title1',
          items: [1, 2, 3]
        },
        {
          title: 'title2',
          items: [1, 2]
        },
        {
          title: 'title3',
          items: [1, 2, 3, 4]
        }
      ]
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

