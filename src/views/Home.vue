<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
import TopView from '../components/top-view'
import SalesView from '../components/sales-view'
import BottomView from '../components/bottom-view'
import MapView from '../components/mapView'

export default {
  name: 'home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {
      reportData: {
        day: '',
        month: '',
        yesterday: ''
      },
      wordCloud: null,
      mapData: null
    }
  },
  // provide inject 组件通信
  provide () {
    return {
      getReportData: this.getReportData
    }
  },
  methods: {
    getReportData () {
      return this.reportData
    }
  },
  mounted () {
    console.log('home')
    this.reportData = {
      day: 7.33,
      month: 8.66,
      yesterday: '21,999,999'
    }
  }
}
</script>

<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
