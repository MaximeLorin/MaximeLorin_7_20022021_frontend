<template>
  <div class="notFoundBox"><h1 class="notFoundBox__text">PAGE 404</h1></div>
</template>
<script>
export default {
  name: "notFound",
  components: {},
  data: function() {
    return {
      navOpen: false,
    };
  },
  computed: {},
  methods: {
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));
      // console.log(connectInfo);
      this.$store.dispatch("authentication/reconnect", connectInfo);
    },
  },
  mounted() {},
};
</script>

<style lang="scss"></style>
