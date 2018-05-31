<template>
  <section class="detail-info-detail">
    <div class="detail-nav">
      <p class="nav-left-title">详细描述</p>
      <div class="nav-right-block"></div>
    </div>
    <div class="info-detail-desc">
      <div class="info-detail-item">
        <p class="info-detail-title">价格说明</p>
        <p class="info-detail-text">最终成交价按以当时市场报价为准</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'detail-introduce'
}
</script>
<style lang="stylus" scoped>
.detail-info-detail
  border: 1px solid #e2e2e2
  margin-top: 20px
  .detail-nav
    display: flex
    height: 40px
    .nav-left-title
      line-height: 40px
      width: 120px
      height: 40px
      border-top: 2px solid #2CAF64
      text-align: center
      color: #333
    .nav-right-block
      flex: 1
      background: #F3F3F3
      border: 1px solid #E2E2E2
  .info-detail-desc
    padding: 10px 30px 75px
    .info-detail-item
      padding-top: 20px
      padding-bottom: 20px
      border-bottom: 1px dotted #d6d6d6
      .info-detail-title
        font-size: 18px
        color: #333
        line-height: 25px
      .info-detail-text
        margin-top: 7px
        font-size: 14px
        color: #666
        line-height: 25px
</style>
