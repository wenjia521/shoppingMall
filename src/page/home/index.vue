<template>
   <div class="main">
      <home-header></home-header>
      <home-ad></home-ad>
      <home-search></home-search>
      <list-header></list-header>
      <banner class="banner-con" :sliders="sliders" :banner="banner" :news="news"
       :classifyList="classify" :demo="demo">
      </banner>
      <div class="adtwo"></div>
      <stairs :stairs="stairs" :stairBrands = "stairBrands" :stairLeft="stairLeft"></stairs>
      <advert-bot></advert-bot>
      <information></information>
      <supply></supply>
      <yq-link></yq-link>
   </div>
</template>
<script>
import axios from 'axios'
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
  data () {
    return {
      banner: [],
      sliders: [],
      news: [],
      stairs: [],
      stairBrands: [],
      stairLeft: '',
      classify: [],
      demo: ''
    }
  },
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
  },
  methods: {
    getDataHome () {
      axios.get('/api/home.json')
        .then(this.handleDataSuccc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSuccc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        res.data.banner && (this.banner = res.data.banner)
        res.data.sliders && (this.sliders = res.data.sliders)
        res.data.news && (this.news = res.data.news)
        res.data.stairs && (this.stairs = res.data.stairs)
        res.data.stairBrands && (this.stairBrands = res.data.stairBrands)
        res.data.stairLeft && (this.stairLeft = res.data.stairLeft)
        res.data.classify && (this.classify = res.data.classify)
        res.data.demo && (this.demo = res.data.demo)
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  created () {
    this.getDataHome()
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
.classify-con
  position: relative
  left: 0
  top: 300px
</style>
