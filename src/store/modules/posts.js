import axios from "axios";
//import store from "..";

const POST_MUTATION_TYPE = {
  GET_ALL_POSTS: "GET_ALL_POSTS",
  GET_ONE_POST: "GET_ONE_POST",
  CREATE_POST: "CREATE_POST",
};

const posts = {
  namespaced: true,
  state: () => ({ posts: [], post: "" }),

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
  },
  actions: {
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
        if (localStorage.getItem("postId")) {
          localStorage.removeItem("postId");
        }
        //console.log(response.data);
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
      if (reponse) {
        localStorage.setItem("postId", JSON.stringify(reponse.data.id));
      }
      commit("GET_ONE_POST", reponse.data);
    },
    async createPost({ commit }, post) {
      try {
        const auth = localStorage.getItem("user");

        let fData = new FormData();
        fData.append("imageUrl", post.imageUrl);
        fData.append("author", post.author);
        fData.append("title", post.title);

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
  },

  getters: {
    posts: (state) => {
      return [...state.posts].reverse();
    },
    post: (state) => {
      return { ...state.post };
    },
  },
};

export default posts;
