<template>
  <transition name="show">
    <div id="sidebar" class="sidebar" v-if="open">
      <router-link to="/profile"
        ><fa icon="cog" class="sidebar__icon"
      /></router-link>

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
  background-color: rgba(36, 36, 36, 0.733);
  height: 100%;
  width: 20%;
  display: flex;
  position: fixed;
  top: 10vh;
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
    transition: all 200ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(80px);
  }
}
@media screen and (min-width: 700px) {
  .sidebar {
    height: 100%;
    width: 20%;
    display: flex;
    position: fixed;
    top: 7vh;
    right: -5px;
    flex-direction: column;
    align-items: center;
  }

  .sidebar__icon {
    margin-top: 120px;
  }
}
</style>
