<template>
  <createPostComp />
  <postComp />
  <!-- <ul>
    <li v-for="post in posts">{{ posts.posts }}</li>
  </ul> -->
  <sidebar :open="navOpen" class="sidebar" />
  <navComp @togglenav="navOpen = !navOpen" />
</template>
<script>
// @ is an alias to /src
import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";
import createPostComp from "@/components/createPostComp.vue";
import postComp from "@/components/postComp.vue";

export default {
  name: "MainPage",
  components: {
    sidebar,
    navComp,
    createPostComp,
    postComp,
  },
  data: function() {
    return {
      navOpen: false,
      posts: [],
    };
  },
  methods: {
    getAllPosts() {
      this.$store.dispatch("posts/getPosts");
      this.posts = this.$store.state.posts;
    },
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  top: 80px;
}
</style>
