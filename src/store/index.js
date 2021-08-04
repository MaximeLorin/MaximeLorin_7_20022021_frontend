import { createStore } from "vuex";
import authentication from "./modules/authentication";
import posts from "./modules/posts";
import comment from "./modules/comment";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { authentication, posts, comment },
});
