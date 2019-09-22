<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="$route.path" unique-opened>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">标签管理</template>
            <el-menu-item index="/labels/create">新增标签</el-menu-item>
            <el-menu-item index="/labels/list">标签列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="文章管理">
            <el-menu-item index="/articles/create">新增文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分类管理">
            <el-menu-item index="/categories/create">新增分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">管理员管理</template>
            <el-menu-item index="/users/create">新增管理员</el-menu-item>
            <el-menu-item index="/users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="个人信息管理">
            <el-menu-item index="/myself/edit">个人信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>{{(new Date()).toLocaleDateString()}}</span>
        <span>林玮涛</span>
      </el-header>

      <router-view :key="$router.path"></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

span {
  padding-left: 10px;
}
</style>