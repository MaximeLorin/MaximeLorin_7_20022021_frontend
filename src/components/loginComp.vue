<template>
  <div id="login">
    <h2 class="login__title">Se connecter</h2>
    <input
      class="login__input"
      v-model="userName"
      type="text"
      id="userName"
      name="userName"
      placeholder="Adresse mail"
      required
      minlength="4"
      maxlength="15"
      size="8"
    />
    <input
      class="login__input"
      type="password"
      v-model="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
      required
      minlength="4"
      maxlength="8"
      size="8"
    />
    <button class="login__button" type="button" @click="connectToApi">
      Connection
    </button>
    <router-link to="/">S'inscrire</router-link>
  </div>
</template>

<script>
export default {
  name: "loginComp",
  data: function() {
    return {
      userName: "",
      password: "",
      isConnected: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async connectToApi() {
      let content = { userName: this.userName, password: this.password };
      await this.$store.dispatch("authentication/login", content);
      await this.$router.replace({ name: "MainPage" });
    },
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));
      console.log(connectInfo);

      if (connectInfo.authentication.isConnected === 1) {
        this.connectToApi();
      }
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.reconnectOnRefresh();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#login {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgb(36, 36, 36);
  color: white;
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;
  background-clip: padding-box;
  height: 25%;
  width: 80%;
  padding: 5%;
}
.login__button {
  font-weight: bold;
  border-radius: 17.5px;
  width: 90px;
  height: 35px;
  background-color: white;
  &:hover {
    background-color: grey;
    color: white;
    transition-duration: 0.5s;
    cursor: pointer;
  }
}
#userName {
  font-size: 0.95rem;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 17.5px;
  width: 110px;
  height: 25px;
  border: solid 2px grey;
  background-color: white;
}
#password {
  font-size: 0.95rem;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 17.5px;
  width: 110px;
  height: 25px;
  border: solid 2px grey;

  background-color: white;
}
</style>
