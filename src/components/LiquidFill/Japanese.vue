<template>
  <div id="container">
  </div>
</template>

<script>
  import 'echarts-liquidfill'

  export default {
    name: 'Japanese',
    mounted () {
      const data = []
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series: [{
          type: 'liquidFill',
          shape: 'circle',
          center: ['50%', '50%'],
          data,
          color: ['#0000FE', '#FE0000'],
          waveAnimation: false,
          radius: '50%',
          itemStyle: {
            opacity: 1,
            shadowBlur: 0
          },
          emphasis: {
            itemStyle: {
              opacity: 1
            }
          },
          backgroundStyle: {
            color: '#BB002D',
            borderWidth: 0,
            borderColor: '#ffffff'
          },
          outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
              borderWidth: 0,
              borderColor: '#ffffff'
            }
          },
          label: {
            formatter: 'Japanese'
          }
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
  }
</style>
