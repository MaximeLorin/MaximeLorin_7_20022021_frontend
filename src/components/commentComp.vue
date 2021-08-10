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
    ...mapGetters("posts", {
      comments: "comments",
    }),
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment {
  color: white;
  background-color: rgb(36, 36, 36);
  width: 90%;
  height: 75px;
  margin-right: 5%;
  margin-left: 5%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top: solid 1px rgb(119, 119, 119);
  &__author {
    margin-left: 20px;
    margin-top: 5px;
  }
  &__content {
    margin-left: 20px;
    margin-top: 5px;
  }
}
</style>
