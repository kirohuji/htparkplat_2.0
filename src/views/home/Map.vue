<template>
  <baidu-map
    class="bm-view"
    style="display: flex; flex-direction: column"
    :center="center"
    :zoom="15"
  >
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      center: { lng: 111.2772301, lat: 40.07128 }
    }
  }
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 100%;
}
</style>
