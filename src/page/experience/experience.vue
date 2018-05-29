<template>
  <div class="experience">
    <div class="banner-bg">
      <div class="banner-content">
        <div class="banner-img">
           <div class="block">
              <el-carousel trigger="click" height="410px">
                <el-carousel-item>
                  <img src="/static/img/experience-banner.jpg" alt="">
                </el-carousel-item>
                 <el-carousel-item>
                  <img src="/static/img/experience-banner2.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/img/experience-banner3.jpg" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
        </div>
        <div class="banner-txt">
          <h3>产品体验中心</h3>
          <span></span>
          <ul>
            <li>一站式高效体验服务</li>
            <li>22万平方米的产品体验中心</li>
            <li>全方位体验20000+供应商的新产品、新工艺、新技术、新材料</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-item">
      <ul>
        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>
        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>
        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>
        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>
        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>

        <li class="item">
          <img src='/static/img/experience-item.png' alt="">
          <h3>超大型产品体验空间</h3>
          <p>位于杭州的超大型线下体验中心，</p>
          <p>打造杭州传统企业转型升级的地</p>
          <p>标建筑。</p>
        </li>
        <li class="line"></li>
      </ul>
    </div>
    <div class="row"></div>
    <div class="map">
      <div class="map-con">
        <img src="static/img/experience-map.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'experience'
}
</script>
<style lang="stylus" scoped>
.experience
  background: #eee
  .banner-bg
    padding: 60px 0 30px 0
    background: url('/static/img/experience-bg.jpg') no-repeat center
    background-size: cover
    .banner-content
      width: 1200px
      margin: 0 auto
      overflow: hidden
      .banner-img
        width: 800px
        height: 430px
        float: left
      .banner-txt
        width: 345px
        height: 355px
        float: left
        padding: 55px 0  0  55px
        background: url('/static/img/experience-banner-right-bg.png') no-repeat center
        background-size: cover
        color: #fff
      .banner-txt h3
        font-size: 24px
        line-height: 33px
      .banner-txt span
        display: block
        height: 3px
        width: 55px
        background-image: linear-gradient(-36deg, #E7C639 0%, #B8A059 100%)
        margin-top: 12px
        margin-bottom: 10px
      .banner-txt ul li
        font-size: 16px
        line-height: 24px
        margin-top: 25px
        padding-left: 18px
        position: relative
       .banner-txt ul li:before
          content: ''
          width: 6px
          height: 6px
          border-radius: 50%
          background-color: #fff
          position: absolute
          left: 0
          top: 12px
  .list-item
    padding-bottom: 110px
    overflow: hidden
  .list-item ul
    width: 1200px
    margin: 0 auto
    padding-top: 40px
    .item
      width: 398px
      margin-top: 70px
      float: left
      text-align: center
    .item img
      width: 210px
    .item h3
      font-size: 20px
      color: #333
      line-height: 28px
      margin-bottom: 13px
    .item p
      font-size: 14px
      color: #999
      line-height: 26px
    .line
      width: 2px
      height: 100px
      background-color: #E2E2E2
      margin-top: 130px
      float: left
  .row
    width: 1200px
    margin: 0 auto
    border-bottom: 1px dashed #ccc
  .map-con
    padding: 90px 0 110px 0
    width: 1200px
    margin: 0 auto
</style>
