<template>
  <div>
    <div class="not-found">
      <h1 class="not-found_title">Oops...</h1>
      <h2 class="not-found_subtitle">404</h2>
      <h2 class="not-found_text">Page not found!</h2>
      <div class="" v-if="isAuth.url !== '/auth'">
        <p class="not-found_link-text">
          Для вас доступна страница:
          <router-link class="not-found-link" :to="isAuth.url">{{
            isAuth.nameUrl
          }}</router-link>
        </p>
      </div>
      <div class="" v-else>
        <p class="not-found_link-text">
          Для доступа к ресурсу Вам необходимо войти!
        </p>
        <router-link class="not-found-link" :to="isAuth.url">{{
          isAuth.nameUrl
        }}</router-link>
      </div>
    </div>
    <Background />
  </div>
</template>

<script>
import Background from "@/components/Background/Background";
export default {
  name: "NotFound",
  components: {
    Background,
  },
  computed: {
    isAuth() {
      let token = window.localStorage.getItem("leadhit-site-id");
      let data = {};
      if (token) {
        data.url = `/analytics`;
        data.nameUrl = "Аналитики";
        return data;
      } else {
        data.url = `/auth`;
        data.nameUrl = "Авторизация";
        return data;
      }
    },
  },
};
</script>

<style lang="scss">
.not-found {
  margin: 8% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 230px;
  color: #ff5715;
  &_title {
    font-size: 64px;
  }
  &_subtitle {
    font-size: 42px;
  }
  &_text {
    font-size: 42px;
  }
  &-link {
    text-decoration: none;
    color: #ff5715;
  }
  &_link-text {
    margin-bottom: 12px;
    color: #000000;
  }
}
</style>
