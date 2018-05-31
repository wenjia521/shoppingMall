<template>
  <div class="goods-con">
    <div class="sort">
      <p class="sort1">默认排序</p>
      <div class="srot2">
        <span class="dec">按价格排序</span>
        <ul class="btn">
          <span class="iconfont up">&#xe6f1;</span>
          <span class="iconfont down">&#xe615;</span>
        </ul>
      </div>
    </div>
    <div class="goods">
      <ul class="label">
        <li class="label-1">商品信息</li>
        <li class="label-2">技术参数</li>
        <li class="label-3">价格</li>
        <li class="label-4">计量单位</li>
      </ul>
      <div class="goods-box">
        <ul class="msg">
          <li>
            <img src="/static/img/goodsList01.jpg" alt="">
          </li>
          <li>
            <span title="南钢普中板30mm">南钢普中板30mm</span>
          </li>
        </ul>
        <div class="params">
          <ul class="top">
            <li>
              <span>材质</span>
              <p class="value">Q235B</p>
            </li>
            <li>
              <span >规格</span>
              <p title="8mm" class="value">8mm</p>
            </li>
             <li>
              <span>材质</span>
              <p class="value">Q235B</p>
            </li>
            <li>
              <span >规格</span>
              <p title="8mm" class="value">8mm</p>
            </li>
          </ul>
        </div>
        <div class="price">
          <span data-v-0759a2c7="">议价</span>
        </div>
        <div class="unit">
          <span>吨</span>
        </div>
        <div class="add-btn">
          <p>对比</p>
        </div>
      </div>
       <div class="goods-box">
        <ul class="msg">
          <li>
            <img src="/static/img/goodsList01.jpg" alt="">
          </li>
          <li>
            <span title="南钢普中板30mm">南钢普中板30mm</span>
          </li>
        </ul>
        <div class="params">
          <ul class="top">
            <li>
              <span>材质</span>
              <p class="value">Q235B</p>
            </li>
            <li>
              <span >规格</span>
              <p title="8mm" class="value">8mm</p>
            </li>
             <li>
              <span>材质</span>
              <p class="value">Q235B</p>
            </li>
            <li>
              <span >规格</span>
              <p title="8mm" class="value">8mm</p>
            </li>
          </ul>
        </div>
        <div class="price">
          <span data-v-0759a2c7="">议价</span>
        </div>
        <div class="unit">
          <span>吨</span>
        </div>
        <div class="add-btn">
            <p>对比</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goods-container'
}
</script>
<style lang="stylus" scoped>
.goods-con
  width: 1200px
  margin: 20px auto 0
  .sort
    height: 40px
    background: #f5f5f5
    border: 1px solid #e2e2e2
    .sort1
      width: 100px
      text-align: center
      border-right: 1px solid #e2e2e2
      float: left
      height: 38px
      line-height:38px
      color: #666
    .srot2
      width: 100px
      padding-left: 14px
      float: left
      line-height: 38px
      height: 38px
      color: #F18115
      border-right: 1px solid #e2e2e2
      background: #fff
      .btn
        box-sizing: border-box
        width: 16px
        margin-left: 6px
        padding-top: 8px
        float: left
        height: 38px
        line-height: 38px
        position: relative
        .up
          position: absolute
          top: -5px
          left: 0
          cursor: pointer
        .down
          position: absolute
          bottom: -8px
          left: 0
          color: #DADADA
          cursor: pointer
      .dec
        float: left
  .goods
    margin-top: 12px
    overflow: hidden
    min-height: 356px
    .label
      box-sizing: border-box
      border: 1px solid #e7e7e7
      width: 1200px
      height: 36px
      line-height: 36px
    .label li
      float: left
      display: block
      text-align: center
    .label-1
      width: 320px
      display: block
      height: 36px
    .label-2
      width: 466px
    .label-3
      width: 188px
    .label-4
      width: 80px
  .goods-box
    width: 1200px
    overflow: hidden
    border-bottom: 1px solid #e2e2e2
    .msg
      width: 320px
      border: 0
      float: left
      height:90px
    .msg li
      float: left
      margin: 10px 0
      height: 70px
      line-height: 70px
      position: relative
    .msg li img
      display: block
      width: 70px
      height: 70px
      border: 1px solid #e2e2e2
    .msg li span
      width: 220px
      margin-left: 16px
      line-height: 20px
      color: #333
      position: absolute
      top: 50%
      transform: translateY(-50%)
      left: 0
      overflow: hidden
      text-overflow: hidden
    .params
      overflow: hidden
      float: left
      border-left: 1px dotted #D2D2D2
      .top
       width: 466px
       height: 90px
      .top li
        box-sizing: border-box
        width: 233px
        height: 45px
        line-height: 45px
        float: left
        border-bottom: 1px dotted #e2e2e2
        overflow: hidden
      .top li span
        box-sizing: border-box
        width: 100px
        color: #666
        padding: 0 10px
        text-align: right
        background: #f8f8f8
        float: left
        line-height: 45px
      .top li p
        box-sizing: border-box
        color: #333
        padding: 0 14px
        width: 132px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        float: left
        height: 45px
    .price
      float: left
      width: 187px
      font-size: 14px
      height: 90px
      line-height: 90px
      text-align: center
      border-left: 1px dotted #D2D2D2
    .unit
      float: left
      width: 80px
      height: 90px
      position: relative
      border-left: 1px dotted #D2D2D2
    .unit span
      display: block
      width: 52px
      margin-left: 14px
      line-height: 16px
      position: absolute
      top: 50%
      transform: translateY(-50%)
      text-align: center
    .add-btn
      height: 90px
      float: left
      border-left: 1px dotted #d2d2d2
    .add-btn p
      margin-left: 50px
      margin-top: 30px
      width: 60px
      height 30px
      line-height: 28px
      background: #FFF9F0;
      border: 1px solid #FF2834
      border-radius: 2px
      font-family: PingFangSC-Medium
      font-size: 12px
      color: #FF2834
      text-align: center
</style>
