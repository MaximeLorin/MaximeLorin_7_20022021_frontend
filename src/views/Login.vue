<template>
  <div id="login">
    <loginComp />
  </div>
</template>
<script>
// @ is an alias to /src
import loginComp from "@/components/loginComp.vue";

export default {
  name: "Login",
  components: {
    loginComp,
  },
  methods: {
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));
      console.log(connectInfo);
      this.$store.dispatch("authentication/reconnect", connectInfo);
      if (connectInfo.isConnected) {
        this.$router.replace({ name: "MainPage" });
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

<style lang="scss">
#login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(238, 238, 238);
}
</style>
