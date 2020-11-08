<template>
  <common-card title="累计订单量"
               value="2,157,429">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">$ 198,213,123</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'totalOrder',
  mixins: [CommonCardMixin],
  data () {
    return {}
  },
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          boundaryGap: false, // 取消X轴两侧间距
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [620, 432, 220, 534, 790, 430, 220, 320, 530, 220, 834, 690, 530, 220, 555],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
