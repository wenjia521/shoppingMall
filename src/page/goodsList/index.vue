<template>
  <div>
    <home-header></home-header>
    <home-ad></home-ad>
    <home-search></home-search>
    <list-header></list-header>
    <list></list>
    <goods-container></goods-container>
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
import List from './list'
import GoodsContainer from './goodsContainer'
export default {
  name: 'goods-list',
  components: {
    HomeHeader,
    HomeAd,
    HomeSearch,
    ListHeader,
    AdvertBot,
    YqLink,
    List,
    GoodsContainer
  }
}
</script>
<style lang="stylus" scoped>

</style>
