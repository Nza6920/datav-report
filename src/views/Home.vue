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
  }
}
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
