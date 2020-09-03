<template>
  <div id="about"></div>
</template>

<script>
import testApi from "@/api/test";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    testApi.getList().then(res => {
      console.log(res);
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>