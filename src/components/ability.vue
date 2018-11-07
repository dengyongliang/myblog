<template>
  <div class="contAbility">
    <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
    <table>
      <tr>
        <td class="col1">
          5:
        </td>
        <td>
          深入了解相关知识，未实际应用
        </td>
      </tr>
      <tr>
        <td class="col1">
          6:
        </td>
        <td>
          深入了解相关知识，对api进行一些实践
        </td>
      </tr>
      <tr>
        <td class="col1">
          7:
        </td>
        <td>
          有小型项目实践经验
        </td>
      </tr>
      <tr>
        <td class="col1">
          8 - 9:
        </td>
        <td>
          有大型项目实践经验，相关知识有深刻的理解
        </td>
      </tr>
      <tr>
        <td class="col1">
          10:
        </td>
        <td>
          实践案例多，经验丰富
        </td>
      </tr>
    </table>
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
          $('#myChart').height(this.ability[0].yAxis.length * 40)
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
            name: '熟练',
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
    }
  },
  activated: function(){
    this.GLOBALS.scrollTopEv()
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
.contAbility table{
  margin:20px;
  font-size:12px;
}
.contAbility table td{
  padding:5px 10px;
}
.contAbility table td.col1{
  width:70px;
  text-align:right;
}
</style>
