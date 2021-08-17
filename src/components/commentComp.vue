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
    ...mapGetters("authentication", {
      userId: "userId",
    }),
  },
  methods: {
    // deleteOneComment(comment) {
    //   const idUser = this.userId;
    //   const postId = this.post;
    //   console.log("mon id", postId.id);
    //   this.$store.dispatch("comment/deleteOneComment", comment + ":" + idUser);
    //   this.$store.dispatch("comment/getComments", postId);
    // },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment {
  color: white;
  background-color: rgb(36, 36, 36);
  width: 90%;
  margin-left: 5%;
  height: 80px;
  position: relative;
  border-radius: 15px;

  border-top: solid 1px rgb(119, 119, 119);
  &__author {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  &__content {
    margin-left: 20px;
    margin-top: 5px;
    width: 85%;
    height: 25px;
    padding: 3px;
    border-radius: 10px;
    background-color: rgb(138, 138, 138);
  }
}
@media screen and (min-width: 700px) {
  .comment {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
