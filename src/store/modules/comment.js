import axios from "axios";

const allComments = { GET_ALL_COMMENTS: "GET_ALL_COMMENTS" };

const comments = {
  namespaced: true,
  state: () => ({ comments: [] }),

  mutations: {
    [allComments.GET_ALL_COMMENTS](state, comments) {
      state.comments = state.comments.concat(comments);
    },
  },
  actions: {
    async getComments({ commit }, postId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/comment?postId=${postId}`
        );

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
