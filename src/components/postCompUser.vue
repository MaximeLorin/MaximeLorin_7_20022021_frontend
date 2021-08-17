<template>
  <div id="post" v-for="post of posts" :key="post.id">
    <div class="post">
      <h2 class="post__author">
        <router-link
          :to="{ name: 'User', params: { uuid: post.UserUuid } }"
          class="align"
          ><img :src="post.imageUser" alt="profile pic" class="profPic" />{{
            post.author
          }}</router-link
        >

        <button
          @click="deleteOnePost(post.id)"
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
            minlength="4"
            maxlength="40"
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
          <p class="comment__content">{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "postCompUser",
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
    reconnectOnRefresh() {
      let connectInfo = JSON.parse(localStorage.getItem("user"));

      this.$store.dispatch("authentication/reconnect", connectInfo);
    },
    deleteOnePost(post) {
      this.$store.dispatch("posts/deletePost", post);
    },
    // getUserPosts() {
    //   console.log(this.userId);
    //   this.$store.dispatch("posts/getUserPosts", this.userId);
    // },
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
    this.reconnectOnRefresh();
    // this.getUserPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#post {
  background-color: rgb(36, 36, 36);
  width: 90%;
  border-bottom-left-radius: 15px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5px;
  // margin-bottom: 5px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  // overflow: hidden;
}
.align {
  display: flex;
  align-items: center;
}
.profPic {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 5px;
  border: 2px solid rgb(110, 110, 110);
}
.delete {
  color: white;
}
.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 360px;
  margin-bottom: 22px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  &__delete {
    width: 20px;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
  }
  &__author {
    margin-top: 20px;
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 10px;
    color: white;
    border-radius: 17.5px;

    height: 25px;
  }
  &__title {
    margin-left: 25px;
    color: white;
  }
  &__image {
    margin-top: 3%;

    width: 100%;
    height: 230px;
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
    height: 45px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
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
    background-color: rgb(119, 119, 119);
  }
  .comment {
    color: white;
    background-color: rgb(36, 36, 36);
    width: 100%;
    height: 80px;
    position: relative;
    border-radius: 15px;
    // border-top-right-radius: 15px;
    // border-bottom-right-radius: 15px;
    border-top: solid 1px rgb(119, 119, 119);
    &__author {
      margin-left: 20px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    &__content {
      margin-left: 20px;
      margin-top: 5px;
      width: 85%;
      height: 25px;
      padding: 3px;
      border-radius: 10px;
      background-color: rgb(138, 138, 138);
    }
  }
}
@media screen and (min-width: 700px) {
  #post {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .post {
    &__image {
      height: 300px;
    }
  }
}
</style>
