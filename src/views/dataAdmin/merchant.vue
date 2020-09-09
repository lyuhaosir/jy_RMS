<template>
  <div id="">
      merchant
  </div>
</template>

<script>
import merchantApi from '@/api/dataAdmin'
export default {
name:"",
data() {
return {
  list:[]
}
},
methods:{
  getmerchantList(){
    merchantApi.merchantList().then(res=>{
      console.log(res);
    })
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
  this.getmerchantList()
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>