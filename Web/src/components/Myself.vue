<template>
  <div id="myself" class="mt-5 mb-5">
    <div class="inner">
      <div class="title">
        <h1 class="fs-lg" style="font-weight:lighter">关于我</h1>
      </div>
      <div class="info p-4 mb-5 clearfix">
        <div class="pic mr-3">
          <img src="../assets/images/touxiang.jpg" class="w-100 h-100" />
        </div>
        <div class="right">
          <p class="name fs-lg" style="font-weight: lighter">林玮涛</p>
          <div class="desc">
            <p class="pb-2 fs-sm">大四在读，自学前端半年，自学能力强，能够快速地接受新知识。</p>
            <p class="pb-2 fs-sm">拥有良好的独立解决问题能力，对于创新及解决具有挑战性的问题充满热情。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  width: 230px;
  height: 60px;
  text-align: center;
  font-weight: lighter;
  line-height: 60px;
  background-color: rgb(249, 249, 249);
  cursor: pointer;
  margin: 50px auto;
  position: relative;
}
.title::before {
  content: "";
  position: absolute;
  top: 0;
  background-color: rgb(231, 231, 231);
  height: 5px;
  width: 100%;
  left: 0;
}
.title::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 40%;
  background-color: rgb(9, 9, 9);
  transition: width 0.3s ease-in-out;
}
.title:hover::after {
  width: 65%;
}
.info {
  background-color: rgb(249, 249, 249);
  border-radius: 6px;
  overflow: hidden;
  .pic {
    float: left;
    width: 180px;
    height: 180px;
    img {
      border-radius: 6px;
    }
  }
  .right {
    overflow: hidden;
    p {
      color: #555;
    }
  }
}
</style>