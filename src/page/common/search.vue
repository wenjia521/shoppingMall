<template>
  <div class="search">
    <div class="search-container">
      <div class="search-content">
        <div class="search-left">
          <a href="">
            <img  class="logo" src="/static/img/logo.png" alt="">
          </a>
        </div>
        <div class="search-center">
          <div class="search-inp">
            <input type="text" class="el-input" placeholder="请输入内容">
          </div>
          <div class="search-btn">
            <button class="btn">搜索</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeSearch'
}
</script>
<style scoped lang="stylus">
@import '../../assets/style/common/varibles.styl'
.search
  background-color: #fff
  .search-container
    overflow: hidden
    margin: 0 auto
    width:1200px
    .search-content
      width: 100%
      padding-top:30px
      .search-left
        margin-right: 50px
        float: left
        .logo
          width: 400px
          height: 45px
      .search-center
        float: left
        .search-inp
          height: 36px
          border: 2px solid $bgColor
          border-right: none
          float: left
          .el-input
            height: 100%
            width: 340px
            font-size: 14px
            padding: 0 15px
        .search-btn
            width: 102px
            height: 40px
            line-height: 40px
            background: $bgColor
            text-align: center
            float: left
            .btn
              color: #fff
              background: $bgColor
              font-weight: bold
              letter-spacing: 4px
</style>
