export default {
  // provide inject 组件通信
  inject: ['getReportData'],
  computed: {
    chartData () {
      return this.getReportData()
    }
  },
  methods: {
    thousandsFormatter (val) {
      const reg = /\d{1,3}(?=(\d{3})+$)/g
      return `${val}`.replace(reg, '$&,')
    }
  }
}
