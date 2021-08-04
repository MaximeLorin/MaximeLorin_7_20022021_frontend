import axios from "axios";
//import store from "..";

const allPosts = { GET_ALL_POSTS: "GET_ALL_POSTS" };
const onePost = { GET_ONE_POST: "GET_ONE_POST" };

// const mutationType = {

//   SET_POST_AUTHOR: "SET_POST_AUTHOR",
//   SET_USER_TITLE: "SET_USER_TITLE",
//   SET_POST_IMAGE: "SET_POST_IMAGE",
// };

const posts = {
  namespaced: true,
  state: () => ({ posts: [], post: "" }),

  mutations: {
    [allPosts.GET_ALL_POSTS](state, posts) {
      state.posts = posts;
    },
    [onePost.GET_ONE_POST](state, post) {
      state.post = post;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/api/posts/");
        commit("GET_ALL_POSTS", response.data);
        //console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getOnePost({ commit }, idPost) {
      const reponse = await axios.get(
        `http://localhost:3000/api/posts/${idPost}`
      );
      commit("GET_ONE_POST", reponse.data);
    },
  },

  getters: {
    postContent: (state, count) => {
      return state.posts[count];
    },
  },
};

export default posts;
