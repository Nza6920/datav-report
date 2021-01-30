<template>
  <div id="container">
  </div>
</template>

<script>
import 'echarts-wordcloud'

export default {
  name: 'WordCloud',
  mounted () {
    const data = [{
      name: '嘿嘿',
      value: 100
    }, {
      name: '嘿嘿2',
      value: 200
    }, {
      name: '嘿嘿2',
      value: 350
    }, {
      name: '嘿嘿',
      value: 100
    }, {
      name: '嘿嘿2',
      value: 200
    }, {
      name: '嘿嘿2',
      value: 350
    }]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        shape: 'circle',
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb( ' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
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
