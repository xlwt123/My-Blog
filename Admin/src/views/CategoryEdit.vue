<template>
  <div style="padding-top: 50px;">
    <h1 class="title">{{id ? '修改' : '新增'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="分类名称">
        <el-input v-model="model.name" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {
        name: ''
      }
    }
  },
  methods: {
    async save () {
      let res;
      if (this.id) {
        res = await this.$http.put(`/rest/categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post('/rest/categories', this.model);
      }
      this.$router.push('/categories/list');
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    },
    async fetch () {
      const res = await this.$http.get(`/rest/categories/${this.id}`);
      this.model = res.data;
    }
  },
  created () {
    this.id && this.fetch();
  }
}
</script>

<style scoped>
  .title {
    padding-left: 50px;
    padding-bottom: 50px;
  }
</style>

