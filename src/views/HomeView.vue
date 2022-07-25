<template>
  <div>
    <h1 class="logo">
      <span class="logo-left">Lead</span><span class="logo-right">Hit</span>
    </h1>
    <IdForm />
  </div>
</template>

<script>
import IdForm from "@/components/IdForm/IdForm";
export default {
  name: "HomeView",
  components: {
    IdForm,
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
