<template>
  <div id="content" class="mt-5">
    <div class="inner">
      <div class="header pt-4">
        <h1 class="title fs-lg">{{article.title}}</h1>
        <span class="time fs-xs pr-3">{{article.time}}</span>
        <span class="pr-3 fs-xs">|</span>
        <span
          class="labels fs-xs mr-2"
          v-for="label in article.labels"
          :key="label._id"
        >{{label.name}}</span>
      </div>
      <div class="desc pt-5 pb-5" v-html="article.content"></div>
      <div class="footer mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  },
  data() {
    return {
      article: this.article
    };
  }
};
</script>

<style lang="scss" scoped>
.desc /deep/ img {
  max-width: 100%;
}
.desc /deep/ p, ul {
  margin-top: 10px;
}
.header {
  text-align: center;
  span {
    color: #999;
  }
  .labels {
    color: #999;
  }
}
.desc {
  line-height: 30px;
  color: #555;
  border-bottom: 1px solid #1111;
  
}
</style>