<template>
  <common-card title="今日交易用户数"
               value="2,157,429">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">3.2%</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'todayUser',
  mixins: [CommonCardMixin],
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        series: [
          {
            type: 'bar',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
            barWidth: '60%'
          }
        ],
        xAxis: {
          show: false,
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
        },
        yAxis: {
          show: false
        },
        tooltip: {
          trigger: 'axis'
        },
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
