<template>
  <div class="header">
    <div class="bgcover w-100 h-100"></div>
    <div class="inner pt-5 py-3">
      <h1 class="text-center fs-xl pb-4">林玮涛的个人博客</h1>
      <p class="text-center fs-md pb-5">我也不知道该写点啥</p>
      <div class="social pt-2 text-center">
        <i class="iconfont icongithub-fill pr-2"></i>
        <i class="iconfont iconqq-fill pr-2"></i>
        <i class="iconfont iconwechat-fill pr-2"></i>
        <i class="iconfont iconweibo-fill pr-2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-image: url("../assets/images/banner-1.jpg");
  position: relative;
  .bgcover {
    position: absolute;
    top: 0;
    background-color: rgb(249, 249, 249);
    opacity: 0.9;
  }
  h1 {
    font-weight: lighter;
    line-height: 50px;
    position: relative;
    z-index: 100;
  }
  p {
    position: relative;
    z-index: 100;
    color: #757575;
  }
  .social {
    position: relative;
    z-index: 100;
    color: #757575;
    i {
      cursor: pointer;
      font-size: 22px !important;
    }
    i:hover {
      color: #222;
    }
  }
}
</style>