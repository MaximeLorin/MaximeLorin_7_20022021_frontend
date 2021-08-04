import { createRouter, createWebHashHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import MainPage from "../views/MainPage.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "MainPage",

    component: MainPage,
    beforeEnter: (to, from, next) => {
      if (!store.state.authentication.isConnected) {
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
  {
    path: "/signup",
    name: "Signup",

    component: Signup,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
