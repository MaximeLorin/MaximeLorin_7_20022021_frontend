<template>
  <div id="main">
    <createPostComp class="createComp" />
    <postComp />
    <sidebar :open="navOpen" class="sidebar" />
    <navComp @togglenav="navOpen = !navOpen" />
    <!-- <footerComp class="footerComp" /> -->
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
    getNameById() {
      const userId = {
        userId: this.$store.state.authentication.userId,
      };
      this.$store.dispatch("authentication/setUserName", userId);
    },
  },
  mounted() {
    this.getNameById();
  },
};
</script>

<style lang="scss">
#main {
  min-height: 87vh;
  padding-top: 11vh;
  padding-bottom: 2vh;
  background-color: rgb(119, 119, 119);
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
