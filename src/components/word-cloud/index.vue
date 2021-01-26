<template>
  <div id="container"></div>
</template>

<script>
  import 'echarts-wordcloud'

  export default {
    name: 'wordCloud',
    mounted () {
      const chartData = [{
        name: 'Farrah Abraham',
        value: 366,
        textStyle: {}
      }, {
        name: '2 Abraham',
        value: 366,
        textStyle: {
          fontsize: '10px'
        }
      }, {
        name: '1 Abraham',
        value: 366,
        textStyle: {}
      }, {
        name: '3 Abraham',
        value: 366,
        textStyle: {}
      }]
      var chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption(({
        series: [{
          data: chartData,
          type: 'wordCloud',
          shape: 'circle',
          left: 'center',
          top: 'center',
          right: null,
          bottom: null,
          sizeRange: [12, 60],
          rotationRange: [-90, 90],
          rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: false,
          layoutAnimation: true,
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            focus: 'self',
            textStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        }]
      }))
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 1920px;
    height: 969px;
  }
</style>
