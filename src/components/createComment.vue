<template>
  <div id="comment">
    <div class="commentBox">
      <h3 class="commentBox__Author"></h3>
      <p class="commentBox__Content">{{ post }}</p>
    </div>
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
    getComments() {
      const postId = { postId: this.post.id };
      console.log(postId);
      this.$store.dispatch("comment/getComments", postId);
    },
  },
  updated() {
    this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#comment {
  background-color: rgb(36, 36, 36);
  width: 85%;
  height: 450px;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.commentBox {
  background-color: grey;
  width: 95%;
  height: 50px;
  margin: 2.5%;
}
</style>
