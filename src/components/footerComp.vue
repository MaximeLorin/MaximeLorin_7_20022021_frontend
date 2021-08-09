<template>
  <div id="footerComp"><p>@ 2021 Maxime Lorin</p></div>
</template>

<script>
export default {
  name: "footerComp",
  data: function() {
    return {};
  },
  props: [],
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#footerComp {
  height: 10vh;
  width: 100%;
  background-color: rgb(36, 36, 36);

  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
}
</style>
