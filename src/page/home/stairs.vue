<template>
  <div class="stairs">
    <div class="stairs-con clearfloat">
      <div class="title">1F 装配式建筑</div>
      <div class="stairs-main">
        <div class="main-left clearfloat">
          <img class="main-img" :src="stairLeft" alt="">
          <div class="intro clearfix">
            <div class="data"><a class="data-con" href="" target="_blank">螺栓/螺母及垫片</a></div>
            <div class="data"><a class="data-con" href="" target="_blank">栓钉</a></div>
            <div class="data"><a class="data-con" href="" target="_blank">焊材</a></div>
            <div class="data"><a class="data-con" href="" target="_blank">气保焊枪/配件</a></div>
            <div class="data"><a class="data-con" href="" target="_blank">彩涂</a></div>
            <div class="data"><a  class="data-con" href="" target="_blank">热卷</a></div>
          </div>
        </div>
        <div class="main-right-top clearfloat">
          <div class="rightTopItem" v-for="item in stairs" :key="item.id">
             <router-link to="/detail/">
                <img  class="product" :src="item.imgUrl" alt="">
                <div class="name">{{item.title}}</div>
                <div class="price">
                  {{item.price}}<span>/{{item.unit}}</span>
                </div>
                <div class="warning">{{item.warning}}</div>
            </router-link>
           </div>
        </div>
        <div class="main-right-bottom" >
          <a href="" v-for ="(item, index) in stairBrands" v-bind:key="index">
            <img  class="bot-img" :src="item.imgUrl" alt="">
            <div class="border-r"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
export default {
  name: 'Stairs',
  props: {
    stairs: Array,
    stairBrands: Array,
    stairLeft: String
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/home/stair.css'
@import '../../assets/style/common/varibles.styl'
.stairs-con
  width: 1200px
  margin: 12px auto 0
  .title
    margin-bottom: 6px
    color: #160000
    font-size: 18px
   .main-left
     float: left
     width: 240px
    .main-img
      width: 240px
      height: 394px
    .intro
      height: 89px
      border: 1px solid $comColor
      padding: 22px 15px
      .data
        float: left
        margin-bottom: 18px
        padding: 0 4px
        height: 15px
        line-height: 15px
        font-size: 13px
        border-right: 1px solid $comColor
        .data-con
          color: #333 !important
    .main-right-top
      overflow: hidden
      float: left
      width: 950px
      height: 450px
      margin-left: 5px
      border-top: 1px solid $comColor
      border-left: 1px solid $comColor
      .rightTopItem
        position: relative
        margin: 0
        float: left
        padding: 16px 10px 5px 10px
        width: 169px
        height: 203px
        font-size: 13px
        text-align: center
        border-right: 1px solid $comColor
        border-bottom: 1px solid $comColor
        .product
          position: absolute
          text-align: center
          left: 30px
          width: 128px
          height: 128px
        .name
          position: absolute
          bottom: 44px
          width: 165px
          color: #666
          margin-top: 15px
          text-align: left
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .active
          color: red
        .price
          position: absolute
          bottom: 22px
          margin-top: 2px
          color: red
          font-size: 15px
          text-align: left
        .warning
          position: absolute
          bottom: 4px
          margin-top: 3px
          color: green
          text-align: left
    .main-right-bottom
      float: left
      margin-top: 4px
      margin-left: 5px
      height: 70px
      width: 950px
      border: 1px solid $comColor
      .bot-img
        float: left
        width: 189px
        height: 68px
      .border-r
        float: left
        z-index: 2
        border-left: 1px  solid $comColor
        height: 40px
        margin-top: 14px
</style>
