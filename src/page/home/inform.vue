<template>
  <div class="info">
    <div class="info-industry">
      <div class="title">行业资讯</div>
      <div class="main-industry">
        <a href="">
          <img class="inform-image" src="http://mall.vandream.com:8081/group1/M00/00/00/rBCwJFrhvoKAbaqUAANeHCOJIu4863.jpg" alt="">
        </a>
        <div class="industry-title">
          <div class="con">
            <a href="">
              <div class="industry-title">【绿色建筑＋互联网】让中国建材企业在“一带一路”上走得更远</div>
              <div class="industry-content">
                摘要：日前在人民大会堂成功举办了的“一带一路”绿色供应链
                支持绿色建材走出去国际合作论坛，标志着我国首个国家级行业协会绿色供应链委员会正式成立并启动国际合作。</div>
            </a>
          </div>
        </div>
      </div>
       <div class="industry-title info-top">
          <div class="con info-right">
            <a href="">
              <div class="industry-title">【绿色建筑＋互联网】让中国建材企业在“一带一路”上走得更远</div>
              <div class="industry-content">
                摘要：日前在人民大会堂成功举办了的“一带一路”绿色供应链
                支持绿色建材走出去国际合作论坛，标志着我国首个国家级行业协会绿色供应链委员会正式成立并启动国际合作。</div>
            </a>
          </div>
        </div>
        <div class="industry-title">
        <div class="con  info-right">
          <a href="">
            <div class="industry-title">【绿色建筑＋互联网】让中国建材企业在“一带一路”上走得更远</div>
            <div class="industry-content">
              摘要：日前在人民大会堂成功举办了的“一带一路”绿色供应链
              支持绿色建材走出去国际合作论坛，标志着我国首个国家级行业协会绿色供应链委员会正式成立并启动国际合作。</div>
          </a>
        </div>
      </div>
      <div class="industry-title">
        <div class="con  info-right">
          <a href="">
            <div class="industry-one">
             全国以下地区新建建筑要求全面执行绿色建筑标准
            </div>
          </a>
        </div>
      </div>
       <div class="industry-title">
        <div class="con  info-right">
          <a href="">
            <div class="industry-one">
              5月1日起，建筑业增值税税率从11%降至10%，制造业从17%
            </div>
          </a>
        </div>
      </div>
       <div class="industry-title">
        <div class="con  info-right">
          <a href="">
            <div class="industry-one">
             发展迅猛，绿色建筑即将进入求“质”时代
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="info-case">
      <div class="case-title">解决方案</div>
      <div>
        <a href="">
          <div class="project-fir clearfloat">
            <img class="case-img" src="/static/img/resolution.jpg" alt="">
            <div class="case-name">青岛世博园项目配电工程解决方案</div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="case-main-title">三亚星美国际影城中央空调工程</div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="case-main-title">泰国曼谷Synphaet 节能改造项目</div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="case-main-title">天马微电子精密车间中央空调节能改造工程</div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="case-main-title">重庆希望玫瑰城中央空调节能改造工程</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Inform'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/home/inform.css'
@import '../../assets/style/common/varibles.styl'
.info
  width: 1200px
  margin: 0 auto
  .info-industry
    width: 822px
    height: 360px
    float: left
    .title
      padding-bottom: 10px
      border-bottom: 1px solid $comColor
      font-size: 18px
      color: #343c3b
    .main-industry
      float: left
      width: 370px
      margin-top: 18px
      .inform-image
        width: 370px
        height: 210px
  .con
    float: left
    .industry-title
      width: 340px
      text-indent: -10px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      font-size: 18px
      margin-top: 14px
      cursor: pointer
      color: #000
    .industry-content
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      overflow: hidden
      width: 340px
      margin-top: 10px
      line-height: 24px
      color: #999
      font-size: 14px
      cursor: pointer
    .industry-one
      width: 340px
      line-height: 24px
      margin-top: 10px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      cursor: pointer
      color: #333
      font-size: 14px
  .info-case
    float: left
    width: 292px
    height: 360px
    padding: 12px 22px
    margin-left: 40px
    background: #f9f9f9
    .case-title
      font-size: 18px
      text-align: left
      color: #343c3b
    .project-fir
      margin-top: 18px
      margin-bottom: 5px
      color: #333
      .case-img
        float: left
        width: 140px
        height: 80px
        cursor: pointer
      .case-name
        float: left
        overflow: hidden
        line-height: 17px
        -webkit-line-clamp: 4
        margin-left: 12px
        font-size: 14px
        width: 126px
        height: 82px
        cursor: pointer
    .case-main-title
      margin-top: 15px
      padding: 3px 0
      width: 290px
      font-size: 14px
      color: #333
      white-space: nowrap
      overflow: hidden
      -ms-text-overflow: ellipsis
      text-overflow: ellipsis
      cursor: pointer
</style>
