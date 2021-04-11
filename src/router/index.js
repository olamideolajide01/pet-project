import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About  from "../views/About.vue";
import Cart from "../views/Cart.vue";
import Pets from "../views/Pets.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Help from "../views/Help.vue";
import Payment from "../views/Payment.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About 
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/pets",
    name: "pets",
    component: Pets
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment
  },
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
