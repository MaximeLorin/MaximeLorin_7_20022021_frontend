import axios from "axios";
// import comments from "./comment";

//import store from "..";

const POST_MUTATION_TYPE = {
  GET_ALL_POSTS: "GET_ALL_POSTS",
  GET_ONE_POST: "GET_ONE_POST",
  CREATE_POST: "CREATE_POST",
  CREATE_COMMENT: "CREATE_COMMENT",
  CREATE_COMMENTS: "CREATE_COMMENTS",
  DELETE_COMMENTS: "DELETE_COMMENTS",
};

const posts = {
  namespaced: true,
  state: () => ({
    posts: [{ post: { Comments: [] } }],
    post: { Comments: [] },
  }),

  mutations: {
    [POST_MUTATION_TYPE.GET_ALL_POSTS](state, posts) {
      state.posts = posts;
    },
    [POST_MUTATION_TYPE.GET_ONE_POST](state, post) {
      state.post = post;
    },
    [POST_MUTATION_TYPE.CREATE_POST](state, post) {
      state.posts = state.posts.concat(post);
    },
    [POST_MUTATION_TYPE.CREATE_COMMENT](state, comment) {
      state.post.Comments = state.post.Comments.concat(comment);
    },
    [POST_MUTATION_TYPE.CREATE_COMMENTS](state, comment) {
      state.posts = state.posts.concat(comment);
    },
    [POST_MUTATION_TYPE.DELETE_COMMENTS](state, comment) {
      state.posts = state.posts.filter((post) => post.id !== comment);
    },
  },
  actions: {
    async deletePost({ commit }, idPost) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));
        const postId = idPost.split(":")[0];
        // console.log(postId);
        await axios.delete(`http://localhost:3000/api/posts/${idPost}`, {
          headers: {
            Authorization: `Bearer ` + auth.token,
          },
        });
        const postList = this.state.posts.posts.filter(
          (post) => post.id !== postId
        );
        const response = await axios.get("http://localhost:3000/api/posts/", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ` + auth.token,
          },
        });
        console.log(postList);
        commit("GET_ALL_POSTS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteComment({ commit }, idComment) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        const commentId = idComment.split(":")[0];
        console.log(commentId);
        await axios.delete(`http://localhost:3000/api/comment/${idComment}`, {
          headers: {
            Authorization: `Bearer ` + auth.token,
          },
        });

        const response = await axios.get("http://localhost:3000/api/posts/", {
          headers: {
            Authorization: `Bearer ` + auth.token,
          },
        });
        console.log(response);
        commit(POST_MUTATION_TYPE.GET_ALL_POSTS, response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async createComment({ commit }, comment) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        const toSend = {
          author: comment.author,
          content: comment.content,
          postId: comment.postId,
        };

        const response1 = await axios.post(
          "http://localhost:3000/api/comment/",
          toSend,
          {
            headers: {
              Authorization: `Bearer ` + auth.token,
            },
          }
        );
        console.log(response1);
        const response = await axios.get("http://localhost:3000/api/posts/", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ` + auth.token,
          },
        });

        commit("GET_ALL_POSTS", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getPosts({ commit }) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        const response = await axios.get("http://localhost:3000/api/posts/", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ` + auth.token,
          },
        });
        commit("GET_ALL_POSTS", response.data);

        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getOnePost({ commit }, idPost) {
      const auth = JSON.parse(localStorage.getItem("user"));
      const reponse = await axios.get(
        `http://localhost:3000/api/posts/${idPost}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ` + auth.token,
          },
        }
      );
      commit("GET_ONE_POST", reponse.data[0]);
    },
    async createPost({ commit }, post) {
      try {
        const auth = localStorage.getItem("user");

        let fData = new FormData();
        fData.append("imageUrl", post.imageUrl);
        fData.append("author", post.author);
        fData.append("title", post.title);
        fData.append("UserUuid", post.UserUuid);
        const response = await axios.post(
          "http://localhost:3000/api/posts/",
          fData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        console.log(response);
        commit(POST_MUTATION_TYPE.CREATE_POST, response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getUserPosts({ commit }, idUser) {
      const auth = JSON.parse(localStorage.getItem("user"));
      const reponse = await axios.get(
        `http://localhost:3000/api/auth/${idUser}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ` + auth.token,
          },
        }
      );
      console.log(reponse.data);
      commit("GET_ALL_POSTS", reponse.data);
    },
  },

  getters: {
    posts: (state) => {
      return [...state.posts].reverse();
    },
    post: (state) => {
      return { ...state.post };
    },
    comments: (state) => {
      return [...state.post.Comments].reverse();
    },
  },
};

export default posts;
