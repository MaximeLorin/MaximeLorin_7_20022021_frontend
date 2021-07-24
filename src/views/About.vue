<template>
  <sidebar :open="navOpen" />
  <navComp @togglenav="navOpen = !navOpen" />
</template>
<script>
// @ is an alias to /src
import sidebar from "@/components/sidebar.vue";
import navComp from "@/components/navComp.vue";

export default {
  name: "About",
  components: {
    sidebar,
    navComp,
  },
  data: function() {
    return {
      navOpen: false,
    };
  },
};
</script>

<style lang="scss"></style>
