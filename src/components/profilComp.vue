<template>
  <div id="profilBox" class="profilBox">
    <img :src="userPic" alt="profile picture" class="profilBox__pic" />
    <input
      type="file"
      accept="image/png, image/jpeg, image/png, image/gif"
      class="profilBox__input"
      id="file"
      required
      @change="onFileSelected"
    />
    <label for="file" class="label-file">
      <fa icon="images" class="fa" />
      <p v-if="!imageUrl.name">{{ labelPlaceholder }}</p>
      <p v-if="imageUrl.name !== null">{{ imageUrl.name }}</p></label
    >
    <h2 class="profilBox__info">{{ userName }}</h2>
    <button class="profilBox__btn">Sauvegarder</button>
    <button class="profilBox__btn" @click="deleteOneUser()">
      Supprimer votre compte
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "profilComp",
  data: function() {
    return { imageUrl: "" };
  },
  props: {
    labelPlaceholder: {
      type: String,
      default: "Changer d'image de profil",
    },
  },
  computed: {
    ...mapGetters("authentication", {
      userPic: "userPic",
    }),
    ...mapGetters("posts", {
      post: "post",
    }),
    ...mapGetters("authentication", {
      userName: "userName",
    }),
    ...mapGetters("authentication", {
      userId: "userId",
    }),
  },
  methods: {
    onFileSelected(event) {
      this.imageUrl = event.target.files[0];
    },
    deleteOneUser() {
      this.$store.dispatch("authentication/deleteUser", this.userId);
      // this.$router.replace({ name: "Login" });
    },
  },
  updated() {
    // this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profilBox {
  background-color: rgb(36, 36, 36);
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &__info {
    color: white;
  }
  &__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  &__pic {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
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
  .profilBox__input + label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 0.95rem;
    padding-left: 15px;
    padding-right: 20px;
    border-radius: 17.5px;
    width: 50%;
    height: 25px;
    text-overflow: ellipsis;
    overflow: hidden;
    border: solid 2px grey;
    background-color: white;
  }
}
</style>
