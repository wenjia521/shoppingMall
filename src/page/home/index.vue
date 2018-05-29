<template>
   <div class="main">
      <home-header></home-header>
      <home-ad></home-ad>
      <home-search></home-search>
      <list-header></list-header>
      <banner></banner>
      <div class="adtwo"></div>
      <stairs></stairs>
      <advert-bot></advert-bot>
      <information></information>
      <supply></supply>
      <yq-link></yq-link>
   </div>
</template>
<script>
import HomeHeader from '@page/common/header'
import HomeAd from '@page/common/advert'
import HomeSearch from '@page/common/search'
import ListHeader from '@page/common/list-header'
import Banner from './banner'
import Stairs from './stairs'
import Information from './inform'
import Supply from './supply'
import advertBot from '@page/common/advertBot'
import YqLink from '@page/common/yqLink'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAd,
    HomeSearch,
    ListHeader,
    Banner,
    Stairs,
    advertBot,
    Information,
    Supply,
    YqLink
  }
}
</script>
<style scoped lang="stylus">
.adtwo
  margin: 20px auto
  width: 1200px
  height: 80px
  background-image: url("http://mall.vandream.com:8081/group1/M00/00/01/rBCwI1riDtaAX-alAAMD5arsYH0060.jpg")
  background-repeat: no-repeat
  background-size: 100%

</style>
