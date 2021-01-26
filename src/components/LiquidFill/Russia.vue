<template>
  <div id="container">
  </div>
</template>

<script>
  import 'echarts-liquidfill'

  export default {
    name: 'Russia',
    mounted () {
      const data = [
        {
          value: 0.65,
          direction: 'left',
          amplitude: '0'
        },
        {
          value: 0.35,
          direction: 'right',
          amplitude: 0,
          itemStyle: {
            opacity: 1
          },
          emphasis: {
            itemStyle: {
              opacity: 1
            }
          }
        }]
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series: [{
          type: 'liquidFill',
          shape: 'circle',
          center: ['50%', '50%'],
          data,
          color: ['#0000FE', '#FE0000'],
          waveAnimation: false,
          radius: '60%',
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
            color: '#FFFDFF',
            borderWidth: 2,
            borderColor: '#1e1e1e'
          },
          outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
              borderWidth: 10,
              borderColor: '#1e1e1e'
            }
          },
          label: {
            formatter: 'Russia'
          }
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    background-color: #036EC0;
    width: 100%;
    height: 100%;
  }
</style>
