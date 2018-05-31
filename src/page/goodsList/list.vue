<template>
  <div class="goods-list">
   <ul class="crumbs">
      <li>当前位置:</li>
      <li><a href="">首页></a></li>
      <li><p>精装修></p></li>
      <li><p>卫浴></p></li>
      <li><p>卫浴龙头/花洒</p></li>
    </ul>
    <div class="parameters">
      <div class="list">
        <p class="label">规格:</p>
        <ul class="list-item">
          <li  class="active">全部</li>
          <li>4.0mm（25kg）</li>
        </ul>
      </div>
       <div class="list">
        <p class="label">规格:</p>
        <ul class="list-item">
          <li  class="active">全部</li>
          <li>4.0mm（25kg）</li>
        </ul>
      </div>
       <div class="list">
        <p class="label">规格:</p>
        <ul class="list-item">
          <li  class="active">全部</li>
          <li>4.0mm（25kg）</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list'
}
</script>
<style lang="stylus" scoped>
.goods-list
  width: 1200px
  margin: 0 auto
  overflow: hidden
  .crumbs
    overflow: hidden
  .crumbs li
    float: left
    list-style: none
    height: 50px
    line-height: 50px
    margin-right: 10px
    color: #666
  .crumbs li a
    color: #333
  .parameters
    overflow: hidden
    border: 1px solid #e2e2e2
    border-bottom: 0px
    .list
      border-bottom: 1px solid #e2e2e2
      overflow: hidden
      .label
        float: left
        color: #666
        width: 84px
        margin: 10px 12px
        height: 24px
        line-height: 24px
      .list-item
        float: left
        height: 44px
        margin-top: 3px
        width: 930px
      .list-item li
        float: left
        height: 34px
        line-height: 17px
        width: 93px
        margin: 10px 37px 0 0
      .active
        color: #F18115
</style>
