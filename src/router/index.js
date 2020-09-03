import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";
import layout from '../components/Layout.vue'

Vue.use(VueRouter);

const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/',
    name:'layout',
    component:layout
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
