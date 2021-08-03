<template>
  <div id="post" v-for="post of posts" :key="post.id">
    <div class="post">
      <h2 class="post__author">{{ post.author }}</h2>
      <h3 class="post__title">{{ post.title }}</h3>
      <img class="post__image" :src="post.imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "postComp",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: [],
  computed: {
    ...mapState("posts", {
      posts: "posts",
    }),
  },
  methods: {
    getAllPosts() {
      this.$store.dispatch("posts/getPosts");
    },
  },
  mounted() {
    this.getAllPosts();
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
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  &__author {
    margin-top: 3%;
    color: white;
    border-radius: 17.5px;
    width: 110px;
    height: 25px;
  }
  &__title {
    margin-top: 3%;
    color: white;
  }
  &__image {
    margin-top: 3%;
    font-size: 0.95rem;

    border-radius: 17.5px;
    width: 90%;
    height: 170px;
    object-fit: cover;
    border: solid 2px grey;
    background-color: white;
  }
}
</style>
