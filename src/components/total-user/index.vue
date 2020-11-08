<template>
  <common-card
    title="累计用户数"
    value="100,000,0">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.3%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">2.3%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'totalUser',
  mixins: [CommonCardMixin],
  methods: {
    getOptions () {
      return {
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [{
          type: 'bar',
          stack: 'total',
          data: [200],
          barWidth: 12,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: 'total',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        }, { // 自定义绘制
          type: 'custom',
          stack: 'total',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M531.2 354.133333l281.6 281.6c10.666667 10.666667 14.933333 21.333333 10.666667 27.733334-4.266667 8.533333-12.8 12.8-27.733334 12.8h-569.6c-14.933333 0-25.6-4.266667-27.733333-12.8-4.266667-8.533333 0-17.066667 10.666667-27.733334l281.6-281.6c4.266667-4.266667 12.8-8.533333 19.2-8.533333s17.066667 4.266667 21.333333 8.533333z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M128 355.84L154.432 320h716.416l25.152 34.56L535.872 704h-52.928L128 355.84z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
