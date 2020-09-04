<template>
  <div class="login_container">
    <div class="login_from">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="60px"
        :rules="rules"
      >
        <h2>积云后台管理系统</h2>
        <el-form-item label="账  号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密  码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/test.js";
export default {
  name: "",
  data() {
    return {
      ruleForm: {
        uesrname: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入有效账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3到5个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入有效密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在6到18个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //   console.log(formName)
      this.$refs[formName].validate((valid) => {
        // console.log(this.$refs);
        if (valid) {
          loginApi
            .login(this.ruleForm.username, this.ruleForm.password)
            .then((res) => {
              const req = res.data;
              //   console.log(req)
              if (req.code == 200) {
                //   console.log(req.data.token);
                  localStorage.setItem('jy_token',req.data.token)
                loginApi.LoginInFo().then((res) => {
                  console.log(res.data);
                  if (res.data.code == 200) {
                    localStorage.setItem(
                      "jy_info",
                      JSON.stringify(res.data.data)
                    );
                    this.$router.push('/')
                  } else {
                    this.$message({
                      type: "warning",
                      message: "登录失败",
                    });
                  }
                });
              } else {
                this.$message({
                  type: "warning",
                  message: "登录失败",
                });
              }
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
      // console.log(this.$refs[formName])
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.login_container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(http://mengxuegu.com:9999/img/login.b665435f.jpg);
  overflow: hidden;
  .login_from {
    width: 350px;
    background-color: rgba($color: white, $alpha: 0.8);
    border-radius: 20px;
    margin: 150px auto;
    padding: 20px;
    h2 {
      text-align: center;
    }
  }
}
</style>
