<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"/>
</template>

<script>
export default {
  name: 'wordCloud',
  data () {
    const random = function () {
      return Math.floor(Math.random() * 100)
    }

    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '肥皂1',
          value: random()
        }, {
          name: '肥皂2',
          value: random()
        }, {
          name: '肥皂3',
          value: random()
        }, {
          name: '肥皂4',
          value: random()
        }, {
          name: '肥皂5',
          value: random()
        }, {
          name: '肥皂6',
          value: random()
        }, {
          name: '肥皂7',
          value: random()
        }, {
          name: '肥皂8',
          value: random()
        }, {
          name: '肥皂9',
          value: random()
        }, {
          name: '肥皂10',
          value: random()
        }]
      },
      chartSettings: {
        color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(97, 216, 0, .7)', 'rgba(204, 166, 24, .7)']
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
