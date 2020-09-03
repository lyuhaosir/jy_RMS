import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = process.env.NODE_ENV == "production";
console.log(process.env.NODE_ENV)
// process.env.NODE_ENV == "production"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
