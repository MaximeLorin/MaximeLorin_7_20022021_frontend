<template>
  <div id="postCreate">
    <form action="post" class="createPost">
      <input type="text" class="createPost__title" />
      <input type="text" class="createPost__image" />
      <button class="createPost__btn">Créer</button>
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
#postCreate {
  background-color: rgb(36, 36, 36);
  width: 85%;
  height: 140px;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.createPost {
  &__title {
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
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
  &__btn {
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
}
</style>
