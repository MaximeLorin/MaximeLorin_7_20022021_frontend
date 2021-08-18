<template>
  <div id="signup">
    <h2 class="signup__title">Inscrivez-vous</h2>
    <input
      type="file"
      accept="image/png, image/jpeg, image/png, image/gif"
      class="signup__image"
      id="file"
      required
      @change="onFileSelected"
    />
    <label for="file" class="label-file">
      <fa icon="images" class="fa" />
      <p v-if="!imageUrl.name">{{ labelPlaceholder }}</p>
      <p v-if="imageUrl.name !== null">{{ imageUrl.name }}</p></label
    >
    <input
      class="signup__input"
      v-model="userName"
      type="text"
      id="userName"
      name="userName"
      placeholder="Nom d'utilisateur"
      required
      minlength="4"
      maxlength="50"
      size="8"
    />
    <input
      class="signup__input"
      type="password"
      v-model="password"
      id="password"
      name="password"
      placeholder="Mot de passe"
      required
      minlength="4"
      maxlength="20"
      size="8"
    />
    <button class="signup__button" @click="signupToApi">
      S'inscrire
    </button>
    <router-link to="/login">Se connecter</router-link>
  </div>
</template>

<script>
export default {
  name: "signupComp",
  data: function() {
    return {
      imageUrl: "",
      userName: "",
      password: "",
    };
  },
  props: {
    labelPlaceholder: {
      type: String,
      default: "Pas d'image",
    },
  },
  methods: {
    async signupToApi() {
      let content = {
        userName: this.userName,
        password: this.password,
        imageUrl: this.imageUrl,
      };

      await this.$store.dispatch("authentication/signup", content);
      await this.$store.dispatch("authentication/login", {
        userName: this.userName,
        password: this.password,
      });
      await this.$router.replace({ name: "MainPage" });
    },
    onFileSelected(event) {
      this.imageUrl = event.target.files[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#signup {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgb(36, 36, 36);
  color: white;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-clip: padding-box;
  height: 250px;
  width: 80%;
  padding: 5%;
}
.signup__image {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.signup__button {
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
.signup__image + label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.95rem;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 17.5px;
  width: 110px;
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
  border: solid 2px grey;
  background-color: white;
}
@media screen and (min-width: 700px) {
  #signup {
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
