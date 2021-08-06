<template>
  <div id="createComment" class="createComment">
    <h3 class="createComment__author">{{ post.author }}</h3>
    <form class="createComment__form">
      <input type="text" class="createComment__form--content" />
      <button class="createComment__form--button"></button>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "createComment",
  data: function() {
    return {};
  },
  props: [],
  computed: {
    ...mapState("comment", {
      comments: "comments",
    }),
    ...mapGetters("posts", {
      post: "post",
    }),
  },
  methods: {
    // getComments() {
    //   const postId = { postId: this.post.id };
    //   console.log(postId);
    //   this.$store.dispatch("comment/getComments", postId);
    // },
  },
  updated() {
    // this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.createComment {
  background-color: grey;
  width: 85%;
  height: 80px;
  margin: 2.5%;
}
.createComment__form--content {
  font-size: 0.95rem;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 17.5px;
  width: 110px;
  height: 25px;
  border: solid 2px grey;
  background-color: white;
}
.createComment__form--button {
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
</style>
