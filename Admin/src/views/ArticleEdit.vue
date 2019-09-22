<template>
  <div style="padding-top: 50px;">
    <h1 class="title">{{id ? '修改' : '新增'}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="model.title" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="文章标签">
        <el-select v-model="model.labels" multiple placeholder="请选择">
          <el-option v-for="item in labels" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章正文">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.content"></vue-editor>
      </el-form-item>
      <el-form-item label="文章图片">
        <el-upload
          class="img-uploader"
          :action="$http.defaults.baseURL + '/uploads'"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="handleImgSuccess"
        >
          <img v-if="model.img" :src="model.img" class="img" />
          <i v-else class="el-icon-plus img-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      labels: []
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async fetchLabel () {
      const res = await this.$http.get("/rest/labels");
      this.labels = res.data;
    },
    async fetch () {
      const res = await this.$http.get(`/rest/articles/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    handleImgSuccess (res) {
      this.$set(this.model, "img", res.url);
    },
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("/uploads", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save () {
      let res;
      if (this.id) {
        res = await this.$http.put(`/rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post('/rest/articles', this.model);
      }
      this.$router.push('/articles/list');
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    }
  },
  created() {
    this.fetchLabel();
    this.id && this.fetch();
  }
};
</script>

<style scoped>
.title {
  padding-left: 50px;
  padding-bottom: 50px;
}
.img-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 178px;
  height: 178px;
}
.img-uploader .el-upload:hover {
  border-color: #409eff;
}
.img-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.img {
  width: 178px;
  height: 178px;
  display: block;
}
</style>