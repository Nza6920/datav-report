<template>
  <ve-liquidfill :data="chartData" height='100%' :settings="chartSettings"/>
</template>

<script>

/* eslint-disable */
function getColor (val) {
  return val > 0 && val <= 0.5 ? 'rgba(97, 216, 0, .7)' :
    val > 0.5 && val <= 0.8 ? 'rgba(204, 178, 26, .7)' :
      val > 0.8 ? 'rgba(241, 47, 28, .7)' : '#c7c7cb'
}

export default {
  name: 'veLiquidFill',
  data () {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [
          {
            title: 'rate',
            percent: 0.88
          }
        ]
      },
      chartSettings: {}
    }
  },
  mounted () {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            formatter: (v) => {
              return `${Math.floor(v.data.value * 100)}%`
            },

            position: ['50%', '50%'],
            insideColor: '#fff',
            normal: {
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: 'normal'
              },
            },
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
