import { createStore } from "vuex";
import authentication from "./modules/authentication";
import posts from "./modules/posts";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { authentication, posts },
});
