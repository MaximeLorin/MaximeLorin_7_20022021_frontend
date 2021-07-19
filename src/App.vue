<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  height: 100vh;
  background-color: grey;
}
#nav {
  background-color: blue;
}
</style>
