import { createRouter, createWebHashHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
