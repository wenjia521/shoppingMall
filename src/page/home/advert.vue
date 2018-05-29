<template>
    <div class="ad" v-show="show">
        <div class="ad-content">
            <i class="el-icon-error closed"  @click="closedAd"></i>
        </div>
    </div>
</template>
<script>
export default {
  name: 'homead',
  data () {
    return {
      show: true
    }
  },
  methods: {
    closedAd: function () {
      this.show = false
    }
  }
}

</script>
<style lang="stylus" scoped>
.ad
  width: 100%
  .ad-content
    width: 1200px
    height: 60px
    margin: 0 auto
    background-image: url('/static/img/ad.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
   .closed
     float: right
</style>
