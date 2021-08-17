<template>
  <div class="comp404"><notFoundComp /></div>
</template>
<script>
import notFoundComp from "@/components/notFoundComp.vue";
export default {
  name: "notFound",
  components: { notFoundComp },
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

<style lang="scss">
.comp404 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
