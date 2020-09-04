<template>
  <div class="header">
    <div class="left">
      <a href="../Layout.vue">
        <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt />
        <span>梦学谷会员管理系统</span>
      </a>
    </div>
    <div class="right">
      <el-dropdown szie="medium" @command="hadleCommanf">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" icon="el-icon-edit">修改密码</el-dropdown-item>
          <el-dropdown-item command="b" icon="el-icon-s-fold">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      userInfo: ""
    };
  },
  methods: {
    hadleCommanf(command) {
      // console.log(command)
      switch (command) {
        case "a":
            this.$message.warning('修改密码')
          break;
        case "b":
            localStorage.removeItem('jy_info')
            localStorage.removeItem('jy_token')
            this.$router.push('/login')
          break;  
        default:
          break;
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    const info = localStorage.getItem("jy_info", JSON.parse);
    this.userInfo = JSON.parse(info);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  .left {
    a {
      img {
        vertical-align: middle;
        width: 25px;
      }
    }
    span {
      margin-left: 10px;
      color: white;
      font-size: 16px;
    }
  }
  .right {
    height: 50px;
    font-size: 14px;
    .el-dropdown-link {
      color: white;
      cursor: pointer;
      // font-size: 12px;
    }
    .el-icon-arrow-down {
      // font-size: 12px;
    }
  }
}
/* @import url(); 引入css类 */
</style>