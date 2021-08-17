<template>
  <div id="postCreate">
    <div class="profil">
      <img :src="userPic" alt="" class="profil__profPic" />
      <h2 class="profil__author">
        {{ userName }}
      </h2>
    </div>

    <form class="createPost">
      <input
        type="text"
        class="createPost__title"
        placeholder="Votre titre..."
        v-model="title"
        minlength="4"
        maxlength="64"
      />

      <input
        type="file"
        accept="image/png, image/jpeg, image/png, image/gif"
        class="createPost__image"
        id="file"
        @change="onFileSelected"
      />
      <label for="file" class="label-file">
        <fa icon="images" class="fa" />
        <p v-if="!imageUrl.name">{{ labelPlaceholder }}</p>
        <p v-if="imageUrl.name !== null">{{ imageUrl.name }}</p></label
      >
      <button class="createPost__btn" @click="newPost">
        Publier
      </button>
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
      files: [],
      submit: false,
    };
  },
  props: {
    labelPlaceholder: {
      type: String,
      default: "Pas d'image selectionnée",
    },
  },
  computed: {
    ...mapGetters("authentication", {
      userName: "userName",
    }),
    ...mapGetters("authentication", {
      userId: "userId",
    }),
    ...mapGetters("authentication", {
      userPic: "userPic",
    }),
  },
  methods: {
    onFileSelected(event) {
      this.imageUrl = event.target.files[0];
    },
    allowSubmit() {
      if (this.title == !null && this.imageUrl == !null) {
        this.submit = true;
      }
    },
    async newPost() {
      if (this.title && this.imageUrl) {
        this.$store.dispatch("posts/createPost", {
          author: this.userName,
          title: this.title,
          imageUrl: this.imageUrl,
          UserUuid: this.userId,
        });
        this.title = "";
        this.imageUrl = "";
      }
    },
  },
  updated() {
    this.allowSubmit();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fa {
  margin-right: 5px;
}
#postCreate {
  background-color: rgb(36, 36, 36);
  width: 90%;

  height: 175px;
  margin-left: 5%;
  margin-right: 5%;

  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.profil {
  display: flex;
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;

  &__author {
    color: white;
    margin-top: 10px;
  }
  &__profPic {
    background-color: white;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin-right: 10px;
    margin-top: 10px;
    object-fit: cover;
  }
}

.createPost {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  &__title {
    margin-bottom: 5px;
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 60%;
    height: 25px;
    border: solid 2px grey;
    background-color: white;
  }
  &__image {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  &__btn {
    font-weight: bold;
    border-radius: 17.5px;
    width: 90px;
    height: 35px;
    margin-top: 5px;
    background-color: white;
    &:hover {
      background-color: grey;
      color: white;
      transition-duration: 0.5s;
      cursor: pointer;
    }
  }
  .createPost__image + label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 60%;
    height: 25px;
    text-overflow: ellipsis;
    overflow: hidden;
    border: solid 2px grey;
    background-color: white;
  }
}
@media screen and (min-width: 700px) {
  #postCreate {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
}
</style>
