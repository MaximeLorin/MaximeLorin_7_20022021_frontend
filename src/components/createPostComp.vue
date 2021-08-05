<template>
  <div id="postCreate">
    <form class="createPost">
      <h2 class="createPost__author">
        {{ userName }}
      </h2>
      <input type="text" class="createPost__title" v-model="title" />
      <input
        type="file"
        accept="image/png, image/jpeg, image/png, image/gif"
        class="createPost__image"
        @change="onFileSelected"
      />
      <button class="createPost__btn" @click="newPost">Créer</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "createPostComp",
  data: function() {
    return {
      title: "",
      imageUrl: "",
    };
  },
  computed: {
    ...mapGetters("authentication", {
      userName: "userName",
    }),
  },
  methods: {
    onFileSelected(event) {
      this.imageUrl = event.target.files[0];
    },
    async newPost() {
      this.$store.dispatch("posts/createPost", {
        author: this.userName,
        title: this.title,
        imageUrl: this.imageUrl,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#postCreate {
  background-color: rgb(36, 36, 36);
  width: 85%;

  height: 200px;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.createPost {
  display: flex;
  flex-direction: column;
  margin: 20px;
  &__author {
    color: white;
  }
  &__title {
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 110px;
    height: 25px;
    border: solid 2px grey;
    background-color: white;
  }
  &__image {
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 90%;
    height: 25px;
    border: solid 2px grey;
    background-color: white;
  }
  &__btn {
    font-weight: bold;
    border-radius: 17.5px;
    width: 90px;
    height: 35px;
    background-color: white;
    &:hover {
      background-color: grey;
      color: white;
      transition-duration: 0.5s;
      cursor: pointer;
    }
  }
}
</style>
