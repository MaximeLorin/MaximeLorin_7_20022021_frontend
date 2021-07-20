<template>
  <div id="homePage">
    <signup />
  </div>
</template>

<script>
// @ is an alias to /src
import signup from "@/components/signup.vue";

export default {
  name: "Home",
  components: {
    signup,
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
  background-color: rgb(238, 238, 238);
}
</style>
