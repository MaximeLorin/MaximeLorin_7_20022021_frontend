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
  height: 100vh;
}
* {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
a {
  color: white;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(36, 36, 36);
  &__img {
    margin-left: 5%;
    object-fit: cover;
    width: 220px;
    height: 80px;
  }
}
</style>
