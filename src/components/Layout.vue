<template>
  <div class="layout">
    <el-container>
      <el-header height='50px'><app_header></app_header></el-header>
      <el-container>
        <el-aside width="230px"><app_asdie></app_asdie></el-aside>
        <el-main><app_main></app_main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import app_header from '@/components/AppHeader';
import app_asdie from '@/components/AppAsdie';
import app_main from '@/components/AppMain';
export default {
  name: "",
  components:{app_header,app_asdie,app_main},
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.layout {
  .el-container {
    height: 100%;
    .el-header {
      width: 100%;
      padding: 0;
      background: #2b3a4b;
      height: 50px;
      line-height: 50px;
    }
    .el-aside {
      position: absolute;
      top: 50px;
      bottom: 0;
    }
    .el-main {
      padding: 0;
      top:50px;
      bottom: 0;
      position: absolute;
      left: 230px;
      right: 0;
    }
  }
}
</style>