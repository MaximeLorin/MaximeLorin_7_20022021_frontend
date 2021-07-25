<template>
  <transition name="show">
    <div id="sidebar" class="sidebar" v-if="open">
      <fa icon="cog" class="sidebar__icon" />
      <fa icon="sign-in-alt" class="sidebar__icon" @click="disconnect" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "sidebar",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: ["open"],
  methods: {
    disconnect() {
      console.log("click");
      this.$store.dispatch("authentication/disconnect");
      this.$router.replace({ name: "Login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  border-right: solid 2px white;
  background-color: rgb(36, 36, 36);
  height: 100%;
  width: 20%;
  display: flex;
  position: absolute;
  right: -5px;
  flex-direction: column;
  align-items: center;
}
.sidebar__icon {
  color: white;
  font-size: 2.3rem;
  margin-top: 25%;
}

.show {
  &-enter-active,
  &-leave-active {
    transition: all 400ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(80px);
  }
}
</style>
