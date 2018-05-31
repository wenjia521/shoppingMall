<template>
  <div class="good-detail">
    <ul class="crumbs">
      <li>当前位置:</li>
      <li><a href="">首页></a></li>
      <li><a href="">装配式建筑></a></li>
      <li><a href="">结构材料></a></li>
      <li><a href="">型钢></a></li>
    </ul>
    <section class="goods-detail-info">
      <div class="detail-info-imgs">
        <div class="main-carousel"></div>
        <div class="detail-info-previews">
         <slide></slide>
        </div>
      </div>
      <div class="detail-info-main">
        <p class="detail-info-name">东方鑫晟U型钢</p>
      <div class="detail-info-price">
        <div class="detail-price-lines">
          <p class="detail-price-unit">
            <span class="detail-price-key">价      格：</span>
            <span class="detail-price-value">￥议价</span>
            <span class="detail-price-key detail-count-unit">计价单位：</span>
            <span class="detail-unit-value">吨</span>
          </p>
          <p class="detail-info-code">
            <span class="detail-price-key detail-price-code">商品编码：</span>
            <span class="detail-code-value">00001092</span>
          </p>
        </div>
        <div class="detail-number-box">
          <div class="detail-member-price">
            <p class="detail-vip-price"><span class="iconfont icon-color">&#xe61d;</span> VIP会员价格：</p>
            <p class="detail-vip-price detail-level-price"><span class="iconfont icon-color2">&#xe632;</span>高级会员价格：</p>
            <button type="button" class="el-button detail-login-btn el-button--default"><!----><!----><span>登录</span></button>
          </div>
      </div>
      </div>
       <div class="detail-info-area">
        <span class="detail-area-label">供货区域：</span>
        <select name="" id="" class="detail-area-select">
          <option>唐山市</option>
        </select>
       </div>
        <div class="price-params-list">
          <div class="price-params-item">
            <div class="price-params-label" title="品种">品种: </div>
            <div class="params-value-list">
              <li class="param-value-item">U型钢</li>
            </div>
          </div>
        </div>
        <div class="detail-order-num">
          <span class="order-num-label">采购数量：</span>
          <input type="number" class="order-num-input" value="10">
          <span class="order-num-label min-order-num">最小起订量：</span>
          <span class="order-num-count">10</span>
          <span class="order-num-label">吨</span>
        </div>
      </div>
    </section>
    <detail-introduce></detail-introduce>
  </div>
</template>
<script>
import Slide from './slide'
import DetailIntroduce from './detailintroduce'
export default {
  name: 'goods-detail',
  components: {
    Slide,
    DetailIntroduce
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.good-detail
  width: 1200px
  margin: 10px auto
  box-sizing: border-box
  .crumbs
    overflow: hidden
  .crumbs li
    display: inline-block
    float: left
    font-size: 14px
    margin-right: 10px
    height: 50px
    line-height: 50px
  .crumbs li a
    color: #333
  .goods-detail-info
    overflow: hidden
    display: flex
    .detail-info-imgs
      width: 400px
      float: left
      .main-carousel
        border: 1px solid #e2e2e2
        height: 400px
        background: url('/static/img/detail01.jpg') no-repeat center
        background-size: contain
    .detail-info-previews
      margin-top: 10px
    .detail-info-main
      float: left
      flex: 1
      margin-left: 20px
      .detail-info-name
        font-size: 20px
        line-height: 25px
        color: #333
      .detail-info-price
        display: flex
        margin-top: 10px
        height: 106px
        width: 100%
        box-sizing: border-box
        padding: 20px 15px 0
        background: #f7f7f7
        border: 1px solid #f7f7f7
        border-top: 1px solid #F18115
        .detail-price-lines
          flex: 1
          .detail-price-unit
            line-height: 33px
            color: #333
            font-size: 14px
            height: 33px
            flex: 1
            .detail-price-key
              font-size: 14px
              color: #666666
              vertical-align: middle
            .detail-price-value
              font-size: 24px
              color: #FF2834
              vertical-align: middle
            .detail-unit-value
              font-size: 14px
              color: #151515
              vertical-align: middle
          .detail-info-code
            margin-top: 12px
            .detail-price-key
              font-size: 14px
              color: #666666
            .detail-code-value
              font-size: 14px
              color: #151515
        .detail-number-box
          position: relative
          margin-top: -4px
          width: 276px
          height: 75px
          padding-top: 15px
          box-sizing: border-box
          background: #fff
          .detail-member-price
            .detail-vip-price
              padding-left: 18px
              line-height: 20px
              margin-left: 15px
              .icon-color
                color: orange
                margin-right: 5px
              .icon-color2
                color: blue
                margin-right: 5px
            .detail-level-price
              padding-left: 18px
              margin-left: 15px
              line-height: 20px
              color: #333
            .detail-login-btn
              position: absolute
              right: -6px
              top: 26px
              z-index: 2
              padding: 4px 34px
              background-image: linear-gradient(90deg, #FEA421 0%, #FF6F11 95%)
              border-radius: 80px 0 0 80px
              font-family: PingFangSC-Medium
              font-size: 14px
              line-height: 20px
              color: #FFFFFF
      .detail-info-area
        margin-top: 20px
        padding: 0 15px
        line-height: 17px
        .detail-area-label
          font-size: 12px
          color: #666
        .detail-area-select
          width: 150px
          height: 30px
          margin-left: 10px
          font-size: 12px
          color: #000
          border: 1px solid #d2d2d2
      .price-params-list
        padding: 15px
        margin-top: 15px
        border-top: 1px dashed #d2d2d2
        border-bottom: 1px dashed #d2d2d2
        .price-params-item
          line-height: 34px
          overflow: hidden
          .price-params-label
            width: 60px
            float: left
            font-size: 12px
            color: #666
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          .params-value-list
            float: left
            width: 680px
            margin-left: 3px
            box-sizing: border-box
            .param-value-item
              display: inline-block
              margin-left: 10px
              padding: 0 10px
              box-sizing: border-box
              line-height: 34px
              color: #333
              position: relative
              border: 2px solid #2CAF64
      .detail-order-num
        margin-top: 10px
        padding: 10px 15px
        line-height: 36px
        font-size: 12px
        .order-num-label
          color: #666
        .order-num-input
          box-sizing: border-box
          margin-left: 6px
          padding-left: 10px
          width: 100px
          height: 36px
          color: #333
          border: 1px solid #E2E2E2
          box-shadow: inset 2px 2px 2px 0 rgba(0, 0, 0, 0.1)
        .min-order-num
          margin-left: 40px
        .order-num-count
          color: #151515
        .order-num-label
          color: #666
</style>
