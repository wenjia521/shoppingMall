<template>
  <div class="resolution">
   <div class="resolutionList">
     <p class="resolutionList-top">解决方案</p>
     <ul class="resolutionList-wrapper">
       <li class="resolutionItem">
         <div class="list-img">
           <img src="/static/img/resolutionItem.jpg" alt="">
         </div>
         <div class="list-content">
           <h1>青岛世博园项目配电工程解决方案</h1>
           <P></P>
         </div>
         <div class="list-btn"></div>
       </li>
        <li class="resolutionItem">
         <div class="list-img">
           <img src="/static/img/resolutionItem.jpg" alt="">
         </div>
         <div class="list-content">
           <h1>青岛世博园项目配电工程解决方案</h1>
           <P></P>
         </div>
         <div class="list-btn"></div>
       </li>
        <li class="resolutionItem">
         <div class="list-img">
           <img src="/static/img/resolutionItem.jpg" alt="">
         </div>
         <div class="list-content">
           <h1>青岛世博园项目配电工程解决方案</h1>
           <P></P>
         </div>
         <div class="list-btn"></div>
       </li>
     </ul>
   </div>
  </div>
</template>
<script>
export default {
  name: 'resolution-content'
}
</script>
<style lang="stylus" scoped>
.resolution
  background: #F8F8F8
  margin-top: 10px
  .resolutionList
    width: 1200px
    margin: 0 auto
    overflow: hidden
    padding-bottom: 20px
    .resolutionList-top
      height: 42px
      line-height: 42px
      border-bottom: 1px solid #E2E2E2
      font-size: 16px
      padding-left: 30px
      color: #333
      font-weight: bold
    .resolutionItem
      padding: 22px 30px
      position: relative
      border-bottom: 1px solid #e2e2e2
      background: #fff
      .list-img
        width: 210px
        height: 120px
        border: 1px solid #e2e2e2
        display: inline-block
      .list-img img
        width: 100%
        height: 120px
        display: block
      .list-content
        display: inline-block
        width: 777px
        vertical-align: top
        margin-left: 40px
        cursor: pointer
      .list-content h1
        font-size: 18px
        color: #333
        margin-top: 12px
        cursor: pointer
        font-weight: bold
</style>
