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
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));

      this.$store.dispatch("authentication/reconnect", connectInfo);
      if (connectInfo.isConnected) {
        this.$router.replace({ name: "Post" });
      }
    },
    getComments() {
      // console.log(this.id);
      this.$store.dispatch("comment/getComments", this.id);
    },
  },
  mounted() {
    this.reconnectOnRefresh();
    this.getOnePost();
    this.getComments();
  },
};
</script>

<style lang="scss">
#onePost {
  min-height: 87vh;
  padding-top: 11vh;
  padding-bottom: 2vh;

  background-color: rgb(119, 119, 119);
}
</style>
