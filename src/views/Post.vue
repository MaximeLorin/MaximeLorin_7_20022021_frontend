<template>
  <sidebar :open="navOpen" class="sidebar" />
  <navComp @togglenav="navOpen = !navOpen" />
  <onePostComp />
  <createComment />
</template>
<script>
// @ is an alias to /src

import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";
import onePostComp from "@/components/onePostComp.vue";
import createComment from "@/components/createComment.vue";

export default {
  name: "Post",
  components: {
    sidebar,
    navComp,
    onePostComp,
    createComment,
  },
  props: ["id"],
  data: function() {
    return {
      navOpen: false,
    };
  },
  computed: {},
  methods: {
    // getNameById() {
    //   const userId = {
    //     userId: this.$store.state.authentication.userId,
    //   };
    //   this.$store.dispatch("authentication/setUserName", userId);
    // },
    getOnePost() {
      this.$store.dispatch("posts/getOnePost", this.id);
    },
  },
  mounted() {
    // this.getNameById();
    this.getOnePost();
  },
};
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  top: 80px;
}
</style>
