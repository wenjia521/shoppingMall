<template>
  <div class="supplyChain">
    <div class="supply-title-bg supply-item">
      <div class="supply-item-content">
        <p class="title">绿色建筑供应链金融解决方案</p>
        <p class="txt">
          联合金融机构创立数百亿规模绿色产业基金，为供需双方就融资方面提供有力保障，
          只要有买卖，有诚信，您就能获得我们的融资服务
        </p>
        <h6 class="title">绿色建筑供应链金融解决方案</h6>
      <div class="content">
        <p class="info">或通过如下方式寻求合作：</p>
        <span>
          <i class="iconfont tel">&#xe629;</i>
          400-826-7880
        </span>
        <span class="vandreanm">
          <i class="iconfont email">&#xe623;</i>
          vandream@vandream.com
        </span>
      </div>
      </div>
    </div>
    <div class="supply-item-up supply-item">
      <div class="supply-item-content">
        <h3 class="supply-item-title">一家正在快速成长的企业，一定经历过下面的烦恼</h3>
        <ul class="supply-up-list">
          <li>
            <img src="/static/img/supplyChain-up.png" alt="">
            <p>供方帐期短</p>
            <p>应收账款要求及时</p>
          </li>
           <li>
            <img src="/static/img/supplyChain-up.png" alt="">
            <p>供方帐期短</p>
            <p>应收账款要求及时</p>
          </li>
           <li>
            <img src="/static/img/supplyChain-up.png" alt="">
            <p>供方帐期短</p>
            <p>应收账款要求及时</p>
          </li>
           <li class="no-margin">
            <img src="/static/img/supplyChain-up.png" alt="">
            <p>供方帐期短</p>
            <p>应收账款要求及时</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="supply-item-advantage supply-item">
      <div class="supply-item-content">
        <h3 class="supply-item-title">我们的服务优势</h3>
        <ul class="list">
          <li class="margin-r">
            <img src="/static/img/supplyChain-ad.jpg" alt="">
            <div>
              <h3>庞大资金基础</h3>
              <p>
                <span>100亿</span>
                  绿色产业基金，为供需双方提供全方位金融服务
              </p>
            </div>
          </li>
          <li class="margin-r no-margin">
            <img src="/static/img/supplyChain-ad.jpg" alt="">
            <div>
              <h3>庞大资金基础</h3>
              <p>
                <span>100亿</span>
                  绿色产业基金，为供需双方提供全方位金融服务
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="supply-item-log supply-item">
        <div class="supply-item-content">
          <h3 class="supply-item-title">合作的金融机构</h3>
          <img class="brank" src="/static/img/supplyChain-back.jpg" alt="">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'supply'
}
</script>
<style lang="stylus" scoped>
.supplyChain
  .supply-item
    padding: 60px 0 80px 0
  .supply-title-bg
    padding-top: 70px
    height: 400px
    line-height: 48px
    background: url('/static/img/supplyChain-bg.jpg') no-repeat center
    background-size: cover
    .supply-item-content
      width: 1200px
      margin: 0 auto
      padding-left: 25px
      color: #fff
      .title
        font-size: 48px
        text-shadow: 0 3px 5px rbga(0,0,0,0.14)
      .txt
        font-size: 16px
        line-height: 28px
        margin-top: 15px
        width: 625px
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)
      .content
        margin-top: 90px
        .info
          font-size: 14px
      .content span
        font-size: 20px
        .tel
          margin-right: 10px
          font-size: 22px
      .vandreanm
        margin-left: 75px
        .email
          margin-right: 10px
          font-size: 22px
  .supply-item-up
    .supply-item-content
      width: 1200px
      margin: 0 auto
      .supply-item-title
        text-align: center
        font-size: 30px
        color: #333
        line-height:30px
        position: relative
      .supply-item-title:before
        content: ''
        width: 55px
        height: 4px
        background: #2CAF64
        position: absolute
        top: 50px
        left:50%
        margin-left: -27px
      .supply-up-list
        margin-top: 90px
        padding-left: 25px
      .supply-up-list li
        display: inline-block
        margin-right: 123px
      .supply-up-list li img
        width: 195px
        height: 170px
      .supply-up-list li p
        font-size: 18px
        color: #666
        text-align: center
        line-height: 29px
  .supply-item-advantage
    background: #F4F8F9
    .supply-item-content
      width: 1200px
      margin: 0 auto
      .supply-item-title
        text-align: center
        font-size: 30px
        color: #333
        position: relative
        line-height: 30px
      .supply-item-title:before
        content: ''
        width: 55px
        height: 4px
        background: #2CAF64
        position: absolute
        top: 50px
        left: 50%
        margin-left: -27px
    .list
      margin-top: 80px
      .margin-r
        margin-right: 50px
        display: inline-block
        width: 550px
      .margin-r img
        width: 100%
        vertical-align: middle
      .margin-r div
        height: 105px
        padding-top: 20px
        padding-left: 30px
        background: #fff
      .margin-r h3
        font-size: 20px
        color: #333
        line-height: 30px
      .margin-r p
        font-size: 16px
        line-height: 22px
        margin-top: 10px
        color: #2a2a2a
      .margin-r p span
        color: #168C48
        font-weight: bold
  .supply-item-log
    padding: 60px 0 80px 0
    .supply-item-content
      width: 1200px
      margin: 0 auto
      .supply-item-title
        font-size: 30px
        color: #333
        line-height: 30px
        text-align: center
        position: relative
      .supply-item-title:before
        content: ''
        width: 55px
        height: 4px
        background: #2CAF64
        position: absolute
        top: 50px
        left: 50%
        margin-left: -27px
      .brank
        width: 1200px
        margin-top: 90px
</style>
