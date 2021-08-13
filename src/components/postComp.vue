<template>
  <div id="post" v-for="post of posts" :key="post.id">
    <div class="post">
      <h2 class="post__author">
        <router-link :to="{ name: 'User', params: { uuid: post.UserUuid } }">{{
          post.author
        }}</router-link>

        <button
          @click="deleteOnePost(post.id, userId)"
          v-if="userName === post.author"
          class="post__delete"
        >
          <fa icon="times" class="delete" />
        </button>
      </h2>
      <h3 class="post__title">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </h3>
      <img class="post__image" :src="post.imageUrl" />
      <div id="createComment" class="createComment">
        <h3 class="createComment__author">{{ userName }}</h3>
        <form class="createComment__form">
          <input
            type="text"
            class="createComment__form--content"
            placeholder="Votre commentaire..."
            v-model="content"
          />
          <button
            class="createComment__form--button"
            @click="newComment(post.id)"
          >
            <fa icon="comment" />
          </button>
        </form>
      </div>
      <div id="commentBox" class="commentBox">
        <div class="comment" v-for="comment of post.Comments" :key="comment.id">
          <h3 class="comment__author">{{ comment.author }}</h3>
          <button @click="deleteOneComment(comment.id)" class="comment__delete">
            <fa icon="times" class="delete" />
          </button>
          <p class="comment__content">{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "postComp",
  components: {},
  data: function() {
    return {
      showSideIcon: false,

      content: "",
    };
  },
  props: ["id", "uuid"],
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
    }),
    ...mapGetters("comment", {
      comments: "comments",
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
    deleteOneComment(comment) {
      console.log(comment);
      this.$store.dispatch("posts/deleteComment", comment);
    },
    deleteOnePost(post) {
      const idUser = this.userId;
      // const userInfo = localStorage.getItem("user");
      // console.log(userInfo);
      // console.log(userInfo.userId);
      this.$store.dispatch("posts/deletePost", post + ":" + idUser);
    },
    getAllPosts() {
      this.$store.dispatch("posts/getPosts");
    },
    async newComment(id) {
      if (this.content) {
        const commentBody = {
          author: this.userName,
          content: this.content,
          postId: id,
        };
        ///console.log(commentBody);
        this.$store.dispatch("posts/createComment", commentBody);
        this.content = "";
      }
    },
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#post {
  background-color: rgb(36, 36, 36);
  width: 90%;
  height: 350px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5px;
  // margin-bottom: 5px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  // overflow: hidden;
}
.createComment {
  width: 100%;
  margin-left: 0;
}
.delete {
  color: white;
}
.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 22px;
  &__delete {
    width: 20px;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
  }
  &__author {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 10px;
    color: white;
    border-radius: 17.5px;

    height: 25px;
  }
  &__title {
    margin-top: 10px;
    margin-left: 25px;
    color: white;
  }
  &__image {
    margin-top: 3%;

    width: 100%;
    height: 210px;
    object-fit: cover;

    background-color: white;
  }
  .delete {
    color: rgb(110, 110, 110);
    padding-right: 20px;
  }
  .createComment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(36, 36, 36);
    width: 100%;
    height: 55px;

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
  .commentBox {
    position: relative;
    top: 15px;
  }
  .comment {
    color: white;
    background-color: rgb(36, 36, 36);
    width: 100%;
    height: 75px;
    position: relative;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top: solid 1px rgb(119, 119, 119);
    &__author {
      margin-left: 20px;
      margin-top: 5px;
    }
    &__content {
      margin-left: 20px;
      margin-top: 5px;
    }
  }
}
</style>
