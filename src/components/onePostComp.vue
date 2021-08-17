<template>
  <div id="post">
    <div class="post">
      <h2 class="post__author">
        <router-link
          :to="{ name: 'User', params: { uuid: post.UserUuid } }"
          class="align"
          ><img :src="post.imageUser" alt="profile pic" class="profPic" />{{
            post.author
          }}</router-link
        >
      </h2>
      <h3 class="post__title">{{ post.title }}</h3>
      <img class="post__image" :src="post.imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "onePostComp",
  data: function() {
    return {
      showSideIcon: false,
    };
  },
  props: [],
  computed: {
    ...mapState("posts", {
      post: "post",
    }),
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#post {
  background-color: rgb(36, 36, 36);
  width: 90%;

  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.profPic {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 5px;
  border: 2px solid rgb(110, 110, 110);
}
.align {
  display: flex;
  align-items: center;
}
.post {
  display: flex;
  flex-direction: column;

  &__author {
    margin-left: 25px;
    color: white;
    margin-top: 10px;
  }
  &__title {
    margin-left: 25px;
    color: white;
    margin-top: 5px;
  }
  &__image {
    margin-top: 3%;

    width: 100%;
    height: 330px;
    object-fit: cover;
  }
}
@media screen and (min-width: 700px) {
  #post {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
  .post {
    &__image {
      height: 450px;
    }
  }
}
</style>
