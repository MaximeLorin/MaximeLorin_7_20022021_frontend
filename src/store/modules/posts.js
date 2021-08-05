import axios from "axios";
//import store from "..";

// const allPosts = {  };
// const onePost = {  };

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
    async createPost({ commit }, post) {
      try {
        let fData = new FormData();
        fData.append("imageUrl", post.imageUrl);
        fData.append("author", post.author);
        fData.append("title", post.title);

        const response = await axios.post(
          "http://localhost:3000/api/posts/",
          fData,
          { headers: { "Content-Type": "multipart/form-data" } }
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
