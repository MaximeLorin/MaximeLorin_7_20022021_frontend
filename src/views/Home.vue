<template>
  <div class="home bg-black">
    <img alt="Vue logo" src="../assets/iconNB.png" />
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
