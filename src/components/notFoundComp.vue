<template>
  <div class="notFoundBox">
    <fa icon="frown" class="notFoundBox__icon" />
    <h1 class="notFoundBox__title">Oups !</h1>
    <h2 class="notFoundBox__txt1">Cette page est introuvable.</h2>
    <router-link to="/" class="notFoundBox__txt2"
      >Retourner à l'acceuil.</router-link
    >
  </div>
</template>

<script>
export default {
  name: "notFoundComp",
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
.notFoundBox {
  width: 90%;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  &__icon {
    font-size: 7rem;
    margin-bottom: 30px;
  }
  &__title {
    font-size: 2.8rem;
  }
  &__txt1 {
    margin-top: 20px;
  }
  &__txt2 {
    text-decoration: underline;
    margin-top: 15px;
  }
}
</style>
