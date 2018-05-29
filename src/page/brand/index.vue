<template>
  <div>
    <home-header></home-header>
    <home-ad></home-ad>
    <home-search></home-search>
    <list-header></list-header>
    <brand-list></brand-list>
    <advert-bot></advert-bot>
    <yq-link></yq-link>
  </div>
</template>
<script>
import HomeHeader from '@page/common/header'
import HomeAd from '@page/common/advert'
import HomeSearch from '@page/common/search'
import ListHeader from '@page/common/list-header'
import AdvertBot from '@page/common/advertBot'
import YqLink from '@page/common/yqLink'
import BrandList from './brand-list.vue'
export default {
  name: 'brand',
  components: {
    HomeHeader,
    HomeAd,
    HomeSearch,
    ListHeader,
    AdvertBot,
    YqLink,
    BrandList
  }
}
</script>
<style lang="stylus" scoped>

</style>
