<template>
  <div class="logout-form">
    <div @click="open" class="logout-form-item">
      <span class="logout-form-btn">Выход</span>
    </div>
    <LogoutModal />
  </div>
</template>

<script>
import LogoutModal from "@/components/Modals/LogoutModal.vue";
export default {
  components: {
    LogoutModal,
  },
  methods: {
    open() {
      this.$root.$emit("openLogout");
    },
  },
};
</script>

<style lang="scss">
.logout-form {
  display: flex;
  justify-content: flex-end;
  &-item {
    padding: 10px;
    margin: 10px;
    border: 1px solid #fdb13e;
    transition: all 0.5s ease;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #fdb13e;
      color: #fff;
    }
  }
  &-btn {
  }
}
</style>
