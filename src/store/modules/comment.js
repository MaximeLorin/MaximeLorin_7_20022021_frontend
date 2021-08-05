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
    async getComments({ commit }, comment) {
      try {
        console.log(comment);
        const response = await axios.get(
          "http://localhost:3000/api/comment/",
          comment
        );
        console.log(response);
        commit("GET_ALL_COMMENTS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {
    comments: (state) => {
      return [...state.comments].reverse();
    },
  },
};

export default comments;
