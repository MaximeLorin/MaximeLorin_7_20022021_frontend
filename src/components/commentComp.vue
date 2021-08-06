<template>
  <div id="commentBox" class="commentBox">
    <div class="comment" v-for="comment of comments" :key="comment.id">
      <h3 class="comment__author">{{ comment.author }}</h3>
      <p class="comment__content">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "commentComp",
  data: function() {
    return {};
  },
  props: [],
  computed: {
    ...mapGetters("comment", {
      comments: "comments",
    }),
    ...mapGetters("posts", {
      post: "post",
    }),
  },
  methods: {
    async getComments() {
      const postId = localStorage.getItem("postId");
      console.log(postId);
      this.$store.dispatch("comment/getComments", postId);
    },
  },
  mounted() {
    this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment {
  background-color: grey;
  width: 85%;
  height: 80px;
  margin: 2.5%;
}
</style>
