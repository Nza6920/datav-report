<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <common-card
    title="累计销售量"
    :value='`$ ${thousandsFormatter(2000000)}`'>
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{chartData.day}}%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{chartData.month}}%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">$ {{chartData.yesterday}}</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
import CommonDataMixin from '../../mixins/commonDataMixin'

export default {
  name: 'totalSale',
  mixins: [CommonCardMixin, CommonDataMixin],
  data () {
    return {}
  },
  mounted () {
    console.log('total-sale')
  }
}
</script>

<style lang="scss" scoped>
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }

</style>
