<template>
  <div id="onePost">
    <sidebar :open="navOpen" class="sidebar" />
    <navComp @togglenav="navOpen = !navOpen" />
    <onePostComp />
    <createComment class="createComment" />
    <commentComp />
  </div>
</template>
<script>
// @ is an alias to /src

import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";
import onePostComp from "@/components/onePostComp.vue";
import createComment from "@/components/createComment.vue";
import commentComp from "@/components/commentComp.vue";

export default {
  name: "Post",
  components: {
    sidebar,
    navComp,
    onePostComp,
    createComment,
    commentComp,
  },
  props: ["id"],
  data: function() {
    return {
      navOpen: false,
    };
  },
  computed: {},
  methods: {
    getOnePost() {
      this.$store.dispatch("posts/getOnePost", this.id);
    },
  },
  mounted() {
    this.getOnePost();
  },
};
</script>

<style lang="scss">
#onePost {
  height: 89vh;
  padding-top: 11vh;
}
</style>
