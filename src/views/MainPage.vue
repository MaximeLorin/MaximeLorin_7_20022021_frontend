<template>
  <createPostComp />
  <!-- <postComp v-for="post of posts" :key="post.id"  /> -->
  <postComp />
  <sidebar :open="navOpen" class="sidebar" />
  <navComp @togglenav="navOpen = !navOpen" />
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
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
    };
  },
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

<style lang="scss">
.sidebar {
  position: absolute;
  top: 80px;
}
</style>
