<template>
  <div id="profilBox" class="profilBox">
    <img src="" alt="" class="profilBox__Pic" />
    <h2 class="profilBox__info"></h2>
    <button class="profilBox__delete"></button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "profilComp",
  data: function() {
    return {};
  },
  props: [],
  computed: {
    ...mapGetters("posts", {
      post: "post",
    }),
    ...mapGetters("authentication", {
      userName: "userName",
    }),
  },
  methods: {},
  updated() {
    // this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profilBox {
  background-color: black;
  width: 90%;
  height: 500px;
}
</style>
