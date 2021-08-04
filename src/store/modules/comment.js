import axios from "axios";
//import store from "..";

const allComments = { GET_ALL_COMMENTS: "GET_ALL_COMMENTS" };

const comments = {
  namespaced: true,
  state: () => ({ comments: [] }),

  mutations: {
    [allComments.GET_ALL_COMMENTS](state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    async getComments({ commit }, post) {
      try {
        const postId = post;
        const response = await axios.get(
          "http://localhost:3000/api/comment/",
          postId
        );
        commit("GET_ALL_COMMENTS", response.data);
        //console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {},
};

export default comments;
