<template>
   <div class="header">
     <div class="header-content">
       <div class="header-left">
         东华五金城
       </div>
       <div class="header-right">
         采购热线:00000000
       </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style scoped lang="stylus">
.header
  width: 100%
  background-color: #f9f9f9
  .header-content
    width: 1200px
    height: 30px
    line-height:30px
    font-size: 12px
    font-weight: bold
    color:#555
    margin: 0 auto
    .header-left
      float:left
    .header-right
      float:right
</style>
