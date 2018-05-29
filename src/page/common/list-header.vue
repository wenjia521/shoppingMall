<template>
  <div class="list-header">
    <div class="list-header-content">
      <div class="list-left">
        <div class="classify-title">
          <span class="iconfont title-icon">&#xe614;</span><span>全部商品分类</span>
        </div>
      </div>
      <div class="list-right">
        <ul class="list-right-content">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/brand">品牌</router-link></li>
            <li><router-link to="/resolution">解决方案</router-link></li>
            <li><router-link to="/experience">体验中心</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListHeader'
}
</script>
<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.list-header
  background: #fff
  height: 40px
  .list-header-content
    width: 1200px
    margin: 30px  auto 0
    .list-left
      float: left
      position: relative
      width: 220px
      height: 40px
      line-height: 40px
      background: $bgColor
      .classify-title
        text-align: center
        color: #fff
        font-size: 14px
        .title-icon
          position: absolute
          left: 20px
    .list-right
      width: 970px
      line-height: 38px
      float: left
      border-bottom: 2px solid $bgColor
      padding-left: 10px
      .list-right-content li
       float: left
       padding: 0 33px
       cursor:pointer
      .list-right-content >li> a
        color: #000
</style>
