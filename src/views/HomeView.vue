<template>
  <div>
    <h1 class="logo">
      <span class="logo-left">Lead</span><span class="logo-right">Hit</span>
    </h1>
    <IdForm />
    <Background />
  </div>
</template>

<script>
import IdForm from "@/components/IdForm/IdForm";
import Background from "@/components/Background/Background";
export default {
  name: "HomeView",
  components: {
    IdForm,
    Background,
  },
};
</script>

<style lang="scss">
.logo {
  margin-top: 8%;
  &-left,
  &-right {
    font-size: 43px;
  }
  &-left {
    color: #ff5715;
  }
}
</style>
