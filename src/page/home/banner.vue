<template>
  <div class="banner clearfloat">
    <div class="banner-con clearfloat">
      <classify class="classify-list"></classify>
      <div class="swiper-con">
        <div class="swiper-top">
          <el-carousel>
              <el-carousel-item v-for="item in banner" :key="item.id">
                <img :src="item.imgUrl" alt="">
              </el-carousel-item>
          </el-carousel>
        </div>
        <div class="swiper-bottom">
           <el-carousel  type="card" height="120px" :autoplay="false" >
              <el-carousel-item v-for="item in sliders" :key="item.id">
                <img :src="item.imgUrl" alt="">
              </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="news">
        <div class="news-content clearfloat">
          <div class="news-title">
            <span class="gg">网站公告{{demo}}</span>
          </div>
          <div class="news-list  clearfloat">
            <div class="single-content"
                  v-for="(item, index) in news" :key ="item.id">
              <a href="">
                <span class="iconfont icon">&#xe608;</span>
                <div class="name"
                :class="{itemHover: itemHoverIndex == item.index}"
                v-on:mouseenter="mouseEnter(index)"
                v-on:mouseleave="mouseLeave">
                {{item.title}}
                </div>
                <div class="date">{{item.time}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Classify from './classify'
export default {
  name: 'Banner',
  components: {
    Classify
  },
  props: {
    banner: Array,
    sliders: Array,
    news: Array,
    classifyList: Array,
    demo: String
  },
  watch: {
    get: function () {
      console.log(this.banner)
    }
  },
  data () {
    return {
      itemHoverIndex: null,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    mouseEnter: function (index) {
      this.itemHoverIndex = index
    },
    mouseLeave: function () {
      this.itemHoverIndex = null
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/common/varibles.styl'
.banner
  width: 100%
  height: 490px
  background: #eef4f6
  .banner-con
    width: 1200px
    margin:0 auto
    height: 490px
    padding-top; 20px
    padding-left: 235px
    background: #eef4f6
    .classify-list
      width: 220px
      height: 460px
      float: left
    .news
      float: right
      width: 260px
      .news-content
        background: #fff
        padding: 16px 20px
        height: 428px
        .news-title
          padding-bottom: 11px
          border-bottom: 1px solid $comColor
          .gg
            padding-bottom: 8px
            border-bottom: 2px solid #2caf64
        .news-list
          margin-top: 20px
          .single-content a
           color: #333
          .icon
            float: left
            font-size: 12px
          .point
            float: left
            margin-top: 6px
            height: 3px
            width: 3px
            border-radius: 9999999px
            background: #7A7B7E
          .name
            float: left
            width: 196px
            height: 18px
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
            padding-left: 8px
          .itemHover
             color: #2caf64
          .date
            margin-left: 22px
            line-height: 18px
            font-size: 12px
            color: #999
    .swiper-con
      width: 690px
      padding: 0 15px
      height: 460px
      background-color: #EEF4F6
      float: left
      .swiper-top
        height: 310px
        margin: 15px 0 10px
        .el-carousel__item  img
          width: 690px
          height: 310px
      .swiper-bottom
        width: 690px
        height: 130px
        margin: 10px auto
</style>
