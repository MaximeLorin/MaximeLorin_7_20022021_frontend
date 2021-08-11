<template>
  <header id="header" class="header">
    <router-link to="/"
      ><img class="header__img" src="./assets/iconNB.png" alt="logo groupomania"
    /></router-link>
  </header>

  <router-view />
</template>
<script>
export default {
  name: "sidebar",
  components: {},
  data: function() {
    return {
      showSideIcon: true,
    };
  },
  props: {
    msg: String,
  },
  methods: { togglenav() {} },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
#app {
  background-color: rgb(119, 119, 119);
}
* {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
input,
label,
select,
button,
textarea {
  font-size: 0.95rem;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
}

input:focus {
  outline: 0;
}

.header {
  z-index: 200;
  display: flex;
  position: fixed;
  top: 0px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: rgb(36, 36, 36);
  &__img {
    margin-left: 5%;
    object-fit: cover;
    height: 10vh;
    width: 220px;
  }
}
</style>
