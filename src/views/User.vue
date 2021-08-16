<template>
  <div id="mainUser">
    <postCompUser />
    <sidebar :open="navOpen" class="sidebar" />
    <navComp @togglenav="navOpen = !navOpen" />
    <!-- <footerComp class="footerComp" /> -->
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapGetters } from "vuex";
import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";

import postCompUser from "@/components/postCompUser.vue";
// import footerComp from "@/components/footerComp.vue";

export default {
  name: "User",
  components: {
    sidebar,
    navComp,

    postCompUser,
  },
  props: ["uuid"],
  data: function() {
    return {
      navOpen: false,
    };
  },
  computed: {
    ...mapState("posts", {
      posts: "posts",
    }),
    ...mapGetters("authentication", {
      userId: "userId",
    }),
  },
  methods: {
    // getAllPosts() {
    //   this.$store.dispatch("posts/getPosts");
    // },
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));
      // console.log(connectInfo);
      this.$store.dispatch("authentication/reconnect", connectInfo);
      if (connectInfo.isConnected) {
        this.$router.replace({ name: "User" });
      }
    },
    getUserPosts() {
      console.log(this.uuid);
      this.$store.dispatch("posts/getUserPosts", this.uuid);
    },
    getNameById() {
      const userId = {
        userId: this.$store.state.authentication.userId,
      };
      this.$store.dispatch("authentication/setUserName", userId);
    },
  },
  mounted() {
    this.reconnectOnRefresh();
    this.getUserPosts();
    this.getNameById();
  },
};
</script>

<style lang="scss">
#mainUser {
  min-height: 87vh;
  padding-top: 11vh;

  padding-bottom: 2vh;
  background-color: rgb(119, 119, 119);
}
</style>
