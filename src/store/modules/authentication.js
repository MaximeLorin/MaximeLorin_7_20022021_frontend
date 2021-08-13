import axios from "axios";
import store from "..";

const mutationType = {
  SET_USER_ID: "SET_USER_ID",
  SET_USER_TOKEN: "SET_USER_TOKEN",
  SET_USER_NAME: "SET_USER_NAME",
  SET_USER_IMAGE: "SET_USER_IMAGE",
  IS_USER_CONNECTED: "IS_USER_CONNECTED",
};

const authentication = {
  namespaced: true,
  state: () => ({
    imageUrl: null,
    userId: null,
    token: null,
    isConnected: false,
    userName: null,
  }),

  mutations: {
    [mutationType.SET_USER_ID](state, userId) {
      state.userId = userId;
    },
    [mutationType.SET_USER_IMAGE](state, imageUrl) {
      state.imageUrl = imageUrl;
    },
    [mutationType.SET_USER_TOKEN](state, token) {
      state.token = token;
    },
    [mutationType.IS_USER_CONNECTED](state, increment) {
      state.isConnected = increment;
    },
    [mutationType.SET_USER_NAME](state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    reconnect({ commit }, authBack) {
      commit(mutationType.SET_USER_ID, authBack.userId);
      commit(mutationType.SET_USER_TOKEN, authBack.token);
      commit(mutationType.IS_USER_CONNECTED, authBack.isConnected);
      commit(mutationType.SET_USER_IMAGE, authBack.imageUrl);
      commit(mutationType.SET_USER_NAME, authBack.userName);
    },
    async setUserName({ commit }, userId) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/byid",
          userId
        );
        commit(mutationType.SET_USER_NAME, response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async signup({ commit }, userAuth) {
      try {
        let fData = new FormData();
        fData.append("userName", userAuth.userName);
        fData.append("password", userAuth.password);
        fData.append("imageUrl", userAuth.imageUrl);
        console.log(fData);
        const response = await axios.post(
          "http://localhost:3000/api/auth/signup/",
          fData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              // Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        commit(mutationType.SET_USER_ID, response.data.userId);
        commit(mutationType.SET_USER_TOKEN, response.data.token);
        commit(mutationType.SET_USER_IMAGE, response.data.imageUrl);
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
        console.log(response.data);
        commit(mutationType.SET_USER_ID, response.data.userId);
        commit(mutationType.SET_USER_TOKEN, response.data.token);
        commit(mutationType.SET_USER_IMAGE, response.data.imageUrl);
        commit(mutationType.SET_USER_NAME, response.data.userName);
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
    async deleteUser({ commit }, idUser) {
      try {
        console.log(idUser);
        const auth = JSON.parse(localStorage.getItem("user"));
        await axios.delete(`http://localhost:3000/api/auth/${idUser}`, {
          headers: {
            Authorization: `Bearer ` + auth.token,
          },
        });
        localStorage.removeItem("user");
        commit(mutationType.SET_USER_ID, null);
      } catch (err) {
        console.log(err);
      }
    },
    async modifyUser({ commit }, user) {
      try {
        const auth = JSON.parse(localStorage.getItem("user"));

        let fData = new FormData();
        // fData.append("uuid", user.uuid);
        fData.append("imageUrl", user.imageUrl);
        console.log(fData);

        const response = await axios.put(
          `http://localhost:3000/api/auth/${user.uuid}`,
          fData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        console.log(response.data);
        commit(mutationType.SET_USER_IMAGE, response.data);
        localStorage.setItem(
          "user",
          JSON.stringify(store.state.authentication)
        );
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {
    userName: (state) => {
      return state.userName;
    },
    userPic: (state) => {
      return state.imageUrl;
    },
    userId: (state) => {
      return state.userId;
    },
  },
};

export default authentication;
