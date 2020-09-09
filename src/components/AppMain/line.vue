<template>
  <el-breadcrumb separator="/" >
    <el-breadcrumb-item class="line" :to="{path:$route.path}">{{$route.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-breadcrumb {
  height: 10px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 0 20px 0;
}
.line {
  font-size: 16px;
  border-left: 3px solid greenyellow;
  padding-left: 10px;
}
</style>