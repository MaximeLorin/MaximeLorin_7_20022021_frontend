<template>
  <div id="main">
    <createPostComp class="createComp" />
    <postComp />
    <sidebar :open="navOpen" class="sidebar" />
    <navComp @togglenav="navOpen = !navOpen" />
  </div>
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
    // getAllPosts() {
    //   this.$store.dispatch("posts/getPosts");
    // },
    getNameById() {
      const userId = {
        userId: this.$store.state.authentication.userId,
      };
      this.$store.dispatch("authentication/setUserName", userId);
    },
  },
  mounted() {
    //this.getAllPosts();
    this.getNameById();
  },
};
</script>

<style lang="scss">
#main {
  // height: 100vh;
  padding-top: 11vh;
}
</style>
