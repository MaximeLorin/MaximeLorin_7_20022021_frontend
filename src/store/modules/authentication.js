import axios from "axios";
import store from "..";

const mutationType = {
  SET_USER_ID: "SET_USER_ID",
  SET_USER_TOKEN: "SET_USER_TOKEN",
  // IS_USER_CONNECTED: 0,
};

const authentication = {
  namespaced: true,
  state: () => ({ userId: null, token: null }),
  isConnected: 0,
  mutations: {
    [mutationType.SET_USER_ID](state, userId) {
      state.userId = userId;
    },
    [mutationType.SET_USER_TOKEN](state, token) {
      state.token = token;
    },
    increment(state) {
      state.isConnected++;
    },
    substract(state) {
      state.isConnected--;
    },
  },
  actions: {
    async signup({ commit }, userAuth) {
      try {
        let content = {
          userName: userAuth.userName,
          password: userAuth.password,
        };
        const response = await axios.post(
          "http://localhost:3000/api/auth/signup/",
          content
        );
        commit(mutationType.SET_USER_ID, response.data.userId);
        commit(mutationType.SET_USER_TOKEN, response.data.token);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async login({ commit }, userAuth) {
      try {
        let content = {
          userName: userAuth.userName,
          password: userAuth.password,
        };
        const response = await axios.post(
          "http://localhost:3000/api/auth/login/",
          content
        );
        commit(mutationType.SET_USER_ID, response.data.userId);
        commit(mutationType.SET_USER_TOKEN, response.data.token);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          store.commit("increment");
          localStorage.setItem("isConnected", store.isConnected);
        }
        console.log(response.data.token);
      } catch (err) {
        console.log({ err });
      }
    },
  },
  getters: {},
};

export default authentication;
