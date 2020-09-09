<template>
  <div>
    <el-table class="el-table" :data="list" height="440px" border style="width: 97%;margin:20px">
      <el-table-column class="a" type="index" width="80px" label="编号"></el-table-column>
      <el-table-column class="a" prop="registe_time" width="200px" label="注册日期"></el-table-column>
      <el-table-column class="a" prop="username" width="200px" label="用户姓名"></el-table-column>
      <el-table-column class="a" prop="city" label="注册地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import addminApi from "@/api/dataAdmin";
export default {
  name: "",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getUserList() {
      addminApi.getUserList().then((res) => {
        this.list = res;
        // console.log(this.list);
      });
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getUserList();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-table-column{
  height: 40px;
}

</style>
