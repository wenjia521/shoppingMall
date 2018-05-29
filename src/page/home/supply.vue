<template>
  <div class="enter clearfloat">
    <div class="supplier">
          <div class="title">我是供应商</div>
          <div class="content">海外即国内海量项目聚集</div>
          <div class="btn">立即入驻</div>
    </div>
    <div class=" supplier buyner">
          <div class="title">我是供应商</div>
          <div class="content">海外即国内海量项目聚集</div>
          <div class="btn">立即入驻</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Supply'
}
</script>
<style lang="stylus" scoped>
.enter
  overflow: hidden
  width: 1200px
  margin: 34px auto 10px
  padding: 34px 0
  .supplier
    float: left
    width: 510px
    height: 150px
    padding: 30px 37px
    background: url('/static/img/supply.jpg') no-repeat
    background-size: 100%
    color: #ffffff
    .title
      font-size: 26px
    .content
      font-size: 16px
      margin-top: 15px
    .btn
      margin-top: 16px
      width: 100px
      height: 30px
      line-height: 30px
      text-align: center
      border: 1px solid #fff
      font-size: 14px
  .buyner
    margin-left: 30px
    background: url('/static/img/buyner.jpg') no-repeat
    background-size: 100%
</style>
