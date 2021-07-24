<template>
  <fa icon="bars" class="bars" @click="$emit('togglenav')" />
</template>

<script>
export default {
  name: "navComp",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: ["open"],
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bars {
  position: absolute;
  top: 23px;
  right: 0;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  margin-right: 5%;
}
</style>
