<template>
  <div class="detail-info-previews">
    <div class="previews-left-btn disabled"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
      </div>
    </div>
    <div class="previews-right-btn disabled"></div>
  </div>
</template>
<script>
export default {
  name: 'detail-slide'
}
</script>
<style lang="stylus" scoped>
.detail-info-previews
  .disabled
    cursor: not-allowed
    margin-top: 10px
  .previews-left-btn
    position: relative
    display: inline-block
    width: 20px
    height: 60px
  .previews-left-btn:before
    content: ''
    position: absolute
    top: 18px
    left: 4px
    z-index: 2
    width: 24px
    height: 24px
    border: 4px solid #E0E0E0
    border-top: none
    border-right: none
    transform: rotate(45deg)
  .swiper-container
    display: inline-block
    width: 350px
    height: 60px
    overflow: hidden
    font-size: 14px
    .swiper-wrapper
      .swiper-slide
        box-sizing: border-box
        width: 60px
        height: 60px
        margin-left: 10px
        background: url('/static/img/sm-detail.jpg') no-repeat center
        background-size: contain
        cursor: pointer
        border: 3px solid #2CAF64
  .previews-right-btn
    position: relative
    display: inline-block
    width: 20px
    height: 60px
  .previews-right-btn:before
    content: ''
    position: absolute
    top: 18px
    right: 4px
    z-index: 2
    width: 24px
    height: 24px
    border: 4px solid #E0E0E0
    border-top: none
    border-right: none
    transform: rotate(225deg)
</style>
