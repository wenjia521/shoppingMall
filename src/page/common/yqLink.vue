<template>
<div class="footer-bottom">
  <div class="footer">
    <div class="footer-con clearfloat">
      <div class="ft-left">
        <img  class="footer-log" src="/static/img/footer.png" alt="">
      </div>
      <div class="ft-center">
        <ul class="list-item">
          <li class="item-title">新手指南</li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
        </ul>
        <ul class="list-item">
          <li class="item-title">新手指南</li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
        </ul>
        <ul class="list-item">
          <li class="item-title">新手指南</li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
        </ul>
        <ul class="list-item">
          <li class="item-title">新手指南</li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
        </ul>
        <ul class="list-item">
          <li class="item-title">新手指南</li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
          <li class="item"><a class="item-con">搜索商品</a></li>
        </ul>
      </div>
      <div class="ft-right clearfloat">
        <div class="weixin">
          <img class="weixin-log" src="/static/img/weixin.jpg" alt="">
        </div>
        <div class="address">
          <p class="address-con">
              万郡绿建科技股份有限公司. <br>
              总部：杭州市上城区中河中路258号 <br>
              体验馆：浙江省萧山经济技术开发区红垦路305号
            </p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-last">
    <div class="footer-last-content">
      <p>万郡绿建科技股份有限公司 | 浙公网安备 33010902001895号 | 浙ICP备 18006540号</p>
      <p style="margin-top: 12px;">© Copyright©2018-2028 万郡绿建VANDREAM&nbsp; 版权所持有</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'yqLink'
}
</script>
<style lang="stylus" scoped>
.footer
  background: #2f2f2f
  .footer-con
    width: 1200px
    margin: 0 auto
    padding: 50px 0 40px
    .ft-left
      float: left
      width: 158px
      height: 54px
      margin-right: 24px
      .footer-log
        width: 100%
    .f-left img
      width: 100%
  .ft-center
    float: left
    .list-item
      float: left
      padding: 0 30px
      border-right: 1px solid #444
      opacity: .9
      .item-title
        font-size: 15px
        color: snow
        margin-bottom: 32px
      .item
        margin-top: 15px
        .item-con
          font-size: 14px
          color: #aaa
          cursor: pointer
  .ft-right
    float: right
    .weixin
      float: left
      width: 102px
      height: 102px
      margin-right: 35px
      background-color: #ccc
      .weixin-log
        width: 100%
    .address
      float: left
      .address-con
        font-size: 12px
        color: #aaa
        line-height: 20px
.footer-last
  .footer-last-content
    width: 1200px
    margin: 0 auto
    padding: 15px 0
  .footer-last-content p
    font-size: 14px
    text-align: center
    color: #777
</style>
