<template>
  <div id="homePage">
    <login msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";

export default {
  name: "Home",
  components: {
    login,
  },
};
</script>

<style lang="scss">
#homePage {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
}
</style>
