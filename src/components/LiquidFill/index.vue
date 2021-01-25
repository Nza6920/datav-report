<template>
  <div id="container">

  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: 'liquidFill',
  mounted () {
    const data = [0.8, {
      value: 0.6,
      direction: 'left'
    }, {
      value: 0.4,
      itemStyle: {
        opacity: 0.6
      },
      emphasis: {
        itemStyle: {
          opacity: 0.9
        }
      }
    }]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data,
        color: ['red', 'blue', 'yellow'],
        waveAnimation: true,
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        },
        amplitude: 60,
        backgroundStyle: {
          color: 'purple',
          borderWidth: 4,
          borderColor: '#333'
        },
        outline: {
          show: true,
          borderDistance: 2
        }
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
