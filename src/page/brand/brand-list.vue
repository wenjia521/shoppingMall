<template>
  <div class="brand">
    <div class="brand-content">
      <div class="brand-nav">
          当前位置:
        <router-link to="/" class="brand-nav-home">首页</router-link>
          > 品牌
      </div>
      <ul class="brandList">
        <li class="brandItem">
          <div class="list-img">
            <img src="/static/img/brandItem.png" alt="">
          </div>
          <div class="list-content">
            <h1>广东大禹</h1>
            <p>盾然天峰，安之海内。1998年，浙江盾安三尚机电有限公司在诸暨小镇店口成立，向行业正式宣告进军制冷设备行业。20年来，盾安中央空调从无到有，从弱小到壮大，书写出中国中央空调企业发展史上绚丽的一章；20年来，盾安中央空调不断提倡科学发展观，促进技术进步，从最初的末端产品制造，到如今磁悬浮变频离心式冷水机机组制造，从传统的直销模式到如今经销商的遍地开花，盾安人一直在努力，从上到下，大家都在为打造百年盾安做着各自的努力；20年来，盾安中央空调稳步前行，在越来越多的建筑中都能够见到盾安中央空调的身影，这些成就的取得，都是全体盾安人的不懈努力，盾安为有这样一只强大的队伍而倍感骄傲。</p>
          </div>
          <div class="list-btn">查看详情</div>
        </li>
         <li class="brandItem">
          <div class="list-img">
            <img src="/static/img/brandItem.png" alt="">
          </div>
          <div class="list-content">
            <h1>广东大禹</h1>
            <p>盾然天峰，安之海内。1998年，浙江盾安三尚机电有限公司在诸暨小镇店口成立，向行业正式宣告进军制冷设备行业。20年来，盾安中央空调从无到有，从弱小到壮大，书写出中国中央空调企业发展史上绚丽的一章；20年来，盾安中央空调不断提倡科学发展观，促进技术进步，从最初的末端产品制造，到如今磁悬浮变频离心式冷水机机组制造，从传统的直销模式到如今经销商的遍地开花，盾安人一直在努力，从上到下，大家都在为打造百年盾安做着各自的努力；20年来，盾安中央空调稳步前行，在越来越多的建筑中都能够见到盾安中央空调的身影，这些成就的取得，都是全体盾安人的不懈努力，盾安为有这样一只强大的队伍而倍感骄傲。</p>
          </div>
          <div class="list-btn">查看详情</div>
        </li>
         <li class="brandItem">
          <div class="list-img">
            <img src="/static/img/brandItem.png" alt="">
          </div>
          <div class="list-content">
            <h1>广东大禹</h1>
            <p>盾然天峰，安之海内。1998年，浙江盾安三尚机电有限公司在诸暨小镇店口成立，向行业正式宣告进军制冷设备行业。20年来，盾安中央空调从无到有，从弱小到壮大，书写出中国中央空调企业发展史上绚丽的一章；20年来，盾安中央空调不断提倡科学发展观，促进技术进步，从最初的末端产品制造，到如今磁悬浮变频离心式冷水机机组制造，从传统的直销模式到如今经销商的遍地开花，盾安人一直在努力，从上到下，大家都在为打造百年盾安做着各自的努力；20年来，盾安中央空调稳步前行，在越来越多的建筑中都能够见到盾安中央空调的身影，这些成就的取得，都是全体盾安人的不懈努力，盾安为有这样一只强大的队伍而倍感骄傲。</p>
          </div>
          <div class="list-btn">查看详情</div>
        </li>
      </ul>
      <div class="pageCon">
         <div class="pageNav">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'brand-list'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/common/varibles.styl'
.brand
  background: #F8F8F8
  padding-top: 10px
  .brand-content
    width: 1200px
    margin: 0 auto
    .brand-nav
      margin-bottom: 10px
      font-size: 14px
      .brand-nav-home
        color: #333
        &:hover
          color: $bgColor
    .brandList
      overflow: hidden
      .brandItem
        position: relative
        box-sizing: border-box
        margin-bottom: 10px
        height: 200px
        padding: 30px
        background: #fff
        .list-img
          width: 210px
          height: 140px
          border: 1px solid #E2E2E2
          display: inline-block
        .list-img img
          width: 190px
          height: 73px
          display: block
          margin: 34px auto 0
        .list-content
          display: inline-block
          width: 777px
          vertical-align: top
          margin-left: 40px
          cursor: pointer
        .list-content h1
          font-size: 18px
          color: #333
          margin-top: 12px
        .list-content p
          font-size: 13px
          color: #666
          line-height: 24px
          margin: 18px 0 14px
          cursor: pointer
          display: -webkit-box
          overflow: hidden
          text-overflow: ellipsis
          -webkit-line-clamp: 4
          -webkit-box-orient: vertical
        .list-btn
          width: 80px
          height: 30px
          text-align: center
          line-height: 30px
          border: 1px solid #e2e2e2
          position: absolute
          top: 85px
          right: 36px
    .pageCon
      overflow: hidden
      .pageNav
        overflow: hidden
        color: #666
        font-size: 12px
        text-align: center
        margin: 34px 0 40px
</style>
