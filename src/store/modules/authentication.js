import axios from "axios";
import store from "..";

const mutationType = {
  SET_USER_ID: "SET_USER_ID",
  SET_USER_TOKEN: "SET_USER_TOKEN",
  IS_USER_CONNECTED: "IS_USER_CONNECTED",
};

const authentication = {
  namespaced: true,
  state: () => ({ userId: null, token: null, isConnected: false }),

  mutations: {
    [mutationType.SET_USER_ID](state, userId) {
      state.userId = userId;
    },
    [mutationType.SET_USER_TOKEN](state, token) {
      state.token = token;
    },
    [mutationType.IS_USER_CONNECTED](state, increment) {
      state.isConnected = increment;
    },
  },
  actions: {
    reconnect({ commit }, authBack) {
      commit(mutationType.SET_USER_ID, authBack.userId);
      commit(mutationType.SET_USER_TOKEN, authBack.token);
      commit(mutationType.IS_USER_CONNECTED, authBack.isConnected);
    },
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
        if (response.data) {
          commit(mutationType.IS_USER_CONNECTED, true);
          localStorage.setItem(
            "user",
            JSON.stringify(store.state.authentication)
          );
        }
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
          commit(mutationType.IS_USER_CONNECTED, true);
          localStorage.setItem(
            "user",
            JSON.stringify(store.state.authentication)
          );
        }
      } catch (err) {
        console.log({ err });
      }
    },
    disconnect({ commit }) {
      commit(mutationType.SET_USER_ID, null);
      commit(mutationType.SET_USER_TOKEN, null);
      commit(mutationType.IS_USER_CONNECTED, false);
      localStorage.removeItem("user");
    },
  },

  getters: {},
};

export default authentication;
