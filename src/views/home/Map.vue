<template>
  <baidu-map class="bm-view"
             style="display: flex; flex-direction: column"
             :center="center"
             :zoom="15">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
    <bm-marker v-for="(item,index) in enterprises"
               :key="index"
               :position="{lng: item.baiduLocation[1], lat: item.baiduLocation[0]}"
               :dragging="false"
               animation="BMAP_ANIMATION_BOUNCE">
      <bm-label :content="item.enterprise.alias"
                :labelStyle="{color: 'red', fontSize : '8px'}"
                :offset="{width: -35, height: 30}" />
    </bm-marker>
  </baidu-map>
</template>

<script>
import enterprises from './enterprises.js'
export default {
  data () {
    return {
      center: { lng: 111.2772301, lat: 40.07128 },
      enterprises: enterprises
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
