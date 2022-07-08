<template>
  <div id="app">
    <Logout v-if="isLogin" />
    <router-view />
  </div>
</template>

<script>
import Logout from "@/components/Logout/Logout.vue";
export default {
  components: {
    Logout,
  },
  computed: {
    isLogin() {
      if (this.$route.path === "/auth" || this.$route.path === "/")
        return false;
      else return true;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import "@/assets/reset.scss";
</style>
