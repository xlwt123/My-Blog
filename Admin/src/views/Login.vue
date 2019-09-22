<template>
  <div class="login">
    <el-card class="loginCard">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    };
  },
  methods: {
    async login () {
      const res = await this.$http.post('/login', this.model);
      localStorage.token = res.data;
      this.$router.push('/');
      this.$message({
        type: 'success',
        message: '登陆成功'
      })
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}
.loginCard {
  width: 300px;
}
</style>
