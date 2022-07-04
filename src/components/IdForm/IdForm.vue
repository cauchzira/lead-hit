<template>
  <div class="id-form">
    <h1 class="id-form-title">Авторизация</h1>
    <div class="id-input">
      <input
        class="id-input-input_id"
        placeholder="Введите ID сайта"
        type="text"
        v-model="id"
        maxlength="24"
        :style="id.length > 0 ? 'width: 250px;' : ''"
      />
      <span v-if="error" class="id-error">{{ error }}</span>
    </div>
    <button @click="login" class="id-btn">Войти</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { REQUEST_AUTH } from "@/store/action-types";
export default {
  name: "HomeView",
  data() {
    return {
      id: "",
      error: "",
    };
  },
  watch: {
    id: function () {
      if (this.id.length) {
        this.error = "";
      } else {
        this.error = "Id сайта должен содержать 24 символа!";
      }
    },
  },
  methods: {
    ...mapActions({
      auth: REQUEST_AUTH,
    }),
    login() {
      if (this.id.length === 24) {
        this.auth(this.id).then((res) => {
          if (!res.error) {
            const { message } = res;
            if (message && message === "ok") {
              this.$router.push({ path: "/analytics" });
            }
          } else {
            this.error = res.error;
          }
        });
      } else {
        this.error = "Id сайта должен содержать 24 символа!";
      }
    },
  },
  beforeDestroy() {
    this.id = "";
    this.error = "";
  },
};
</script>

<style lang="scss">
.id {
  &-form {
    width: 330px;
    height: 200px;
    box-shadow: 0px 0px 24px #bfbdbd;
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    border-radius: 12px;
    margin: 2% auto;
    &-title {
      font-size: 18px;
      color: #7c7c7c;
    }
  }
  &-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      color: #575757;
      margin-bottom: 12px;
    }
    &-input_id {
      padding: 8px;
      outline: none;
      border: none;
      background-color: #ebebeb;
      border-radius: 8px;
      color: #7e7e7e;
      width: 120px;
      transition: width 1s ease;
      margin-bottom: 8px;
      &:focus {
        width: 250px;
      }
    }
  }
  &-btn {
    width: 70px;
    padding: 8px 12px;
    border: none;
    outline: none;
    background-color: #ff8453;
    color: #ffffff;
    border-radius: 6px;
    transition: 0.25s ease;
    &:hover {
      transform: translateY(-3px);
      background-color: darken($color: #ff8453, $amount: 7%);
    }
    &:active {
      background-color: darken($color: #ff8453, $amount: 20%);
    }
  }
  &-error {
    color: #ff3838;
  }
}
</style>
