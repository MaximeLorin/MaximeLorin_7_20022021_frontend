<template>
  <div id="login">
    <h2 class="login__title">Login</h2>
    <input
      v-model="userName"
      type="text"
      id="userName"
      name="userName"
      required
      minlength="4"
      maxlength="15"
      size="10"
    />
    <input
      type="text"
      id="password"
      name="password"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <button class="login__button" type="button" @click="connectToApi">
      Connect
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      userName: "",
      password: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async connectToApi() {
      let content = { userName: this.userName, password: this.password };
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup/",
        content
      );
      return console.log(response);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: bisque;
}
</style>
