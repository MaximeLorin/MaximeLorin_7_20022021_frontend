<template>
  <div id="post" v-for="post of posts" :key="post.id">
    <div class="post">
      <button
        @click="deleteOnePost(post.id)"
        v-if="userName === post.author"
        class="post__delete"
      >
        <fa icon="times" class="delete" />
      </button>
      <h2 class="post__author">{{ post.author }}</h2>
      <h3 class="post__title">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </h3>
      <img class="post__image" :src="post.imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "postComp",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
    }),
    ...mapGetters("posts", {
      post: "post",
    }),
    ...mapGetters("authentication", {
      userName: "userName",
    }),
  },
  methods: {
    deleteOnePost(post) {
      this.$store.dispatch("posts/deletePost", post);
    },
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
  width: 90%;
  height: 320px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}
.delete {
  color: white;
}
.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &__delete {
    width: 20px;
    position: relative;
    top: 3%;
    left: 93%;
    font-size: 1.2rem;
  }
  &__author {
    margin-top: -10px;

    margin-left: 25px;
    color: white;
    border-radius: 17.5px;
    width: 110px;
    height: 25px;
  }
  &__title {
    margin-top: 5px;
    margin-left: 25px;
    color: white;
  }
  &__image {
    margin-top: 3%;

    width: 100%;
    height: 210px;
    object-fit: cover;

    background-color: white;
  }
}
</style>
