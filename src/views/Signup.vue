<template>
  <div id="signup">
    <signupComp />
  </div>
</template>

<script>
// @ is an alias to /src
import signupComp from "@/components/signupComp.vue";

export default {
  name: "Signup",
  components: {
    signupComp,
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
#signup {
  height: 100vh;
  background-color: rgb(119, 119, 119);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
