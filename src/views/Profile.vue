<template>
  <div id="profile">
    <sidebar :open="navOpen" class="sidebar" />
    <navComp @togglenav="navOpen = !navOpen" />

    <profilComp />
  </div>
</template>
<script>
// @ is an alias to /src

import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";
import profilComp from "@/components/profilComp.vue";
export default {
  name: "Profile",
  components: {
    sidebar,
    navComp,
    profilComp,
  },
  props: ["id"],
  data: function() {
    return {
      navOpen: false,
    };
  },
  computed: {},
  methods: {
    // getOnePost() {
    //   this.$store.dispatch("posts/getOnePost", this.id);
    // },
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));

      this.$store.dispatch("authentication/reconnect", connectInfo);
    },
  },
  mounted() {
    this.reconnectOnRefresh();
    // this.getOnePost();
  },
};
</script>

<style lang="scss">
#profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  padding-top: 11vh;
  background-color: rgb(119, 119, 119);
}
</style>
