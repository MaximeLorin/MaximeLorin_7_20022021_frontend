import { createRouter, createWebHashHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "About",

    component: About,
    beforeEnter: (to, from, next) => {
      if (store.state.authentication.isConnected === 0) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",

    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
