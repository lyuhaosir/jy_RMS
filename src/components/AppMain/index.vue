<template>
  <div class="main">
    <app-link v-show="$route.path !== '/home'"></app-link>
    <router-view />
  </div>
</template>

<script>
import AppLink from './line'
export default {
  name: "",
  components:{AppLink},
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.main{
  padding: 0px;
  margin: 0px;
}
</style>