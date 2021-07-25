<template>
  <div id="post">
    <form action="post" class="post">
      <h2 class="post__title"></h2>
      <img class="post__image" />
    </form>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: ["open"],
  methods: {
    disconnect() {
      console.log("click");
      this.$store.dispatch("authentication/disconnect");
      this.$router.replace({ name: "Login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#post {
  background-color: rgb(36, 36, 36);
  width: 85%;
  height: 280px;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.post {
  &__title {
    font-size: 0.95rem;

    border-radius: 17.5px;
    width: 110px;
    height: 25px;
    border: solid 2px grey;
    background-color: white;
  }
  &__image {
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 110px;
    height: 25px;
    border: solid 2px grey;
    background-color: white;
  }
}
</style>
