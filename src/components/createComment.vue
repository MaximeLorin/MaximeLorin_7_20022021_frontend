<template>
  <div id="createComment" class="createComment">
    <h3 class="createComment__author">{{ userName }}</h3>
    <form class="createComment__form">
      <input
        type="text"
        class="createComment__form--content"
        placeholder="Votre commentaire..."
        v-model="content"
      />
      <button class="createComment__form--button" @click="newComment">
        <fa icon="comment" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "createComment",
  data: function() {
    return { author: "", content: "" };
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
  methods: {
    async newComment() {
      if (this.content) {
        const commentBody = {
          author: this.userName,
          content: this.content,
          postId: this.post.id,
        };
        ///console.log(commentBody);
        this.$store.dispatch("posts/createComment", commentBody);
        this.content = "";
      }
    },
  },
  updated() {
    // this.getComments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.createComment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(36, 36, 36);
  width: 90%;
  height: 65px;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: -20px;
  border-bottom-right-radius: 15px;
  border-top: solid 1px rgb(119, 119, 119);
  &__author {
    margin-left: 20px;
    color: white;
  }
  &__form {
    margin-right: 20px;
  }
}

.createComment__form--content {
  font-size: 0.95rem;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 17.5px;
  width: 150px;
  height: 25px;
  margin-right: 15px;
  border: solid 2px grey;
  background-color: white;
}
.createComment__form--button {
  border-radius: 17.5px;
  width: 35px;
  height: 35px;
  font-size: 1.5rem;
  background-color: white;
  &:hover {
    background-color: grey;
    color: white;
    transition-duration: 0.5s;
    cursor: pointer;
  }
}
</style>
