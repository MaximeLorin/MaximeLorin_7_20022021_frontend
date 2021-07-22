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
};
</script>

<style lang="scss">
#signup {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(238, 238, 238);
}
</style>
