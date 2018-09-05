<template>
  <div class="contAbility">
    <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Ability',
  data () {
    return {
      ability: []
    }
  },
  updated: function () {

  },
  mounted () {
    this.getData()
  },
  methods: {
    // 获取ability数据
    getData: function () {
      this.$http.get('../../static/data/ability.js').then(
        function (res) {
          // window.datass = res.bodyText
          this.ability = eval('(' + res.bodyText + ')')
          // 设置屏幕可用区域高度
          $('#myChart').height($(window).height() - $('header').height() - $('footer').height() - 40)
          this.drawLine(this.ability[0])
        }, function (res) {
          return {}
        }
      )
    },
    drawLine (param) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: param.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: param.yAxis
          }
        ],
        series: [
          {
            name: '年份',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: param.year,
            itemStyle: {
              normal: {
                color: '#ffb499'
              }
            }
          },
          {
            name: '等级',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: param.lv,
            itemStyle: {
              normal: {
                color: '#ce413d'
              }
            }
          }
        ]
      })
      console.log('监听到了ability更新完成')
      window.swiperCont.resize.resizeHandler()
      window.swiperCont.resize.resizeHandler()
      window.swiperCont.slideTo(0, 300, false)
    }
  },
  watch: {
    'ability': {
      handler: function (val, oldVal) {
        console.log('监听到了ability数据变化')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contAbility{
  padding: 20px 10px;
}
</style>
