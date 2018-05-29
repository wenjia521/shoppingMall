<template>
  <div class="banner clearfloat">
    <div class="banner-con clearfloat">
      <classify class="classify-list"></classify>
      <div class="swiper-con">
        <div class="swiper-top">
          <el-carousel>
             <el-carousel-item>
              <img src="/static/img/banner.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="/static/img/banner2.jpg" alt="">
            </el-carousel-item>
             <el-carousel-item>
              <img src="/static/img/banner3.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="swiper-bottom">
           <el-carousel  type="card" height="120px" :autoplay="false" >
              <el-carousel-item>
                <img src="static/img/sm-banner.jpg" alt="">
              </el-carousel-item>
             <el-carousel-item>
                <img src="static/img/sm-banner2.jpg" alt="">
              </el-carousel-item>
             <el-carousel-item>
                <img src="static/img/sm-banner3.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="static/img/sm-banner4.jpg" alt="">
              </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="news">
        <div class="news-content clearfloat">
          <div class="news-title">
            <span class="gg">网站公告</span>
          </div>
          <div class="news-list  clearfloat">
            <div class="single-content">
              <a href="">
                <!-- <div class="point"></div> -->
                <span class="iconfont icon">&#xe608;</span>
                <div class="name">万郡绿建与庆东纳碧安热设备能达成供方战略合作！</div>
                <div class="date">2018-04-14 10:08:38</div>
              </a>
            </div>
            <div class="single-content">
              <a href="">
                <!-- <div class="point"></div> -->
                <span class="iconfont icon">&#xe608;</span>
                <div class="name">万郡绿建与庆东纳碧安热设备能达成供方战略合作！</div>
                <div class="date">2018-04-14 10:08:38</div>
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
  data () {
    return {
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
