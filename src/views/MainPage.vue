<template>
  <createPostComp />
  <postComp />
  <sidebar :open="navOpen" />
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
    };
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

<style lang="scss"></style>
