import axios from "axios";
//import store from "..";

const allPosts = { GET_ALL_POSTS: "GET_ALL_POSTS" };

// const mutationType = {

//   SET_POST_AUTHOR: "SET_POST_AUTHOR",
//   SET_USER_TITLE: "SET_USER_TITLE",
//   SET_POST_IMAGE: "SET_POST_IMAGE",
// };

const posts = {
  namespaced: true,
  state: () => ({ posts: [] }),

  mutations: {
    [allPosts.GET_ALL_POSTS](state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/api/posts/");
        commit("GET_ALL_POSTS", response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {},
};

export default posts;
