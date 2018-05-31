<template>
  <div class="classify-content">
    <ul class="classify-con">
      <li class="item-list" v-on:mouseenter="add" v-on:mouseleave="remove">
        <div class="classify-shop-content">
          <b class="iconfont shop-left-icon">&#xe642;</b>
          <p class="classify-shop-title">
            装配式建筑
            <i class="iconfont shop-title-right-icon">&#xe6bf;</i>
          </p>
          <div class="clearfloat classifty-main-item">
            <span class="classify-shop-txt">栓钉</span>
            <span class="classify-shop-txt">螺栓/螺母及垫片</span>
            <span class="classify-shop-txt">气保焊枪/配件</span>
            <span class="classify-shop-txt">焊材</span>
            <span class="classify-shop-txt">热卷</span>
            <span class="classify-shop-txt">彩涂</span>
          </div>
        </div>
        <ul class="classify-content-list" v-show="show">
           <div class="classify-content-list-in">
              <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">金属矿<span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">磨光/切割材料</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">气体</a>
                  <a class="commodity-router f-l disabled">瓷环</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">其他</a>
                  <a class="commodity-router f-l disabled">劳保防护</a>
                </div>
              </li>

              <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">金属矿<span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">磨光/切割材料</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">气体</a>
                  <a class="commodity-router f-l disabled">瓷环</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">其他</a>
                  <a class="commodity-router f-l disabled">劳保防护</a>
                </div>
              </li>
           </div>
        </ul>
      </li>
      <li class="item-list" v-on:mouseenter="add" v-on:mouseleave="remove">
        <div class="classify-shop-content">
          <b class="iconfont shop-left-icon">&#xe64f;</b>
          <p class="classify-shop-title">
            建筑工程
            <i class="iconfont shop-title-right-icon">&#xe6bf;</i>
          </p>
          <div class="clearfloat classifty-main-item">
            <span class="classify-shop-txt">栓钉</span>
            <span class="classify-shop-txt">螺栓/螺母及垫片</span>
            <span class="classify-shop-txt">气保焊枪/配件</span>
            <span class="classify-shop-txt">焊材</span>
            <span class="classify-shop-txt">热卷</span>
            <span class="classify-shop-txt">彩涂</span>
          </div>
        </div>
        <ul class="classify-content-list" v-show="show">
           <div class="classify-content-list-in">
              <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">电梯设备设施<span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">铜矿</a>
                  <a class="commodity-router f-l disabled">锌矿</a>
                  <a class="commodity-router f-l disabled">铁矿</a>
                  <a class="commodity-router f-l disabled">铝矿</a>
                </div>
              </li>
               <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">电梯设备设施><span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">磨光/切割材料</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">气体</a>
                  <a class="commodity-router f-l disabled">瓷环</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">其他</a>
                  <a class="commodity-router f-l disabled">劳保防护</a>
                </div>
              </li>
              <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">电梯设备设施><span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">磨光/切割材料</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">气体</a>
                  <a class="commodity-router f-l disabled">瓷环</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">其他</a>
                  <a class="commodity-router f-l disabled">劳保防护</a>
                </div>
              </li>
              <li class="right-list-item">
                <div class="item-tile f-l">
                  <a href="" class="item-router">电梯设备设施><span class="iconfont">></span></a>
                </div>
                <div class="f-l item-txt">
                  <a class="commodity-router f-l disabled">磨光/切割材料</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">气体</a>
                  <a class="commodity-router f-l disabled">瓷环</a>
                  <a class="commodity-router f-l disabled">焊材</a>
                  <a class="commodity-router f-l disabled">其他</a>
                  <a class="commodity-router f-l disabled">劳保防护</a>
                </div>
              </li>
           </div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'classify',
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    add: function () {
      this.show = !this.show
    },
    remove: function () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="stylus" scoped>
.classify-content
  min-height: 470px
  width: 220px
  .classify-con
    width: 100%
    height: 100%
    background: #fff
    position: relative
    .item-list
      position: relative
      height: 105px
      padding: 15px 0 15px 37px
      border-top: 1px solid transparent
      border-bottom: 1px solid transparent
      border-left: 1px solid #E2E2E2
      border-right: 1px solid #E2E2E2
      &:hover
        transition: all .5s
        border-top: 1px solid #E2E2E2
        border-bottom: 1px solid #E2E2E2
        border-left: 3px solid #22A059
        border-right: 0 none
      .classify-shop-content
        position: relative
        width: 100%
        height: 100%
        .shop-left-icon
          position: absolute
          width: 15px
          height: 19px
          left: -25px
        .classify-shop-title
          font-size: 14px
          color: #333
          margin-bottom: 10px
          font-weight: 800
          .shop-title-right-icon
            position: absolute
            width: 12px
            height: 16px
            display: block
            right: 10px
            top: 0
            opacity: .8
        .classifty-main-item
          .classify-shop-txt
            font-size: 12px
            color: #666
            opacity: .8
            float: left
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            margin-right: 18px
            margin-bottom: 6px
            font-size: 12px
    .classify-content-list
      width: 940px
      height: 470px
      padding-right: 40px
      background: #fff
      position: absolute
      top: 0
      left: 218px
      z-index: 99
      overflow: hidden
      .classify-content-list-in
        padding: 0 170px 25px 27px
        .right-list-item
          padding: 15px 0 0 0
          font-size: 12px
          color: #666
          overflow: hidden
          border-bottom: 1px solid #eee
          .item-tile
            width: 125px
            text-align: right
            .item-router
              color: #333
              font-weight: 900
          .item-txt
            padding-left: 15px
            .commodity-router
              display: inline-block
              color: #bbb
              padding: 0 10px
              border-left: 1px solid #ddd
              margin-bottom: 15px
              line-height: 16px
</style>
