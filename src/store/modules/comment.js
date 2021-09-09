import axios from "axios";

const allComments = {
  GET_ALL_COMMENTS: "GET_ALL_COMMENTS",
  CREATE_COMMENT: "CREATE_COMMENT",
};

const comments = {
  namespaced: true,
  state: () => ({ comments: [] }),

  mutations: {
    [allComments.GET_ALL_COMMENTS](state, comments) {
      state.comments = comments;
      // state.comments = state.comments.concat(comments);
    },
    [allComments.CREATE_COMMENT](state, comments) {
      state.comments = state.comments.concat(comments);
    },
  },
  actions: {
    async getComments({ commit }, postId) {
      try {
        const response = await axios.get(
          `https://intense-springs-06763.herokuapp.com/api/comment?postId=${postId}`
        );
        // console.log(response.data[0].Comments);
        commit("GET_ALL_COMMENTS", response.data[0].Comments);
      } catch (err) {
        console.log(err);
      }
    },
    async createOneComment({ commit }, comment) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        const toSend = {
          author: comment.author,
          content: comment.content,
          postId: comment.postId,
        };
        console.log(toSend);
        const response = await axios.post(
          "https://intense-springs-06763.herokuapp.com/api/comment/",
          toSend,
          {
            headers: {
              Authorization: `Bearer ` + auth.token,
            },
          }
        );

        commit("CREATE_COMMENT", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteOneComment({ commit }, idComment, postId) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        const commentId = idComment.split(":")[0];
        console.log(postId, commentId);
        await axios.delete(
          `https://intense-springs-06763.herokuapp.com/api/comment/${idComment}`,
          {
            headers: {
              Authorization: `Bearer ` + auth.token,
            },
          }
        );
        // const commentList = this.state.comment.comments.filter(
        //   (comment) => comment.id !== commentId
        // );
        // commit(allComments.GET_ALL_COMMENTS, commentList);
        const response = await axios.get(
          `https://intense-springs-06763.herokuapp.com/api/comment?postId=${postId}`
        );
        console.log(response.data[0].Comments);
        commit("GET_ALL_COMMENTS", response.data[0].Comments);
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {
    comments: (state) => {
      return [...state.comments];
    },
  },
};

export default comments;
