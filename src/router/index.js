import { createRouter, createWebHashHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import MainPage from "../views/MainPage.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import Profile from "../views/Profile.vue";
import User from "../views/User.vue";
import notFound from "../views/notFound.vue";
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
    path: "/profile",
    name: "Profile",

    component: Profile,
    beforeEnter: (to, from, next) => {
      if (!store.state.authentication.isConnected) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
    props: true,
    beforeEnter: (to, from, next) => {
      if (!store.state.authentication.isConnected) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/user/:uuid",
    name: "User",
    component: User,
    props: true,
    beforeEnter: (to, from, next) => {
      if (!store.state.authentication.isConnected) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",

    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
