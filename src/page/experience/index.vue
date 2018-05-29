<template>
  <div>
    <home-header></home-header>
    <home-ad></home-ad>
    <home-search></home-search>
    <list-header></list-header>
    <experience></experience>
    <div class="footer-body">
      <div class="bottom-advert">
        <div class="brand">
          <img class="brand-img" src="http://mall.vandream.com:8081/group1/M00/00/02/rBCwJFr0ErmANxpFAABKCd9P3yk959.png" alt="">
        </div>
      </div>
      <yq-link></yq-link>
    </div>
  </div>
</template>
<script>
import HomeHeader from '@page/common/header'
import HomeAd from '@page/common/advert'
import HomeSearch from '@page/common/search'
import ListHeader from '@page/common/list-header'
import YqLink from '@page/common/yqLink'
import Experience from './experience.vue'
export default {
  name: 'brand',
  components: {
    HomeHeader,
    HomeAd,
    HomeSearch,
    ListHeader,
    YqLink,
    Experience
  }
}
</script>
<style lang="stylus" scoped>
.footer-body
  padding-top: 40px
  background: #fff
  .bottom-advert
    border-top: 1px solid #e2e2e2
    .brand
      width: 1072px
      height: 52px
      padding: 25px 63px
      margin: 0 auto
      .brand-img
        width: 100%
</style>
