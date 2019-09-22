<template>
  <div class="top py-3">
    <div class="inner clearfix p-3">
      <div class="right">
        <input type="text" class="px-2" />
        <i class="iconfont iconsearch"></i>
      </div>
      <div class="left">
        <ul style="margin:0">
          <li class="fs-md pr-4 mr-1" v-for="item in categories" :key="item._id" @click="handleClick">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  methods: {
    async fecth() {
      const res = await this.$http.get("/categories/list");
      this.categories = res.data;
    },
    handleClick() {
      
    }
  },
  created() {
    this.fecth();
  }
};
</script>

<style lang='scss' scoped>
.top {
  border-bottom: 1px solid #f9f9f9;
  position: relative;
  z-index: 20;
  box-shadow: 0px 10px 22px -23px rgba(0,0,0,0.75);
  .right {
    float: right;
    input {
      border-radius: 10px;
      border: 1px solid #e1e1e1;
      outline: none;
      height: 30px;
    }
    .iconsearch {
      position: relative;
      left: -30px;
    }
  }
  li {
    display: inline-block;
    cursor: pointer;
    line-height: 30px;
    height: 30px;
    a {
      text-decoration: none;
      color: #757575;
    }
  }
}
</style>