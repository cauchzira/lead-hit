<template>
  <div
    @click.self="close"
    class="overlay"
    :class="{ 'overlay-visible': isOpen, 'overlay-hide': !isOpen }"
  >
    <div
      class="modal-content"
      :class="{
        'modal-content-visible': isOpen,
        'modal-content-hide': !isOpen,
      }"
    >
      <span @click="close" class="modal-close">X</span>
      <div class="modal-content-wrapper">
        <h2 class="modal-content-title">Вы точно хотите выйти?</h2>
        <div class="modal-content-bnts">
          <button
            @click="logout"
            class="modal-content-btn modal-content-btn-accept"
          >
            Да
          </button>
          <button
            @click="close"
            class="modal-content-btn modal-content-btn-reject"
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("leadhit-site-id");
      const token = window.localStorage.getItem("leadhit-site-id");
      if (!token) {
        this.close();
        setTimeout(() => {
          this.$router.push({ path: "/auth" });
        }, 300);
      }
    },
    close() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.$root.$on("openLogout", () => {
      this.isOpen = !this.isOpen;
    });
  },
};
</script>

<style lang="scss">
.overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #0000006b;
  transition: all 0.7s ease;
  &-visible {
    z-index: 2;
    opacity: 1;
  }
  &-hide {
    opacity: 0;
    z-index: -1;
  }
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.modal-content {
  background-color: #ffffff;
  max-width: 400px;
  height: 150px;
  position: relative;
  margin: 20% auto;
  border-radius: 8px;
  transition: all 0.3s ease;
  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  &-title {
    margin: 18px 0;
  }
  &-visible {
    z-index: 5;
    opacity: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  &-hide {
    z-index: 2;
    opacity: 0;
    z-index: -1;
  }
  &-bnts {
    display: flex;
    justify-content: space-between;
    width: 45%;
  }
  &-btn {
    padding: 8px 30px;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    &-accept {
      background-color: #1bc928;
    }
    &-reject {
      background-color: #ff4747;
    }
  }
}
</style>
