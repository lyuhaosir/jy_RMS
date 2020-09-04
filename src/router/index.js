import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";
import layout from '../components/Layout.vue'

import Home from '../views/home'
import Goods from '../views/goods'
import Member from '../views/member'
import Staff from '../views/staff'
import Supplier from '../views/supplier'

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
    component:layout,
    redirct:'/home',
    children:[
      {
        path:'/home',
        component:Home,
        meta:{title:'首页'}
      },
      {
        path:'/member',
        component:Member,
        meta:{title:'会员管理'}
      },
      {
        path:'/supplier',
        component:Supplier,
        meta:{title:'供应商管理'}
      },
      {
        path:'/staff',
        component:Staff,
        meta:{title:'员工管理'}
      },
      {
        path:'/goods',
        component:Goods,
        meta:{title:'商品管理'}
      },
    ]
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
