<template>
  <el-table :data="items">
    <el-table-column prop="_id" label="ID" width="320"></el-table-column>
    <el-table-column prop="name" label="标签名称"></el-table-column>
    <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          @click="$router.push(`/labels/edit/${scope.row._id}`)"
        >编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/rest/labels");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`删除${row.name}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`/rest/labels/${row._id}`);
          this.fetch();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style scoped>
</style>