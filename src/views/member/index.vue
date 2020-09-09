<template>
  <div class="member">
    <!-- 表单 -->
    <el-form :inline="true" ref="formFind" :model="formFind" class="demo-form-inline">
      <el-form-item label prop="cardNum">
        <el-input style="width:200px" v-model="formFind.cardNum" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item label prop="memberName">
        <el-input style="width:200px" v-model="formFind.memberName" placeholder="会员名字"></el-input>
      </el-form-item>
      <el-form-item label prop="payType">
        <el-select style="width:110px" v-model="formFind.payType" placeholder="支付类型">
          <el-option label="现金" value="现金"></el-option>
          <el-option label="微信" value="微信"></el-option>
          <el-option label="支付宝" value="支付宝"></el-option>
          <el-option label="银行卡" value="银行卡"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="date">
        <el-date-picker type="date" placeholder="出生日期" v-model="formFind.date" style="width:200px"></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin-left:10px">查询</el-button>
        <el-button type="primary" style="margin-left:10px">新增</el-button>
        <el-button type style="margin-left:10px" @click="resetForm('formFind')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column prop label="序号" width="60">
        <template slot-scope="scope">{{scope.$index + 1}}</template>
      </el-table-column>
      <el-table-column prop="cardNum" label="会员卡号" width="154"></el-table-column>
      <el-table-column prop="name" label="会员姓名" width="90"></el-table-column>
      <el-table-column prop="birthday" label="会员生日" width="152"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="152"></el-table-column>
      <el-table-column prop="integral" label="可用积分" width="90"></el-table-column>
      <el-table-column prop="money" label="开卡金额" width="100"></el-table-column>
      <el-table-column prop label="支付类型" width="90">
        <template slot-scope="scope">{{scope.row.payType | payTypeFilter}}</template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址"></el-table-column>
      <el-table-column prop label="操作" width="150">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.page"
      :page-sizes="[10, 20, 50]"
      :page-size="this.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total"
    ></el-pagination>
  </div>
</template>

<script>
import memberApi from "../../api/test";
const payTypeOptions = [
  { type: 1, name: "现金" },
  { type: 2, name: "微信" },
  { type: 3, name: "支付宝" },
  { type: 4, name: "银行卡" }
];
export default {
  name: "",
  data() {
    return {
      formFind: {
        cardNum: "",
        memberName: "",
        payType: "",
        date: ""
      },
      list: [], //会员列表数据
      page: 1, //起始下标
      pageSize: 10, //每一页条数
      total: 0 //总条数
    };
  },
  filters: {
    payTypeFilter(data) {
      const type = payTypeOptions.find(item => {
        return item.type == data;
      });
      return type ? type.name : null;
    }
  },
  methods: {
    resetForm(form) {
      // console.log(form);
      // console.log(this.$refs);
      this.$refs[form].resetFields();
    },
    handleSizeChange(page) {
      if (page != undefined) {
        this.pageSize = page;
        this.getMemberList();
      }
    },
    handleCurrentChange(page) {
      if (page != undefined) {
        this.page = page;
        this.getMemberList();
      }
    },
    //请求会员数据列表
    getMemberList() {
      memberApi.memberList(this.page, this.pageSize).then(res => {
        // console.log(res);
        if (res.code == 200) {
          this.total = res.total;
          this.list = res.data;
        }
      });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getMemberList();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.member {
  padding: 0px;
  margin: 0px;
}
</style>