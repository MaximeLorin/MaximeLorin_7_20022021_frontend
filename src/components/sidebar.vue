<template>
  <div id="sidebar" class="sidebar">
    <fa icon="cog" class="sidebar__icon" />
    <fa icon="sign-in-alt" class="sidebar__icon" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      userName: "",
      password: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  border-right: solid 2px white;
  background-color: rgb(36, 36, 36);
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar__icon {
  color: white;
  font-size: 2.3rem;
  margin-top: 25%;
}
</style>
